'use client'
import { FormValues, formSchema } from '../../schemas/zod-schemas'
import { Button, TextArea, TextInput } from '../../ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormRequest } from '../../app/actions'
import { MultiSelect, Select } from '..'
import { Forms, ButtonText } from '@/i18n/uk'
import { usePathname, useSearchParams } from 'next/navigation'

interface Service {
  id: number
  name: string
}

interface PropsType {
  services: Service[]
}

const BigForm = ({ services }: PropsType) => {
  const [message, setMessage] = useState<string>('')

  const searchParams = useSearchParams()
  const defaultService = searchParams.get('service')

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

  const getYears = () => {
    const years: string[] = []

    for (let i = new Date().getFullYear(); i >= 1900; i--) {
      years.push(String(i))
    }
    return years
  }

  const years = useMemo(() => getYears(), [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="font-bold">{Forms.bigForm.sectionFirst}</div>
        <MultiSelect
          name="services"
          placeholder={Forms.fields.services}
          options={services}
          defaultOption={defaultService}
          control={control}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold">{Forms.bigForm.sectionSecond}</div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1">
            <TextInput<FormValues>
              placeholder={Forms.fields.name}
              label="name"
              register={register}
              error={errors.name?.message}
            />
          </div>
          <div className="flex-1">
            <TextInput<FormValues>
              placeholder={Forms.fields.phone}
              label="phone"
              register={register}
              error={errors.phone?.message}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-bold">{Forms.bigForm.sectionThird}</div>
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex-1">
            <TextInput<FormValues>
              placeholder={Forms.fields.carBrand}
              label="carBrand"
              register={register}
              error={errors.carBrand?.message}
            />
          </div>
          <div className="flex-1">
            <TextInput<FormValues>
              placeholder={Forms.fields.carModel}
              label="carModel"
              register={register}
              error={errors.carModel?.message}
            />
          </div>
          <div className="flex-1">
            <Select
              name="carYear"
              placeholder={Forms.fields.carYear}
              options={years}
              control={control}
            />
          </div>
        </div>
        <div className="mt-2">
          <TextInput<FormValues>
            placeholder={Forms.fields.vinCode}
            label="vinCode"
            register={register}
            error={errors.vinCode?.message}
          />
        </div>
        <div className="mt-4">
          <TextArea<FormValues>
            name="message"
            control={control}
            placeholder={Forms.fields.message}
            error={errors.message?.message}
          />
        </div>
      </div>
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

export default BigForm
