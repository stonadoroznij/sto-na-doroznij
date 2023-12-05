import { prisma } from '@/services/db'

class Chat {
  public async add(data: { chatId: string }) {
     const result = prisma.telegramChat.create({
      data,
    })

    prisma.$disconnect()
    return result
  }

  public async deleteById(chatId: string) {
     const result = prisma.telegramChat.delete({
      where: {
        chatId,
      },
    })

    prisma.$disconnect()
    return result
  }

  public async getById(chatId: string) {
     const result = prisma.telegramChat.findUnique({
      where: {
        chatId,
      },
    })
        
    prisma.$disconnect()
    return result
  }

  public async getAll() {
     const result = prisma.telegramChat.findMany({
      select: {
        chatId: true,
      },
    })
        
    prisma.$disconnect()
    return result
  }
}

const chatRepo = new Chat()

export default chatRepo
