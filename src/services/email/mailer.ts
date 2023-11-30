import { createTransport } from 'nodemailer'
import { RequestMessage } from '@/services/utils'
import { Transporter } from 'nodemailer'
import { Request } from '@prisma/client'
import { Email } from '@/i18n/uk'

class Mailer {
  private transporter: Transporter
  private user: string

  constructor() {
    const mailHost = process.env.MAIL_HOST
    const mailPort = process.env.MAIL_PORT
    const mailUser = process.env.MAIL_USER
    const mailPassword = process.env.MAIL_PASSWORD

    if (!mailHost || !mailPort || !mailUser || !mailPassword) {
      throw new Error('Missing mail configuration')
    }

    this.transporter = createTransport({
      host: mailHost,
      port: Number(mailPort),
      secure: true,
      auth: {
        user: mailUser,
        pass: mailPassword,
      },
    })

    this.user = mailUser
  }

  public async sendMe(request: Request) {
    const message = new RequestMessage(request)

    return await this.transporter.sendMail({
      from: `STO na Doroznij ${this.user}`,
      to: this.user,
      subject: Email.newRequestSubject,
      text: message.text(),
      html: message.html(),
    })
  }
}

const mailer = new Mailer()

export default mailer
