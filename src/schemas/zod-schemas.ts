
import { z } from 'zod'

const preprocessPhoneNumber = (value: string) => value.replace(/[()-\s]/g, '');

export const quickFormSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Ім'я обов'язкове поле!" })
        .min(2, "Ім'я повинно мати більше 1 символу")
        .trim(),
    phone: z
        .string({ required_error: "Телефон обо'язковий!" })
        .min(1, { message: "Телефон обов'язкове поле!" })
        .min(10, { message: 'Невірний телефон!' }).refine((value) => /^(?:\+38)?0\d{9}$/.test(preprocessPhoneNumber(value)), {
            message: 'Формат: +380999999999, 0999999999.',
        }),
})
 
export type QuickFormValues = z.infer<typeof quickFormSchema>