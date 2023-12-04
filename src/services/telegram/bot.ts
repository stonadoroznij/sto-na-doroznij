import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { chatRepo } from '@/repository'
import { TelegramBot } from '@/i18n/uk'
import { timingSafeEqual } from 'crypto'

class Bot {
  private bot: Telegraf
  private token: string
  private password: string

  constructor() {
    const token = process.env.TELEGRAM_BOT_TOKEN || ' '
    const password = process.env.TELEGRAM_BOT_PASSWORD || ' '

    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is not defined')
    }
    this.token = token

    if (!password) {
      throw new Error('TELEGRAM_BOT_PASSWORD is not defined')
    }
    this.password = password

    this.bot = new Telegraf(this.token)

    this.setup()
    this.start()
  }

  public async sendMessage(text: string) {
    try {
      const chatList = await chatRepo.getAll()
      const chatIdList = chatList.map((item) => item.chatId)

      return await Promise.allSettled(
        chatIdList.map((chatId) => {
          return this.bot.telegram.sendMessage(chatId, text, {
            parse_mode: 'Markdown',
          })
        })
      )
    } catch (error) {
      console.log(error)
      return []
    }
  }

  private setup() {
    const isSubscribing: Set<number> = new Set()
    const password = this.password
    const bot = this.bot

    bot.start((ctx) => {
      ctx.reply(`${TelegramBot.startMessage}`)
    })

    bot.command('join', async (ctx) => {
      const { chat } = ctx.message
      const chatId = chat.id.toString()
      const isChatExist = await chatRepo.getById(chatId)

      if (isChatExist) {
        ctx.reply(TelegramBot.alreadySubscribed)
        return
      }

      if (!isSubscribing.has(chat.id)) {
        isSubscribing.add(chat.id)
      }

      ctx.reply(TelegramBot.writePassword)
    })

    bot.command('leave', async (ctx) => {
      const chatId = ctx.message.chat.id.toString()
      const isChatExist = await chatRepo.getById(chatId)

      if (!isChatExist) {
        ctx.reply(TelegramBot.notSubscribed)
        return
      }

      await chatRepo.deleteById(chatId)

      ctx.reply(TelegramBot.unsubscribe)
    })

    bot.on(message('text'), async (ctx) => {
      const { text, chat } = ctx.update.message

      if (!isSubscribing.has(chat.id)) return

      if (timingSafeEqual(Buffer.from(text), Buffer.from(password))) {
        const chatId = chat.id.toString()
        await chatRepo.add({
          chatId: chatId,
        })
        ctx.reply(TelegramBot.subscribe)
        isSubscribing.delete(chat.id)
        return
      }

      ctx.reply(TelegramBot.wrongPassword)
    })

    bot.on('my_chat_member', async (ctx) => {
      const { my_chat_member } = ctx.update
      const chatId = my_chat_member.chat.id.toString()

      if (my_chat_member.new_chat_member.status === 'kicked') {
        await chatRepo.deleteById(chatId)
      }
    })
  }

  private async start() {
    await this.bot.launch()
  }
}

declare global {
  var bot: Bot
}

const bot = globalThis.bot ?? new Bot()

if (process.env.NODE_ENV !== 'production') globalThis.bot = bot

export default bot
