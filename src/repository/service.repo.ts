import { prisma } from '@/services/db'

class Service {
  public async getByRequestId(id: number) {
    const result = await prisma.service.findMany({
      where: {
        requests: {
          some: {
            id,
          },
        },
      }
    })

    prisma.$disconnect()
    return result
  }
}

const serviceRepo = new Service()

export default serviceRepo
