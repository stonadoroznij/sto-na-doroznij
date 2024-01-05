'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormRequest } from '@/app/actions'
import { FormValues, formSchema } from '@/schemas/zod-schemas'
import { Button, PhoneInput, TextInput } from '@/ui'

import FailedResponseIcon from '../../../public/icons/failed-response.svg'
import SuccessResponseIcon from '../../../public/icons/success-response.svg'

const QuickForm = ({ close }: { close?: () => void }) => {
  const [responseData, setResponseData] = useState<{
    message: string
    success: boolean
  }>({ message: '', success: true })

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
    if (response.message && response.success) {
      setResponseData(response)
    }
    setTimeout(() => {
      setResponseData({ message: '', success: true })
      if (close) {
        close()
      }
    }, 3000)
    reset()
  }

  return (
    <>
      {responseData.message ? (
        responseData.success ? (
          <div className="flex flex-col gap-4 items-center">
            <Image src={SuccessResponseIcon} alt="good response" />
            <div className="w-full text-center text-lg text-green-400">
              {responseData.message}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <Image src={FailedResponseIcon} alt="bad response" />
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
            placeholder="Iм'я"
            label="name"
            register={register}
            error={errors.name?.message}
          />
          <PhoneInput<FormValues>
            placeholder="Телефон"
            label="phone"
            register={register}
            error={errors.phone?.message}
          />
          <div className="flex justify-center">
            <Button>Надіслати</Button>
          </div>
        </form>
      )}
    </>
  )
}

export default QuickForm
