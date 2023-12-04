import { z } from 'zod'

const preprocessPhoneNumber = (value: string) => value.replace(/[()-\s]/g, '')

const currentYear = new Date().getFullYear()

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Ім'я обов'язкове поле!" })
    .min(2, "Ім'я повинно мати більше 1 символу")
    .trim(),
  phone: z
    .string()
    .min(1, { message: "Телефон обов'язкове поле!" })
    .min(10, { message: 'Невірний телефон!' })
    .trim()
    .refine((value) => /^(?:\+38)?0\d{9}$/.test(preprocessPhoneNumber(value)), {
      message: 'Формат: +380999999999, 0999999999.',
    }),
  email: z.optional(z.string().email({ message: 'Невірний email!' }).trim()),
  carBrand: z.optional(z.string().trim()),
  carModel: z.optional(z.string().trim()),
  carYear: z.optional(
    z
      .string()
      .refine((value) => Number.parseInt(value) > 1900 || value == '', {
        message: 'Рік повинен бути більше 1900',
      })
      .refine((value) => Number.parseInt(value) <= currentYear || value == '', {
        message: 'Невірний рік!',
      })
  ),
  vinCode: z.optional(z.string().trim()),
  message: z.optional(
    z
      .string()
      .max(2000, { message: 'Повідомлення не може бути більше 2000 символів' })
  ),
  services: z.optional(z.array(z.string().trim())),
})

export type FormValues = z.infer<typeof formSchema>
