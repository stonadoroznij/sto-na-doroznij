'use client'
import { useState } from 'react'
import { FormValues } from '../../schemas/zod-schemas'
import { Control, useController } from 'react-hook-form'
import Image from 'next/image'
import ArrowIcon from '../../../public/arrow_icon.svg'
import Tab from './Tab'
import MultiSelectOptions from './MultiSelectOptions'

interface PropsType {
  name: keyof FormValues
  placeholder: string
  options: string[]
  control: Control<FormValues>
}

const MultiSelect = ({ name, placeholder, options, control }: PropsType) => {
  const { field } = useController({ name, control })

  const values = field.value as string[]
  const changeHandler = field.onChange

  const toggleService = (service: string) => {
    const serviceIndex = values.findIndex((el) => el === service)
    if (serviceIndex === -1) {
      changeHandler([...values, service])
    } else {
      const newvalues = values.filter((el) => el !== service)
      changeHandler(newvalues)
    }
  }

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
            {values.length !== 0 ? (
              values.map((service) => (
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleService(service)
                  }}
                  key={service}
                >
                  <Tab service={service} />
                </div>
              ))
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
        <div className="w-full border-b border-white mt-2 group-focus/input:border-accent-yellow" />
      </div>
      {opened && (
        <div className="absolute top-[calc(100%+16px)] w-full z-20">
          <MultiSelectOptions
            options={options}
            values={values}
            onChange={toggleService}
          />
        </div>
      )}
    </div>
  )
}

export default MultiSelect
