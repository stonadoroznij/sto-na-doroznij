import { Request } from '@prisma/client'
import { TelegramBot } from '@/i18n/uk'
import { MessageData } from '@/types'

const { requestTemplate } = TelegramBot

class RequestMessage {
  private readonly NA_STRING = '---'

  constructor(private readonly requestData: Request) {}

  private dataToSrt(requestData: Request): MessageData {
    const { id, ...restData } = requestData
    const keys = Object.keys(restData) as (keyof Omit<Request, 'id'>)[]

    return keys.reduce<MessageData>((acc, key) => {
      const value = restData[key]
      acc[key] = value || this.NA_STRING

      return acc
    }, {} as MessageData)
  }

  markdown() {
    return requestTemplate(this.dataToSrt(this.requestData), {
      rBold: '*',
      lBold: '*',
      newLine: '\n',
    })
  }

  html() {
    return requestTemplate(this.dataToSrt(this.requestData), {
      rBold: '<b>',
      lBold: '</b>',
      newLine: '<br/><br/>',
    })
  }

  text() {
    return requestTemplate(this.dataToSrt(this.requestData), {
      rBold: '',
      lBold: '',
      newLine: '\n',
    })
  }
}

export default RequestMessage
