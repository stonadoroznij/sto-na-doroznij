import { prisma } from '@/services/db'

const getAllChats = async () => {
  try {
    return await prisma.telegramChat.findMany({
      select: {
        chatId: true,
      },
    })
  } catch (error) {
    console.log(error)
    return []
  }
}

export default getAllChats
