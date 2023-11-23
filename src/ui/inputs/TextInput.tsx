import React from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

type InputProps<T extends object> = {
    label: Path<T>
    register: UseFormRegister<T>
    required: boolean | string
    placeholder: string
}

const TextInput = function<T extends object>({ label, register, required, placeholder }: InputProps<T>) {
    return (
        <input
            placeholder={placeholder}
            className=" bg-coal-800 bg-opacity-0 pb-2 outline-none border-b border-white focus:border-accent-yellow"
            {...register(label, { required: required })}
        />
    )
}

export default TextInput
