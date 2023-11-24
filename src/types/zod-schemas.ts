
import { z } from 'zod'

export const smallFromSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Ім'я обов'язкове поле!" })
        .min(2, "Ім'я повинно мати більше 1 символу")
        .trim(),
    phone: z
        .string({ required_error: "Телефон обо'язковий!" })
        .min(1, { message: "Телефон обов'язкове поле!" })
        .min(10, { message: 'Невірний телефон!' }),
})
 
export type TSmallFormValues = z.infer<typeof smallFromSchema>