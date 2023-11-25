import { bot } from './'
import { prisma } from '@/services/db'

const startBot = () => {
  if (!bot) {
    throw new Error('Telegram bot is not defined')
  }

  bot.start((ctx) => {
      ctx.reply('start')
  })

  bot.on('my_chat_member', async (ctx) => {
    const { my_chat_member } = ctx.update

    if (ctx.update.my_chat_member.new_chat_member.status === 'member') {
      await prisma.telegramChat.create({
        data: {
          chatId: my_chat_member.chat.id.toString(),
          firstName: my_chat_member.from.first_name,
          lastName: my_chat_member.from.last_name,
          username: my_chat_member.from.username,
        },
      })
    }

    if (ctx.update.my_chat_member.new_chat_member.status === 'kicked') {
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
