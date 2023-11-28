import { Request } from '@prisma/client'

interface IMessageConfig {
  rBold: string
  lBold: string
  newLine: string
}

class RequestMessage {
  private readonly NA_STRING = '---'

  constructor(private readonly requestData: Request) {}

  private generateMessage(config: IMessageConfig) {
    const { rBold, lBold, newLine } = config
    const {
      name,
      phoneNumber,
      email,
      carBrand,
      carModel,
      carYear,
      vinCode,
      message,
    } = this.requestData

    return `
    ${rBold}Нова заявка з сайту!${lBold}${newLine}
    ${rBold}Ім'я:${lBold} ${name}
    ${rBold}Телефон:${lBold} ${phoneNumber}
    ${rBold}Email:${lBold} ${email || this.NA_STRING}
    ${rBold}Марка авто:${lBold} ${carBrand || this.NA_STRING}
    ${rBold}Модель авто:${lBold} ${carModel || this.NA_STRING}
    ${rBold}Рік авто:${lBold} ${carYear || this.NA_STRING}
    ${rBold}VIN код:${lBold} ${vinCode || this.NA_STRING}
    ${rBold}Повідомлення:${lBold} ${message || this.NA_STRING}`
  }

  markdown() {
    return this.generateMessage({
      rBold: '*',
      lBold: '*',
      newLine: '\n',
    })
  }

  html() {
    return this.generateMessage({
      rBold: '<b>',
      lBold: '</b>',
      newLine: '<br/><br/>',
    })
  }

  text() {
    return this.generateMessage({
      rBold: '',
      lBold: '',
      newLine: '\n',
    })
  }
}

export default RequestMessage
