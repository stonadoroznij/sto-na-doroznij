'use client'

import Image from 'next/image'
import Link from 'next/link'

import { SocialMedia } from '@/components'
import { Contacts, Urls } from '@/consts'
import { Logo } from '@/ui'

import LocationIcon from '../../../public/icons/location.svg'
import BurgerMenu from './BurgerMenu'
import MenuItem from './MenuItem'

const Header = () => {
  return (
    <header className="max-w-352 m-auto p-6 pt-6 lg:pt-12">
      <div className="flex justify-between items-center gap-6 text-white font-bold">
        <div className="w-28 h-28">
          <Logo />
        </div>
        <div className="hidden lg:flex lg:gap-6">
          <MenuItem href={Urls.OurServices}>Послуги</MenuItem>
          <MenuItem href={Urls.AboutUs}>Про нас</MenuItem>
          <MenuItem href={Urls.Price}>Прайс</MenuItem>
          <MenuItem href={Urls.Contacts}>Контакти</MenuItem>
        </div>
        <div className="hidden lg:flex lg:gap-4 lg:justify-start lg:items-center">
          <SocialMedia />
          <div className="flex flex-col justify-start items-center xl:flex-row xl:gap-4">
            <a href={`tel:${Contacts.Phone.replaceAll(' ', '-')}`}>
              <div className="min-w-[160px]">{Contacts.Phone}</div>
            </a>
            <div className="flex flex-col justify-center items-center">
              <div className="text-center">{Contacts.WorkingHours[0]}</div>
              <div className="text-center">{Contacts.WorkingHours[1]}</div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Image src={LocationIcon} alt="Location icon" />
            <Link href={`${Urls.Contacts}#map`}>
              <div className="w-[152px]">{Contacts.Address}</div>
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

export default Header
