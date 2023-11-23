'use client'
import { Button, TextInput } from '@/ui'
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormValues {
    name: string
    phone: number
}

const SmallForm = () => {
    const [showSuccessfulMessage, setShowSuccessfulMessage] =
        useState<boolean>(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<IFormValues>()

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        })
        setShowSuccessfulMessage(true)
        setTimeout(() => setShowSuccessfulMessage(false), 3000)
        console.log(response)
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 w-full pl-12 pr-12 lg:pl-0 lg:pr-0 lg:max-w-lg"
        >
            <div className="text-2xl font-semibold">Зв’язатися з нами</div>
            <TextInput<IFormValues>
                placeholder="Iм'я"
                label="name"
                register={register}
                options={{
                    required: "Ім'я обо'язкове!",
                    minLength: {
                        value: 3,
                        message: "Ім'я не може бути менше 3 символів",
                    },
                }}
                error={errors.name?.message}
            />
            <TextInput<IFormValues>
                placeholder="Телефон"
                label="phone"
                register={register}
                options={{
                    required: "Телефон обо'язковий!",
                }}
                error={errors.phone?.message}
            />
            <div className="relative flex justify-center">
                <Button>Надіслати</Button>
                {isSubmitSuccessful && showSuccessfulMessage && (
                    <div className="absolute w-full text-center left-0 -bottom-5 text-xs text-green-400">
                        Ваш запит успішно надіслано!
                    </div>
                )}
            </div>
        </form>
    )
}

export default SmallForm
