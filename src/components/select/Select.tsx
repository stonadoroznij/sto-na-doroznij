'use client'
import { useState } from 'react'
import { FormValues } from '../../schemas/zod-schemas'
import { Control, useController } from 'react-hook-form'
import Image from 'next/image'
import ArrowIcon from '../../../public/arrow_icon.svg'
import SelectOptions from './SelectOptions'

interface PropsType {
  name: keyof FormValues
  placeholder: string
  options: string[]
  control: Control<FormValues>
}

const Select = ({ name, placeholder, options, control }: PropsType) => {
  const { field } = useController({ name, control })

  const value = field.value as string
  const changeHandler = field.onChange

  const [opened, setOpened] = useState<boolean>(false)

  const toggleOpened = () => {
    setOpened((prev) => !prev)
  }

  return (
    <div
      className="w-full relative group/input"
      tabIndex={0}
      onBlur={() => setOpened(false)}
    >
      <div onClick={toggleOpened}>
        <div className="flex items-start">
          <div className="h-fit w-full flex items-center gap-x-2 flex-wrap">
            {value !== '' ? (
              <div>{value}</div>
            ) : (
              <div className="text-coal-300">{placeholder}</div>
            )}
          </div>
          {opened ? (
            <div className="w-fit h-fit rotate-180">
              <Image src={ArrowIcon} alt="arrow icon" />
            </div>
          ) : (
            <div className="w-fit h-fit">
              <Image src={ArrowIcon} alt="arrow icon" />
            </div>
          )}
        </div>
        <div className="w-full border-b border-white mt-1 group-focus/input:border-accent-yellow" />
      </div>
      {opened && (
        <div className="absolute -bottom-96 w-full z-20">
          <SelectOptions
            options={options}
            onChange={changeHandler}
            toggleOpened={toggleOpened}
          />
        </div>
      )}
    </div>
  )
}

export default Select
