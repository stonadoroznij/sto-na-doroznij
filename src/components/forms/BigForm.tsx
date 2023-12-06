'use client'
import { FormValues, formSchema } from '../../schemas/zod-schemas'
import { Button, TextArea, TextInput } from '../../ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormRequest } from '../../app/actions'
import { MultiSelect, Select } from '..'

const options = [
  'Діагностика',
  'ГРМ',
  'Шиномонтаж та балансування',
  'Ходова, рульова та гальмівна частини',
  'Заміна масла',
  'Розвал-сходження',
  'Діагностика2',
  'ГРМ2',
  'Шиномонтаж та балансування2',
  'Ходова, рульова та гальмівна частини2',
  'Заміна масла2',
  'Розвал-сходження2',
]

const BigForm = () => {
  const [message, setMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      carBrand: '',
      carModel: '',
      carYear: '',
      vinCode: '',
      services: [],
      message: '',
    },
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await FormRequest(data)
    if (response.message) {
      setMessage(response.message)
    }
    setTimeout(() => setMessage(''), 3000)
    reset()
  }

  const years: string[] = []

  for (let i = new Date().getFullYear(); i >= 1900; i--) {
    years.push(String(i))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="font-bold">Що вас цікавить?</div>
        <MultiSelect
          name="services"
          placeholder="Оберіть послугу"
          options={options}
          control={control}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold">Контактні дані</div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1">
            <TextInput<FormValues>
              placeholder="Iм'я"
              label="name"
              register={register}
              error={errors.name?.message}
            />
          </div>
          <div className="flex-1">
            <TextInput<FormValues>
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
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex-1">
            <TextInput<FormValues>
              placeholder="Марка"
              label="carBrand"
              register={register}
              error={errors.carBrand?.message}
            />
          </div>
          <div className="flex-1">
            <TextInput<FormValues>
              placeholder="Модель"
              label="carModel"
              register={register}
              error={errors.carModel?.message}
            />
          </div>
          <div className="flex-1">
            <Select
              name="carYear"
              placeholder="Рік"
              options={years}
              control={control}
            />
          </div>
        </div>
        <div className="mt-2">
          <TextInput<FormValues>
            placeholder="VIN-Code"
            label="vinCode"
            register={register}
            error={errors.vinCode?.message}
          />
        </div>
        <div className="mt-4">
          <TextArea<FormValues>
            name="message"
            control={control}
            placeholder="Напишіть повідомення"
            error={errors.message?.message}
          />
        </div>
      </div>
      <div className="relative flex justify-center">
        <Button>Надіслати</Button>
        {message && (
          <div className="absolute w-full text-center left-0 -bottom-5 text-sm text-accent-yellow">
            {message}
          </div>
        )}
      </div>
    </form>
  )
}

export default BigForm
