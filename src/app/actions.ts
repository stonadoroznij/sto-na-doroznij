'use server'

import { Actions, Email } from '@/i18n/uk'
import { requestRepo, serviceRepo } from '@/repository'
import { FormValues, formSchema } from '@/schemas/zod-schemas'
import { mailer } from '@/services/email'
import { bot } from '@/services/telegram'
import { RequestMessage } from '@/services/utils'

export async function FormRequest(formData: FormValues) {
  const parse = formSchema.safeParse(formData)

  const errorMessage = {
    success: false,
    message: Actions.form.errorMessages,
  }

  if (!parse.success) {
    return errorMessage
  }

  try {
    const res = await requestRepo.add(formData)
    const servicesList = await serviceRepo.getByIdList(formData.services || [])
    const services = servicesList.map((s) => s.name)

    const message = new RequestMessage(res, services)

    bot.sendMessage(message.markdown())
    mailer.sendMessageToAdmin({
      subject: Email.newRequestSubject,
      text: message.text(),
      html: message.html(),
    })

    return {
      success: true,
      message: Actions.form.successMessages,
    }
  } catch (e) {
    console.log(e)
    return errorMessage
  }
}
