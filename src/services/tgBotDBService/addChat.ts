import { prisma } from '@/services/db'

interface IChatData {
  chatId: string
}

const addChat = async (data: IChatData) => {
  try {
    return await prisma.telegramChat.create({
      data,
    })
  } catch (error) {
    console.log(error)
    return null
  }
}

export default addChat
