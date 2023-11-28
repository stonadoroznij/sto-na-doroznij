import { bot } from '.'
import { RequestMessage } from '@/services/utils'
import { getAllChats } from '@/services/tgBotDBService'
import { Request } from '@prisma/client'

const sendMessages = async (requestData: Request) => {
  try {
    const cathList = await getAllChats()

    const chatIdList = cathList.map((item) => item.chatId)

    const requestMessage = new RequestMessage(requestData)

    return await Promise.allSettled(
      chatIdList.map((chatId) => {
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
