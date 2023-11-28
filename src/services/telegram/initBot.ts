import { Telegraf } from 'telegraf'

const botToken: string | undefined = process.env.TELEGRAM_BOT_TOKEN

if (!botToken) {
  throw new Error('TELEGRAM_BOT_TOKEN must be provided!')
}

const bot = new Telegraf(botToken)

export default bot
