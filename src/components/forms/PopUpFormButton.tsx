'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { QuickForm } from '@/components'
import { Button } from '@/ui'

import CloseIcon from '../../../public/icons/close.svg'

const PopUpFormButton = ({ type = 'fill' }: { type?: 'fill' | 'outline' }) => {
  const [opened, setOpened] = useState<boolean>(false)

  const toggleOpened = () => {
    setOpened((prev) => !prev)
  }

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    if (opened) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
  }, [opened])

  return (
    <>
      <div onClick={toggleOpened}>
        <Button type={type}>Зв’язатись з нами</Button>
      </div>
      {opened && (
        <div className="fixed top-0 left-0 h-screen w-screen p-4 flex justify-center items-center z-40">
          <div className="relative bg-coal-800 p-8 pr-12 pl-12 rounded-lg border border-coal-600 shadow-dark z-50">
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
