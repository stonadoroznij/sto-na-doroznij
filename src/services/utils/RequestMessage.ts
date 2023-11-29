import { Request } from '@prisma/client'
import { TelegramBot } from '@/i18n/uk'
import { MessageData } from '@/types'

const { requestTemplate } = TelegramBot

class RequestMessage {
  private readonly NA_STRING = '---'

  constructor(private readonly requestData: Request) {}

  private dataToSrt = (requestData: Request): MessageData => {
    const keys = Object.keys(requestData) as (keyof Request)[]

    return keys.reduce((acc, key) => {
      const value = requestData[key]
      if (key === 'id') return acc
      acc[key] = value ? value.toString() : this.NA_STRING

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
