import React from 'react'
import {
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
} from 'react-hook-form'

type InputProps<T extends FieldValues> = {
    label: Path<T>
    register: UseFormRegister<T>
    options?: RegisterOptions<T, Path<T>>
    error?: string
    placeholder: string
}

const TextInput = function <T extends FieldValues>({
    label,
    register,
    options,
    error,
    placeholder,
}: InputProps<T>) {
    return (
        <div className="relative flex">
            <input
                placeholder={`${options?.required ? '*' : ''}${placeholder}`}
                className="flex-1 bg-coal-800 bg-opacity-0 pb-2 outline-none border-b border-white focus:border-accent-yellow"
                {...register(label, options)}
            />
            {error && (
                <div className="flex-1 text-red-400 text-xs absolute -bottom-5 left-0">{`${error}`}</div>
            )}
        </div>
    )
}

export default TextInput
