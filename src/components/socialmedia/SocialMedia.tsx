import React from 'react'
import TikTokIcon from '../../../public/socialMediaIcons/TikTok.svg'
import InstagramIcon from '../../../public/socialMediaIcons/Instagram.svg'
import FacebookIcon from '../../../public/socialMediaIcons/Facebook.svg'
import TelegramIcon from '../../../public/socialMediaIcons/Telegram.svg'
import Image from 'next/image'

const SocialMedia = () => {
  return (
    <div className="flex gap-2 justify-start items-center flex-wrap">
      <a href="https://www.tiktok.com/" target="_blank">
        <Image src={TikTokIcon} alt="icon tiktok" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <Image src={InstagramIcon} alt="icon instagram" />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <Image src={FacebookIcon} alt="icon facebook" />
      </a>
      <a href="https://web.telegram.org/" target="_blank">
        <Image src={TelegramIcon} alt="icon telegram" />
      </a>
    </div>
  )
}

export default SocialMedia
