import React from 'react'
import Logo from '../../../public/Logo_CTO.svg'
import Image from 'next/image'
import TikTokIcon from '../../../public/socialMediaIcons/TikTok.svg'
import InstagramIcon from '../../../public/socialMediaIcons/Instagram.svg'
import FacebookIcon from '../../../public/socialMediaIcons/Facebook.svg'
import TelegramIcon from '../../../public/socialMediaIcons/Telegram.svg'
import { SmallForm } from '../../components'

const Footer = () => {
    return (
        <footer>
            <div className="bg-coal-700 w-screen mt-16">
                <div className="max-w-352 m-auto p-6 pt-12 pb-20">
                    <div className="flex flex-col justify-start items-center gap-12 text-white lg:flex-row lg:justify-between">
                        <SmallForm />
                        <div className='flex flex-col justify-start items-center gap-12 md:flex-row md:justify-between'>
                            <div className="flex-1 flex flex-col gap-8 max-w-xs">
                                <div className="flex flex-col gap-3">
                                    <div className="text-2xl font-semibold">
                                        Контакти
                                    </div>
                                    <div className="">
                                        Макарів, вул. Дорожня, 33
                                        <br /> +38 (096) 973 37 54
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="text-2xl font-semibold">
                                        Графік роботи
                                    </div>
                                    <div className="">
                                        Пн-Пт 9.00-18.00
                                        <br />
                                        Сб 9.00-14.00
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="text-2xl font-semibold">
                                        Соціальні мережі
                                    </div>
                                    <div className="flex gap-2 justify-start items-center">
                                        <Image
                                            src={TikTokIcon}
                                            alt="icon tiktok"
                                        />
                                        <Image
                                            src={InstagramIcon}
                                            alt="icon instagram"
                                        />
                                        <Image
                                            src={FacebookIcon}
                                            alt="icon facebook"
                                        />
                                        <Image
                                            src={TelegramIcon}
                                            alt="icon telegram"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64">
                                <Image
                                    src={Logo}
                                    alt="Logo"
                                    width={250}
                                    height={250}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
