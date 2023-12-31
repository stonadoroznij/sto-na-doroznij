'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { QuickForm } from '@/components'

import CloseIcon from '../../../public/icons/close.svg'
import PhoneIcon from '../../../public/icons/phone.svg'

const PopUpFormButtonFixed = () => {
  const [opened, setOpened] = useState(false)
  const pathName = usePathname()

  const toggleOpened = () => {
    setOpened((prev) => !prev)
  }

  useEffect(() => {
    setOpened(false)
  }, [pathName])

  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col-reverse items-end gap-4 z-20">
        <button
          onClick={toggleOpened}
          className="w-fit p-5 bg-accent-yellow border border-coal-800 rounded-full transition-transform duration-300 hover:shadow-accent-30 hover:scale-110 md:bottom-8 md:right-8"
        >
          <Image src={PhoneIcon} alt="phone icon" />
        </button>
        {opened && (
          <div className="relative bg-coal-800 p-8 pr-12 pl-12 w-[calc(100vw-64px)] rounded-lg border border-coal-600 shadow-dark xs:mr-12 xs:w-fit">
            <div className="flex flex-col gap-8">
              <div className="text-2xl font-semibold text-white text-center">
                Замовити зворотній зв’язок
              </div>
              <QuickForm close={toggleOpened} />
            </div>
            <div
              onClick={toggleOpened}
              className="absolute top-2 right-2 w-8 h-8 flex justify-center items-center cursor-pointer"
            >
              <Image src={CloseIcon} alt="close pop-up button" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default PopUpFormButtonFixed
