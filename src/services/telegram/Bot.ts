import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import { dbChat } from '@/services/dbRepositories'
import { RequestMessage } from '@/services/utils'
import { TelegramBot } from '@/i18n/uk'
import { timingSafeEqual } from 'crypto'
import { Request } from '@prisma/client'

class Bot {
  private bot: Telegraf
  private readonly password: string

  constructor(token: string, password: string) {
    this.bot = new Telegraf(token)
    this.password = password

    this.setup()
    this.start()
  }

  public sendMessage = async (requestData: Request) => {
    try {
      const chatList = await dbChat.getAll()
      const chatIdList = chatList.map((item) => item.chatId)

      const requestMessage = new RequestMessage(requestData)

      return await Promise.allSettled(
        chatIdList.map((chatId) => {
          return this.bot.telegram.sendMessage(
            chatId,
            requestMessage.markdown(),
            {
              parse_mode: 'Markdown',
            }
          )
        })
      )
    } catch (error) {
      console.log(error)
      return []
    }
  }

  private setup = () => {
    const isSubscribing: Set<number> = new Set()
    const password = this.password
    const bot = this.bot

    bot.start((ctx) => {
      ctx.reply(`${TelegramBot.startMessage}`)
    })
  
    bot.command('join', async (ctx) => {
      const { chat } = ctx.message
      const chatId = chat.id.toString()
      const isChatExist = await dbChat.getById(chatId)
  
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
      const isChatExist = await dbChat.getById(chatId)
  
      if (!isChatExist) {
        ctx.reply(TelegramBot.notSubscribed)
        return
      }
  
      await dbChat.deleteById(chatId)
  
      ctx.reply(TelegramBot.unsubscribe)
    })
  
    bot.on(message('text'), async (ctx) => {
      const { text, chat } = ctx.update.message
  
      if (!isSubscribing.has(chat.id)) return
  
      if (timingSafeEqual(Buffer.from(text), Buffer.from(password))) {
        const chatId = chat.id.toString()
        await dbChat.add({
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
        await dbChat.deleteById(chatId)
      }
    })
  }

  private start = async () => {
    await this.bot.launch()
  }
}

const token = process.env.TELEGRAM_BOT_TOKEN
const password = process.env.TELEGRAM_BOT_PASSWORD

if (!token) {
  throw new Error('TELEGRAM_BOT_TOKEN is not defined')
}

if (!password) {
  throw new Error('TELEGRAM_BOT_PASSWORD is not defined')
}

const bot = new Bot(token, password)

export default bot
