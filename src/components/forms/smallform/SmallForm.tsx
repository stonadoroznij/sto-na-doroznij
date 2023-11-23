'use client'
import { Button, TextInput } from '@/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

const smallFromSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Ім'я обов'язкове поле!" })
        .min(2, "Ім'я повинно мати більше 1 символу")
        .trim(),
    phone: z
        .string({ required_error: "Телефон обо'язковий!" })
        .min(1, { message: "Телефон обов'язкове поле!" })
        .min(10, { message: 'Невірний телефон!' }),
})

type TSmallFormSchema = z.infer<typeof smallFromSchema>

const SmallForm = () => {
    const [showSuccessfulMessage, setShowSuccessfulMessage] =
        useState<boolean>(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<TSmallFormSchema>({
        resolver: zodResolver(smallFromSchema),
    })

    const onSubmit: SubmitHandler<TSmallFormSchema> = async (data) => {
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
            <TextInput<TSmallFormSchema>
                placeholder="Iм'я"
                label="name"
                register={register}
                error={errors.name?.message}
            />
            <TextInput<TSmallFormSchema>
                placeholder="Телефон"
                label="phone"
                register={register}
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
