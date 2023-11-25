'use client'
import { QuickFormRequest } from '@/app/actions'
import { QuickFormValues, quickFormSchema } from '@/schemas/zod-schemas'
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
  } = useForm<QuickFormValues>({
    resolver: zodResolver(quickFormSchema),
  })

  const onSubmit: SubmitHandler<QuickFormValues> = async (data) => {
    const response = await QuickFormRequest(data)
    if (response.message) {
      setMessage(response.message)
    }
    setTimeout(() => setMessage(''), 3000)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 w-full pl-12 pr-12 lg:pl-0 lg:pr-0 lg:max-w-lg"
    >
      <div className="text-2xl font-semibold">Зв’язатися з нами</div>
      <TextInput<QuickFormValues>
        placeholder="Iм'я"
        label="name"
        register={register}
        error={errors.name?.message}
      />
      <TextInput<QuickFormValues>
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
