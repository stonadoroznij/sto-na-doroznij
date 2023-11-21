'use client'
import { Button, TextInput } from '@/ui'
import React, { useState } from 'react'

const SmallForm = () => {
    const [name, setName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')

    const handleChangeName = (value: string) => {
        setName(value)
    }

    const handleChangePhoneNumber = (value: string) => {
        setPhoneNumber(value)
    }

    return (
        <div className="flex flex-col gap-8 w-full pl-12 pr-12 lg:pl-0 lg:pr-0 lg:max-w-lg">
            <div className="text-2xl font-semibold">Зв’язатися з нами</div>
            <TextInput
                placeholder="Ім'я"
                value={name}
                handleChange={handleChangeName}
            />
            <TextInput
                placeholder="Номер телефону"
                value={phoneNumber}
                handleChange={handleChangePhoneNumber}
            />
            <div className="flex">
                <Button>Надіслати</Button>
            </div>
        </div>
    )
}

export default SmallForm
