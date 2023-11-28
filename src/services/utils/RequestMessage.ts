import { Request } from '@prisma/client'
import { TelegramBot } from '@/i18n/uk'
import { MessageData } from '@/types'

const { requestTemplate } = TelegramBot

class RequestMessage {
  private readonly NA_STRING = '---'

  constructor(private readonly requestData: Request) {}

  private dataToSrt = (requestData: Request): MessageData => {
    const {
      name,
      phoneNumber,
      email = this.NA_STRING,
      carBrand = this.NA_STRING,
      carModel = this.NA_STRING,
      carYear = this.NA_STRING,
      vinCode = this.NA_STRING,
      message = this.NA_STRING,
    } = requestData

    return {
      name,
      phoneNumber,
      email,
      carBrand,
      carModel,
      carYear: carYear ? carYear.toString() : this.NA_STRING,
      vinCode,
      message,
    }
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
