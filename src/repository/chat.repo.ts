import { prisma } from '@/services/db'

class Chat {
  public async add(data: { chatId: string }) {
    return await prisma.telegramChat.create({
      data,
    })
  }

  public async deleteById(chatId: string) {
    return await prisma.telegramChat.delete({
      where: {
        chatId,
      },
    })
  }

  public async getById(chatId: string) {
    return await prisma.telegramChat.findUnique({
      where: {
        chatId,
      },
    })
  }

  public async getAll() {
    return await prisma.telegramChat.findMany({
      select: {
        chatId: true,
      },
    })
  }
}

const chatRepo = new Chat()

export default chatRepo
