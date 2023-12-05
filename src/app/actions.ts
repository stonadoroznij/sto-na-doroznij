'use server'
import { FormValues, formSchema } from '@/schemas/zod-schemas'

export async function FormRequest(formData: FormValues) {
  console.log(formData)
  const parse = formSchema.safeParse(formData)

  if (!parse.success) {
    return { message: 'Помилка запису даних форми' }
  }

  const data = parse.data

  try {
    //fake request to db
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, 1000)
    })
    return { message: `Форма успішно надіслана` }
  } catch (e) {
    return { message: 'Помилка запису даних форми' }
  }
}
