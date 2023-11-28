import { bot } from './'
import { getChatById, addChat, deleteChatById } from '@/services/tgBotDBService'
import { telegramBot } from '@/i18n/uk'

const startBot = () => {
  const password = process.env.TELEGRAM_SUBSCRIBE_PASSWORD

  if (!password) {
    throw new Error('Password is not defined')
  }

  const isSubscribing = new Set()

  bot.telegram.setMyShortDescription(telegramBot.commandList)

  bot.start((ctx) => {
    ctx.reply(`${telegramBot.startMessage} ${telegramBot.commandList}`)
  })

  bot.command('join', async (ctx) => {
    const { chat } = ctx.message

    const isChatExist = await getChatById(chat.id.toString())

    if (isChatExist) {
      ctx.reply(telegramBot.allredySubscribed)
      return
    }

    if (!isSubscribing.has(chat.id)) {
      isSubscribing.add(chat.id)
    }

    ctx.reply(telegramBot.writePassword)
  })

  bot.command('leave', async (ctx) => {
    const { chat } = ctx.message

    const isChatExist = await getChatById(chat.id.toString())

    if (!isChatExist) {
      ctx.reply(telegramBot.dontSubscribed)
      return
    }

    await deleteChatById(chat.id.toString())

    ctx.reply(telegramBot.unsubscribe)
  })

  bot.on('message', async (ctx) => {
    if ('text' in ctx.update.message === false) return
    const { chat, text } = ctx.update.message

    if (!isSubscribing.has(chat.id)) return

    if (text === password) {
      await addChat({
        chatId: chat.id.toString(),
      })
      ctx.reply(telegramBot.subscribe)
      isSubscribing.delete(chat.id)
      return
    }

    ctx.reply(telegramBot.falsePassword)
  })

  bot.on('my_chat_member', async (ctx) => {
    const { my_chat_member } = ctx.update

    if (my_chat_member.new_chat_member.status === 'kicked') {
      await deleteChatById(my_chat_member.chat.id.toString())
    }
  })

  bot.launch()
}

export default startBot
