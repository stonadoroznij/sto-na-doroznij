import { Request, Service } from '@prisma/client'
import { TelegramBot } from '@/i18n/uk'
import { MessageData } from '@/types'

const { requestTemplate } = TelegramBot

class RequestMessage {
  private readonly NA_STRING = '---'

  constructor(
    private readonly requestData: Request,
    private readonly services: Service[]
  ) {}

  private dataToSrt(): MessageData {
    const { requestData } = this
    const { id, ...restData } = requestData
    const keys = Object.keys(restData) as (keyof Omit<Request, 'id'>)[]

    return keys.reduce<MessageData>((acc, key) => {
      const value = restData[key]
      acc[key] = value || this.NA_STRING

      return acc
    }, {} as MessageData)
  }

  private servicesToStr() {
    const { services } = this
    const servicsNames = services.map(({ name }) => name)
    return servicsNames.join(', ') || this.NA_STRING
  }

  markdown() {
    return requestTemplate(this.dataToSrt(), this.servicesToStr(), {
      rBold: '*',
      lBold: '*',
      newLine: '',
    })
  }

  html() {
    return requestTemplate(this.dataToSrt(), this.servicesToStr(), {
      rBold: '<b>',
      lBold: '</b>',
      newLine: '<br/>',
    })
  }

  text() {
    return requestTemplate(this.dataToSrt(), this.servicesToStr(), {
      rBold: '',
      lBold: '',
      newLine: '',
    })
  }
}

export default RequestMessage
