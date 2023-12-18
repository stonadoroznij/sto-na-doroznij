'use client'
import { FormRequest } from '@/app/actions'
import { FormValues, formSchema } from '@/schemas/zod-schemas'
import { Button, PhoneInput, TextInput } from '@/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Forms, ButtonText } from '@/i18n/uk'

const QuickForm = () => {
  const [message, setMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await FormRequest(data)
    if (response.message) {
      setMessage(response.message)
    }
    setTimeout(() => setMessage(''), 3000)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 text-white"
    >
      <TextInput<FormValues>
        placeholder={Forms.fields.name}
        label="name"
        register={register}
        error={errors.name?.message}
      />
      <PhoneInput<FormValues>
        placeholder={Forms.fields.phone}
        label="phone"
        register={register}
        error={errors.phone?.message}
      />
      <div className="relative flex justify-center">
        <Button>{ButtonText.send}</Button>
        {message && (
          <div className="absolute w-full text-center left-0 -bottom-5 text-sm text-accent-yellow">
            {message}
          </div>
        )}
      </div>
    </form>
  )
}

export default QuickForm
