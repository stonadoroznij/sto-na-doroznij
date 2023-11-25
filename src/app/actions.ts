'use server'
import { TQuickFormValues, quickFormSchema } from '@/types'

export async function QuickFormRequest(formData: TQuickFormValues) {
    const parse = quickFormSchema.safeParse(formData)

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
