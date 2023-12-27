'use client'

import { InputMask } from '@react-input/mask'
import { useState } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'

type PropsType<T extends FieldValues> = {
  label: Path<T>
  register: UseFormRegister<T>
  error?: string
  placeholder: string
}

const PhoneInput = <T extends FieldValues>({
  label,
  register,
  error,
  placeholder,
}: PropsType<T>) => {
  const [value, setValue] = useState('')

  return (
    <div className="relative">
      <InputMask
        mask="+38 (___) ___-__-__"
        replacement={{ _: /\d/ }}
        placeholder={`${placeholder}`}
        className="w-full bg-transparent pb-2 outline-none border-b border-white rounded-none focus:border-accent-yellow placeholder:text-coal-300"
        {...register(label)}
      />
      {error && (
        <div className="w-full text-red-400 text-xs absolute top-9 left-0">{`${error}`}</div>
      )}
    </div>
  )
}

export default PhoneInput
