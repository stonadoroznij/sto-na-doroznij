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

    prisma.$disconnect()
    return result
  }

  public async getManyByNames(names: string[]) {
    return await prisma.service.findMany({
      where: {
        name: {
          in: names,
        },
      },
    })
  }

  public async getAll(data: any) {
    const result = await prisma.service.findMany(data)

    prisma.$disconnect()
    return result
  }
}

const serviceRepo = new Service()

export default serviceRepo
