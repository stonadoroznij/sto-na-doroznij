'use client'

import { useState } from 'react'
import { Control, FieldValues, useController } from 'react-hook-form'

import { FormValues } from '@/schemas/zod-schemas'

type PropsType<T extends FieldValues> = {
  name: keyof FormValues
  control: Control<FormValues>
  error?: string
  placeholder: string
}

const TextArea = <T extends FieldValues>({
  name,
  control,
  error,
  placeholder,
}: PropsType<T>) => {
  const { field } = useController({ name, control })

  const [value, setValue] = useState(field.value as string)

  return (
    <div className="flex gap-2 p-4 border rounded-lg border-white focus-within:border-accent-yellow">
      <div className="w-full flex flex-col gap-2">
        <textarea
          placeholder={`${placeholder}`}
          className="w-full h-32 bg-transparent outline-none placeholder:text-coal-300"
          onChange={(e) => {
            setValue(e.target.value)
            field.onChange(e.target.value)
          }}
          value={value}
        />
        <div className="flex justify-end items-center gap-4">
          {error && <div className="text-red-400 text-xs">{`${error}`}</div>}
          <div className="text-coal-300 w-fit">{value.length} / 2000</div>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setValue('')
          field.onChange('')
        }}
        className="w-6 h-6 text-coal-300 text-3xl flex justify-center items-center cursor-pointer hover:text-white"
      >
        &times;
      </div>
    </div>
  )
}

export default TextArea
