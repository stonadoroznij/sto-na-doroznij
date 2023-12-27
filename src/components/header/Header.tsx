'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { SocialMedia, SocialMediaBig } from '@/components'
import { Urls } from '@/consts'
import { Header as HeaderText } from '@/i18n/uk'
import { Logo } from '@/ui'

import LocationIcon from '../../../public/icons/location.svg'
import MenuItem from './MenuItem'

const Header = () => {
  return (
    <header className="max-w-352 m-auto p-6 pt-6 lg:pt-12">
      <div className="flex justify-between items-center gap-6 text-white font-bold">
        <div className="w-28 h-28">
          <Logo />
        </div>
        <div className="hidden lg:flex lg:gap-6">
          <MenuItem href={Urls.OurServices}>{HeaderText.services}</MenuItem>
          <MenuItem href={Urls.AboutUs}>{HeaderText.aboutus}</MenuItem>
          <MenuItem href={Urls.Price}>{HeaderText.price}</MenuItem>
          <MenuItem href={Urls.Contacts}>{HeaderText.contacts}</MenuItem>
        </div>
        <div className="hidden lg:flex lg:gap-4 lg:justify-start lg:items-center">
          <SocialMedia />
          <div className="flex flex-col justify-start items-center xl:flex-row xl:gap-4">
            <a href={`tel:${HeaderText.phone.replaceAll(' ', '-')}`}>
              <div className="min-w-[160px]">{HeaderText.phone}</div>
            </a>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center">{HeaderText.workingTime.first}</div>
              <div className="text-center">{HeaderText.workingTime.second}</div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={LocationIcon} alt="Location icon" />
            <Link href={`${Urls.Contacts}#map`}>
              <div className="w-[152px]">{HeaderText.address}</div>
            </Link>
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
            <MenuItem href="/">{HeaderText.main}</MenuItem>
          </div>
          <div onClick={toggleOpen}>
            <MenuItem href={Urls.OurServices}>{HeaderText.services}</MenuItem>
          </div>
          <div onClick={toggleOpen}>
            <MenuItem href={Urls.AboutUs}>{HeaderText.aboutus}</MenuItem>
          </div>
          <div onClick={toggleOpen}>
            <MenuItem href={Urls.Price}>{HeaderText.price}</MenuItem>
          </div>
          <div onClick={toggleOpen}>
            <MenuItem href={Urls.Contacts}>{HeaderText.contacts}</MenuItem>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 text-xl">
          <div className="flex flex-col justify-start items-center xl:flex-row xl:gap-4">
            <a href={`tel:${HeaderText.phone.replaceAll(' ', '-')}`}>
              <div className="min-w-[160px]">{`+38 (096) 973 37 54`}</div>
            </a>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center">{HeaderText.workingTime.first}</div>
              <div className="text-center">{HeaderText.workingTime.second}</div>
            </div>
          </div>
          <div
            onClick={toggleOpen}
            className="flex justify-start items-center gap-2"
          >
            <Link href={`${Urls.Contacts}#map`}>
              <div className="w-[152px] text-center">{HeaderText.address}</div>
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

export default Header
