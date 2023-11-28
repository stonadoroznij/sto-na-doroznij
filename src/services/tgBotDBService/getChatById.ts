import { prisma } from '@/services/db'

const getChatById = async (chatId: string) => {
  try {
    return await prisma.telegramChat.findUnique({
      where: {
        chatId,
      },
    })
  } catch (error) {
    console.log(error)
    return null
  }
}

export default getChatById