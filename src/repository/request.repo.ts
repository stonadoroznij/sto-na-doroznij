import { prisma } from '@/services/db'
import { FormValues } from '@/schemas/zod-schemas'
// import { serviceRepo } from './'

class Request {
  public async add(formData: FormValues) {
    const { phone, services, carYear, ...rest } = formData

    const result = await prisma.$transaction(async (prisma) => {
      const foundServices = await prisma.service.findMany({
        where: {
          name: {
            in: services,
          },
        },
        select: {
          id: true,
        },
      })

      return prisma.request.create({
        data: {
          ...rest,
          phoneNumber: phone,
          carYear: Number(carYear),
          services: {
            connect: foundServices,
          },
        },
        include: {
          services: true,
        },
      })
    })

    prisma.$disconnect()
    return result
  }

  public async getById(id: number) {
    const result = await prisma.request.findUnique({
      where: { id },
      include: {
        services: true,
      },
    })

    prisma.$disconnect()
    return result
  }
}

const requestRepo = new Request()

export default requestRepo
