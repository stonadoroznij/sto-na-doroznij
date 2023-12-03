import { createTransport } from 'nodemailer'
import { Transporter } from 'nodemailer'
import { EmailData } from '@/types'

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

  public async sendMessage(emailData: EmailData, recipient: string) {
    return await this.transporter.sendMail({
      from: `STO na Doroznij ${this.user}`,
      to: recipient,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html,
    })
  }

  public async sendMessageToAdmin(emailData: EmailData) {
    const admin = this.user

    this.sendMessage(emailData, admin)
  }
}

const mailer = new Mailer()

export default mailer
