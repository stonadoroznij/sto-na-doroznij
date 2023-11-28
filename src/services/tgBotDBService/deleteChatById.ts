import { prisma } from '@/services/db'

const deleteChatById = async (chatId: string) => {
  try {
    return await prisma.telegramChat.delete({
      where: {
        chatId,
      },
    })
  } catch (error) {
    console.log(error)
    return null
  }
}

export default deleteChatById
