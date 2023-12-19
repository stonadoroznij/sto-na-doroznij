'use client'
import Image from 'next/image'
import CloseIcon from '../../../public/close_icon.svg'
import { QuickForm } from '..'
import { ButtonText, Forms } from '@/i18n/uk'
import { useState } from 'react'
import { Button } from '@/ui'
import { ButtonType } from '@/ui/buttons/Button'

const PopUpFormButton = ({ type = ButtonType.fill }: { type?: ButtonType }) => {
  const [opened, setOpened] = useState<boolean>(false)

  const toggleOpened = () => {
    setOpened((prev) => !prev)
  }

  return (
    <>
      <div onClick={toggleOpened}>
        <Button type={type}>{ButtonText.contactWithUs}</Button>
      </div>
      {opened && (
        <div className="fixed top-0 left-0 h-screen w-screen p-4 flex justify-center items-center z-30">
          <div className="relative bg-coal-800 p-8 pr-12 pl-12 rounded-lg border border-coal-600 shadow-dark z-50">
            <div className="flex flex-col gap-8">
              <div className="text-2xl font-semibold text-white text-center">
                {Forms.popUpForm.title}
              </div>
              <QuickForm />
            </div>
            <div
              onClick={toggleOpened}
              className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center cursor-pointer"
            >
              <Image src={CloseIcon} alt="close pop-up button" />
            </div>
          </div>
          <div
            onClick={toggleOpened}
            className="absolute top-0 left-0 h-screen w-screen bg-black opacity-50 z-40"
          />
        </div>
      )}
    </>
  )
}

export default PopUpFormButton
