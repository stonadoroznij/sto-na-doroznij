import Image from 'next/image'
import React from 'react'

import { SocialMediaLinks } from '@/i18n/uk'

import FacebookIcon from '../../../public/social-media-icons/facebook.svg'
import InstagramIcon from '../../../public/social-media-icons/instagram.svg'
import TelegramIcon from '../../../public/social-media-icons/telegram.svg'
import TikTokIcon from '../../../public/social-media-icons/tik-tok.svg'

const SocialMedia = () => {
  return (
    <div className="flex gap-2 justify-start items-center flex-wrap">
      <a
        href={SocialMediaLinks.tiktok}
        target="_blank"
        className="hover:opacity-80"
      >
        <Image src={TikTokIcon} alt="icon tiktok" />
      </a>
      <a
        href={SocialMediaLinks.instagram}
        target="_blank"
        className="hover:opacity-80"
      >
        <Image src={InstagramIcon} alt="icon instagram" />
      </a>
      <a
        href={SocialMediaLinks.facebook}
        target="_blank"
        className="hover:opacity-80"
      >
        <Image src={FacebookIcon} alt="icon facebook" />
      </a>
      <a
        href={SocialMediaLinks.telegram}
        target="_blank"
        className="hover:opacity-80"
      >
        <Image src={TelegramIcon} alt="icon telegram" />
      </a>
    </div>
  )
}

export default SocialMedia
