'use server'
import { TSmallFormValues, smallFromSchema } from '@/types'

export async function smallFormRequest(formData: TSmallFormValues) {
    const parse = smallFromSchema.safeParse(formData)

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
