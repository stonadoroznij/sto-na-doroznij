'use client'
import { FormRequest } from '@/app/actions'
import { FormValues, formSchema } from '@/schemas/zod-schemas'
import { Button, PhoneInput, TextInput } from '@/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Forms, ButtonText } from '@/i18n/uk'
import GoodResponseIcon from '../../../public/good_response.svg'
import BadResponseIcon from '../../../public/bad_response.svg'
import Image from 'next/image'

const QuickForm = ({ close }: { close?: () => void }) => {
  const [responseData, setResponseData] = useState<{
    message: string
    sucsses: boolean
  }>({ message: '', sucsses: true })

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
    if (response.message && response.sucsses) {
      setResponseData(response)
    }
    setTimeout(() => {
      setResponseData({ message: '', sucsses: true })
      if (close) {
        close()
      }
    }, 3000)
    reset()
  }

  return (
    <>
      {responseData.message ? (
        responseData.sucsses ? (
          <div className="flex flex-col gap-4 items-center">
            <Image src={GoodResponseIcon} alt="good response" />
            <div className="w-full text-center text-lg text-green-400">
              {responseData.message}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <Image src={BadResponseIcon} alt="bad response" />
            <div className="w-full text-center text-lg text-red-400">
              {responseData.message}
            </div>
          </div>
        )
      ) : (
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
          <div className="flex justify-center">
            <Button>{ButtonText.send}</Button>
          </div>
        </form>
      )}
    </>
  )
}

export default QuickForm
