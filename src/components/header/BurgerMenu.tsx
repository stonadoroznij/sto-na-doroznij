'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { SocialMediaBig } from '@/components'
import { Contacts, Urls } from '@/consts'

import MenuItem from './MenuItem'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    if (isOpen) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  const style = isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'

  return (
    <>
      <div
        onClick={toggleOpen}
        className="flex flex-col justify-between items-center w-8 h-6"
      >
        <div className="w-8 h-1 bg-white" />
        <div className="w-8 h-1 bg-white" />
        <div className="w-8 h-1 bg-white" />
      </div>
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-coal-800 z-30 flex flex-col justify-between p-16 transition-opacity duration-300 ease-in-out ${style}`}
      >
        <div className="flex flex-col items-center gap-8">
          <div onClick={toggleOpen}>
            <MenuItem href="/">Головна</MenuItem>
          </div>
          <div onClick={toggleOpen}>
            <MenuItem href={Urls.OurServices}>Послуги</MenuItem>
          </div>
          <div onClick={toggleOpen}>
            <MenuItem href={Urls.AboutUs}>Про нас</MenuItem>
          </div>
          <div onClick={toggleOpen}>
            <MenuItem href={Urls.Price}>Прайс</MenuItem>
          </div>
          <div onClick={toggleOpen}>
            <MenuItem href={Urls.Contacts}>Контакти</MenuItem>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 text-xl">
          <div className="flex flex-col justify-start items-center xl:flex-row xl:gap-4">
            <a href={`tel:${Contacts.Phone.replaceAll(' ', '-')}`}>
              <div className="min-w-[160px]">{Contacts.Phone}</div>
            </a>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center">{Contacts.WorkingHours[0]}</div>
              <div className="text-center">{Contacts.WorkingHours[1]}</div>
            </div>
          </div>
          <div
            onClick={toggleOpen}
            className="flex justify-start items-center gap-2"
          >
            <Link href={`${Urls.Contacts}#map`}>
              <div className="w-[152px] text-center">{Contacts.Address}</div>
            </Link>
          </div>
          <SocialMediaBig />
        </div>
        <div onClick={toggleOpen} className="absolute top-8 right-8 w-8 h-6">
          <div className="absolute top-1/2 w-6 h-1 bg-coal-300 rotate-45" />
          <div className="absolute top-1/2 w-6 h-1 bg-coal-300 -rotate-45" />
        </div>
      </div>
    </>
  )
}

export default BurgerMenu
