import React from 'react'
import TikTokIcon from '../../../public/socialMediaIcons/TikTok_32.svg'
import InstagramIcon from '../../../public/socialMediaIcons/Instagram_32.svg'
import FacebookIcon from '../../../public/socialMediaIcons/Facebook_32.svg'
import TelegramIcon from '../../../public/socialMediaIcons/Telegram_32.svg'
import Image from 'next/image'
import { SocialMediaLinks } from '../../i18n/uk'

const SocialMediaBig = () => {
  return (
    <div className="flex gap-4 justify-start items-center flex-wrap">
      <a
        href={SocialMediaLinks.tiktok}
        target="_blank"
        className="hover:opacity-80"
      >
        <Image src={TikTokIcon} alt="icon tiktok" height={28} width={28} />
      </a>
      <a
        href={SocialMediaLinks.instagram}
        target="_blank"
        className="hover:opacity-80"
      >
        <Image
          src={InstagramIcon}
          alt="icon instagram"
          height={28}
          width={28}
        />
      </a>
      <a
        href={SocialMediaLinks.facebook}
        target="_blank"
        className="hover:opacity-80"
      >
        <Image src={FacebookIcon} alt="icon facebook" height={28} width={28} />
      </a>
      <a
        href={SocialMediaLinks.telegram}
        target="_blank"
        className="hover:opacity-80"
      >
        <Image src={TelegramIcon} alt="icon telegram" height={28} width={28} />
      </a>
    </div>
  )
}

export default SocialMediaBig