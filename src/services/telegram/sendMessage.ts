import { bot } from '.'
import { RequestMessage } from '@/services/utils'
import { prisma } from '@/services/db'
import type { requestType } from '@/types'

const sendMessages = async (requestData: requestType) => {
  try {
    if (!bot) {
      throw new Error('Telegram bot token is not defined')
    }

    const cathList = await prisma.telegramChat.findMany({
      select: {
        chatId: true,
      },
    })

    const chatIdList = cathList.map((item) => item.chatId)

    const requestMessage = new RequestMessage(requestData)

    return await Promise.allSettled(
      chatIdList.map((chatId) => {
        if (!bot) {
          throw new Error('Telegram bot token is not defined')
        }
        return bot.telegram.sendMessage(chatId, requestMessage.markdown(), {
          parse_mode: 'Markdown',
        })
      })
    )
  } catch (error) {
    console.log(error)
    return []
  }
}

export default sendMessages
