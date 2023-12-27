import Link from 'next/link'
import React from 'react'

import { QuickForm, SocialMediaBig } from '@/components'
import { Urls } from '@/consts'
import { Footer as FooterText } from '@/i18n/uk'
import { Logo } from '@/ui'

const Footer = () => {
  return (
    <footer>
      <div className="bg-coal-700 w-screen mt-16">
        <div className="max-w-352 m-auto p-6 pt-12 pb-20">
          <div className="flex flex-col justify-start items-center gap-12 text-white lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-8 w-full pl-12 pr-12 lg:pl-0 lg:pr-0 lg:max-w-lg">
              <div className="text-2xl font-semibold text-white">
                Зв’язатися з нами
              </div>
              <QuickForm />
            </div>
            <div className="flex flex-col justify-start items-center gap-12 md:flex-row md:justify-between">
              <div className="flex-1 flex flex-col gap-8 max-w-xs">
                <div className="flex flex-col gap-3">
                  <div className="text-2xl font-semibold">
                    {FooterText.contacts}
                  </div>
                  <div>
                    <Link href={`${Urls.Contacts}#map`}>
                      {FooterText.address}
                    </Link>
                    <br />
                    <a href={`tel:${FooterText.phone.replaceAll(' ', '-')}`}>
                      {FooterText.phone}
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-2xl font-semibold">
                    {FooterText.workingTime.title}
                  </div>
                  <div className="">
                    {FooterText.workingTime.first}
                    <br />
                    {FooterText.workingTime.second}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-2xl font-semibold">
                    {FooterText.socialMedia}
                  </div>
                  <SocialMediaBig />
                </div>
              </div>
              <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
