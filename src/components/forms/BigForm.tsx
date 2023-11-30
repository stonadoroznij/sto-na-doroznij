'use client'
import { QuickFormRequest } from '@/app/actions'
import { BigFormValues, bigFormSchema } from '@/schemas/zod-schemas'
import { Button, TextInput } from '@/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const BigForm = () => {
  const [message, setMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BigFormValues>({
    resolver: zodResolver(bigFormSchema),
  })

  const onSubmit: SubmitHandler<BigFormValues> = async (data) => {
    const response = await QuickFormRequest(data)
    if (response.message) {
      setMessage(response.message)
    }
    setTimeout(() => setMessage(''), 3000)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="font-bold">Контактні дані</div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1">
            <TextInput<BigFormValues>
              placeholder="Iм'я"
              label="name"
              register={register}
              error={errors.name?.message}
            />
          </div>
          <div className="flex-1">
            <TextInput<BigFormValues>
              placeholder="Телефон"
              label="phone"
              register={register}
              error={errors.phone?.message}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold">Автомобіль</div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1">
            <TextInput<BigFormValues>
              placeholder="Iм'я"
              label="name"
              register={register}
              error={errors.name?.message}
            />
          </div>
          <div className="flex-1">
            <TextInput<BigFormValues>
              placeholder="Телефон"
              label="phone"
              register={register}
              error={errors.phone?.message}
            />
          </div>
          <div className="flex-1">
            <TextInput<BigFormValues>
              placeholder="Телефон"
              label="phone"
              register={register}
              error={errors.phone?.message}
            />
          </div>
        </div>
      </div>

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

export default BigForm
