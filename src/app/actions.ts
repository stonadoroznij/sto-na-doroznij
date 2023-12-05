'use server'
import { bot } from '@/services/telegram'
import { mailer } from '@/services/email'
import { RequestMessage } from '@/services/utils'
import { FormValues, formSchema } from '@/schemas/zod-schemas'
import { requestRepo } from '@/repository'
import { Actions, Email } from '@/i18n/uk'

export async function FormRequest(formData: FormValues) {
  const parse = formSchema.safeParse(formData)

  const errorMessage = {
    sucsses: false,
    message: Actions.form.errorMessages,
  }

  if (!parse.success) {
    return errorMessage
  }

  try {
    const res = await requestRepo.add(formData)

    const message = new RequestMessage(res)

    bot.sendMessage(message.markdown())
    mailer.sendMessageToAdmin({
      subject: Email.newRequestSubject,
      text: message.text(),
      html: message.html(),
    })

    return {
      sucsses: true,
      message: Actions.form.sucssesMessages,
    }
  } catch (e) {
    console.log(e)
    return errorMessage
  }
}
