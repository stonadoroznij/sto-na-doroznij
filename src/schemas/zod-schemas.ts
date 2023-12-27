import { z } from 'zod'

import { FormError } from '@/i18n/uk'

const preprocessPhoneNumber = (value: string) => value.replace(/[()-\s]/g, '')

const currentYear = new Date().getFullYear()

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: FormError.name.required })
    .min(2, { message: FormError.name.length })
    .trim(),
  phone: z
    .string()
    .min(1, { message: FormError.phone.required })
    .min(10, { message: FormError.phone.badPhone })
    .trim()
    .refine((value) => /^(?:\+38)?0\d{9}$/.test(preprocessPhoneNumber(value)), {
      message: FormError.phone.badFormat,
    }),
  email: z.optional(
    z.string().email({ message: FormError.email.badEmail }).trim()
  ),
  carBrand: z.optional(z.string().trim()),
  carModel: z.optional(z.string().trim()),
  carYear: z.optional(
    z
      .string()
      .refine((value) => Number.parseInt(value) > 1900 || value == '', {
        message: FormError.carYear.oldYear,
      })
      .refine((value) => Number.parseInt(value) <= currentYear || value == '', {
        message: FormError.carYear.badYear,
      })
  ),
  vinCode: z.optional(z.string().trim()),
  message: z.optional(
    z.string().max(2000, { message: FormError.message.tooLong })
  ),
  services: z.optional(z.array(z.number())),
})

export type FormValues = z.infer<typeof formSchema>
