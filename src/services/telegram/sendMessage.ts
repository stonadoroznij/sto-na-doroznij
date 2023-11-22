import { Telegraf } from "telegraf";
import { RequestMessage } from "../utils";
import type { requestType } from "../../types";

const TELEGRAM_BOT_TOKEN: string | undefined = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID: string | undefined = process.env.TELEGRAM_CHAT_ID;

const bot = new Telegraf(TELEGRAM_BOT_TOKEN as string);

const sendMessage = async (requestData: requestType) => {
  try {
    const requestMessage = new RequestMessage(requestData);

    await bot.telegram.sendMessage(
      TELEGRAM_CHAT_ID as string,
      requestMessage.markdown(),
      {
        parse_mode: "Markdown",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default sendMessage;
