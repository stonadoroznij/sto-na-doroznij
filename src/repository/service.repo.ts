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
      },
    })

    return result
  }

  public async getAll() {
    const result = await prisma.service.findMany()

    return result
  }
}

const serviceRepo = new Service()

export default serviceRepo
