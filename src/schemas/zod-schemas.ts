import { z } from 'zod'

const preprocessPhoneNumber = (value: string) => value.replace(/[()-\s]/g, '')

export const quickFormSchema = z.object({
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
})

export type QuickFormValues = z.infer<typeof quickFormSchema>

const currentYear = new Date().getFullYear()

export const bigFormSchema = z.object({
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
  carYear: z.optional(z
    .number()
    .gt(1900, { message: 'Рік повинен бути більше 1900' })
    .lte(currentYear, { message: 'Невірний рік!' })),
  vinCode: z.optional(z
    .string()
    .length(17, { message: 'VIN-Code повинен містити 17 символів' })
    .trim()),
  message: z.optional(z
    .string()
    .max(300, { message: 'Повідомлення не може бути більше 300 символів' })
    .trim()),
  services: z.optional(z.array(z.string().trim())),
})

export type BigFormValues = z.infer<typeof bigFormSchema>
