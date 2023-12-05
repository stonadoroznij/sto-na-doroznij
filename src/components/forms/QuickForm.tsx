'use client'
import { FormRequest } from '@/app/actions'
import { FormValues, formSchema } from '@/schemas/zod-schemas'
import { Button, TextInput } from '@/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <TextInput<FormValues>
        placeholder="Iм'я"
        label="name"
        register={register}
        error={errors.name?.message}
      />
      <TextInput<FormValues>
        placeholder="Телефон"
        label="phone"
        register={register}
        error={errors.phone?.message}
      />
      <div className="relative flex justify-center">
        <Button>Надіслати</Button>
        {message && (
          <div className="absolute w-full text-center left-0 -bottom-5 text-xs text-accent-yellow">
            {message}
          </div>
        )}
      </div>
    </form>
  )
}

export default QuickForm
