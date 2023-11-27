import { bot } from './'
import { prisma } from '@/services/db'

const startBot = () => {
  const password = process.env.TELEGRAM_SUBSCRIBE_PASSWORD

  if (!bot || !password) {
    throw new Error('Telegram bot is not defined or password is not defined')
  }

  const isSubscribing = new Map()

  bot.start((ctx) => {
    ctx.reply(
      `Привіт! Я бот, який буде надсилати тобі повідомлення про заявки на послуги в "СТО на Дорожній". 

    Список команд:
      /start показати це повідомлення
      /join підписатись на розсилку
      /leave відписатись від розсилки

Щоб не загубити команди, закріпи це повідомлення в чаті!`
    )
  })

  bot.command('join', async (ctx) => {
    const { chat } = ctx.message

    const isChatExist = await prisma.telegramChat.findUnique({
      where: {
        chatId: chat.id.toString(),
      },
    })

    if (isChatExist) {
      ctx.reply('Ви вже підписані на розсилку!')
      return
    }

    if (!isSubscribing.get(chat.id)) {
      isSubscribing.set(chat.id, true)
    }

    ctx.reply('Введіть пароль!')
  })

  bot.command('leave', async (ctx) => {
    const { chat } = ctx.message

    const isChatExist = await prisma.telegramChat.findUnique({
      where: {
        chatId: chat.id.toString(),
      },
    })

    if (!isChatExist) {
      ctx.reply('Ви не підписані на розсилку!')
      return
    }

    await prisma.telegramChat.delete({
      where: {
        chatId: chat.id.toString(),
      },
    })

    ctx.reply('Ви відписались від розсилки')
  })

  bot.on('message', async (ctx) => {
    if ('text' in ctx.update.message === false) return
    const { chat, text } = ctx.update.message

    if (!isSubscribing.get(chat.id)) return

    if (text === password) {
      await prisma.telegramChat.create({
        data: {
          chatId: chat.id.toString(),
        },
      })
      ctx.reply('Ви підписались на розсилку!')
      isSubscribing.set(chat.id, false)
      return
    }

    ctx.reply('Неправильний пароль!')
  })

  bot.on('my_chat_member', async (ctx) => {
    const { my_chat_member } = ctx.update

    if (my_chat_member.new_chat_member.status === 'kicked') {
      await prisma.telegramChat.delete({
        where: {
          chatId: my_chat_member.chat.id.toString(),
        },
      })
    }
  })

  bot.launch()
}

export default startBot
