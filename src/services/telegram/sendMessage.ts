import { Telegraf } from 'telegraf'
import { RequestMessage } from '../utils'
import type { requestType } from '../../types'

const sendMessage = async (requestData: requestType) => {
    try {
        const botToken: string | undefined = process.env.TELEGRAM_BOT_TOKEN
        const chatId: string | undefined = process.env.TELEGRAM_CHAT_ID

        if (!botToken || !chatId) {
            throw new Error('Telegram bot token or chat id is not defined')
        }

        const bot = new Telegraf(botToken)

        const requestMessage = new RequestMessage(requestData)

        await bot.telegram.sendMessage(chatId, requestMessage.markdown(), {
            parse_mode: 'Markdown',
        })
    } catch (error) {
        console.log(error)
    }
}

export default sendMessage
