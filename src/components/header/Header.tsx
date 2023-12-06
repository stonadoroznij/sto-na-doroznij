'use client'
import LocationIcon from '../../../public/LocationIcon.svg'
import Image from 'next/image'
import { SocialMedia } from '..'
import MenuItem from './MenuItem'
import { Logo } from '../../ui'
import { useState } from 'react'
import { pre } from 'telegraf/format'

const Header = () => {
  return (
    <header className="max-w-352 m-auto p-6 pt-6 lg:pt-12 relative z-40">
      <div className="flex justify-between items-center gap-6 text-white font-bold">
        <div className="w-28 h-28">
          <Logo />
        </div>
        <div className="hidden lg:flex lg:gap-6">
          <MenuItem href="/ourservices">Послуги</MenuItem>
          <MenuItem href="/aboutus">Про нас</MenuItem>
          <MenuItem href="/contacts">Контакти</MenuItem>
        </div>
        <div className="hidden lg:flex lg:gap-4 lg:justify-start lg:items-center">
          <SocialMedia />
          <div className="flex flex-col justify-start items-center xl:flex-row xl:gap-4">
            <div className="min-w-[160px]">{`+38 (096) 973 37 54`}</div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center">Пн-Пт 9:00-18:00</div>
              <div className="text-center">Сб 9:00-14:00 </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={LocationIcon} alt="Location icon" />
            <div className="w-[152px]">вул.Дорожня, 33 м. Макарів</div>
          </div>
        </div>
        <div className="lg:hidden">
          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

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
        <div className={`absolute top-0 left-0 h-screen w-screen bg-coal-800 z-30 flex flex-col justify-between p-16 transition-opacity duration-700 ease-in-out ${style}`}>
          <div className="flex flex-col items-center gap-4">
            <div onClick={toggleOpen}>
              <MenuItem href="/ourservices">Послуги</MenuItem>
            </div>
            <div onClick={toggleOpen}>
              <MenuItem href="/aboutus">Про нас</MenuItem>
            </div>
            <div onClick={toggleOpen}>
              <MenuItem href="/contacts">Контакти</MenuItem>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col justify-start items-center xl:flex-row xl:gap-4">
              <div className="min-w-[160px]">{`+38 (096) 973 37 54`}</div>
              <div className="flex flex-col justify-center items-center">
                <div className="text-center">Пн-Пт 9:00-18:00</div>
                <div className="text-center">Сб 9:00-14:00 </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="w-[152px] text-center">
                вул.Дорожня, 33 м. Макарів
              </div>
            </div>
            <SocialMedia />
          </div>
          <div
            onClick={toggleOpen}
            className="absolute top-8 right-8 w-8 h-6"
          >
            <div className="absolute top-1/2 w-6 h-1 bg-coal-300 rotate-45" />
            <div className="absolute top-1/2 w-6 h-1 bg-coal-300 -rotate-45" />
          </div>
        </div>
    </>
  )
}

export default Header
