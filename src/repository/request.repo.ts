import { FormValues } from '@/schemas/zod-schemas'
import { prisma } from '@/services/db'

class Request {
  public async add(formData: FormValues) {
    const { phone, services, carYear, ...rest } = formData

    const result = await prisma.request.create({
      data: {
        phoneNumber: phone,
        carYear: carYear ? Number.parseInt(carYear) : null,
        ...rest,
        services: {
          connect: services?.map((service) => ({ id: service })),
        },
      },
    })
    return result
  }

  public async getById(id: number) {
    const result = await prisma.request.findUnique({
      where: { id },
      include: {
        services: true,
      },
    })

    return result
  }
}

const requestRepo = new Request()

export default requestRepo
