import { Telegraf } from 'telegraf'

const botToken: string | undefined = process.env.TELEGRAM_BOT_TOKEN

let bot: Telegraf | undefined

if (botToken) {
  bot = new Telegraf(botToken)
}

export default bot
