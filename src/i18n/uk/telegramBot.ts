import { MessageData, MessageConfig } from '@/types'

const TelegramBot = {
  writePassword: 'Введіть пароль!',
  wrongPassword: 'Невірний пароль!',
  alreadySubscribed: 'Ви вже підписані на розсилку!',
  notSubscribed: 'Ви не підписані на розсилку!',
  subscribe: 'Ви підписалися на розсилку!',
  unsubscribe: 'Ви відписались від розсилки!',
  startMessage:
    'Привіт! Я бот, який буде надсилати тобі повідомлення про заявки на послуги в "СТО на Дорожній". Для початку роботи підпишись на розсилку командою /join.',
  requestTemplate: (messageData: MessageData, config: MessageConfig) => {
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
    } = messageData

    return `
      ${rBold}Нова заявка з сайту!${lBold}${newLine}
      ${rBold}Ім'я:${lBold} ${name}
      ${rBold}Телефон:${lBold} ${phoneNumber}
      ${rBold}Email:${lBold} ${email}
      ${rBold}Марка авто:${lBold} ${carBrand}
      ${rBold}Модель авто:${lBold} ${carModel}
      ${rBold}Рік авто:${lBold} ${carYear}
      ${rBold}VIN код:${lBold} ${vinCode}
      ${rBold}Повідомлення:${lBold} ${message}`
  },
}

export default TelegramBot
