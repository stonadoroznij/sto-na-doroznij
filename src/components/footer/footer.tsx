import React from 'react'
import Logo from '../../../public/Logo_CTO.svg'
import Image from 'next/image'
import TikTokIcon from '../../../public/socialMediaIcons/TikTok.svg'
import InstagramIcon from '../../../public/socialMediaIcons/Instagram.svg'
import FacebookIcon from '../../../public/socialMediaIcons/Facebook.svg'
import TelegramIcon from '../../../public/socialMediaIcons/Telegram.svg'

const Footer = () => {
    return (
        <footer>
            <div className="bg-coal-700 w-screen mt-6">
                <div className="max-w-352 m-auto p-6 pt-12 pb-20">
                    <div className="flex flex-col justify-start items-center gap-12 text-white lg:flex-row lg:justify-between">
                        <div className="flex-1 flex flex-col gap-8 max-w-lg">
                            <div className="font-sans text-2xl font-semibold">
                                Зв’язатися з нами
                            </div>
                            <input
                                type="text"
                                placeholder="Ім’я*"
                                className="font-sans text-lg bg-coal-800 bg-opacity-0 pb-2 outline-none border-b border-white"
                            />
                            <input
                                type="text"
                                placeholder="Номер телефону*"
                                className="font-sans text-lg bg-coal-800 bg-opacity-0 pb-2 outline-none border-b border-white"
                            />
                            <button className="bg-accent-yellow rounded-full p-2 pl-12 pr-12 w-fit text-coal-800 font-sans font-medium text-lg">
                                Надіслати
                            </button>
                        </div>
                        <div className="flex-1 flex flex-col gap-8 max-w-xs">
                            <div className="flex flex-col gap-3">
                                <div className="font-sans text-2xl font-semibold">
                                    Контакти
                                </div>
                                <div className="font-sans text-lg">
                                    Макарів, вул. Дорожня, 33
                                    <br /> +38 (096) 973 37 54
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="font-sans text-2xl font-semibold">
                                    Графік роботи
                                </div>
                                <div className="font-sans text-lg">
                                    Пн-Пт 9.00-18.00
                                    <br />
                                    Сб 9.00-14.00
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="font-sans text-2xl font-semibold">
                                    Соціальні мережі
                                </div>
                                <div className="flex gap-2 justify-start items-center">
                                    <Image src={TikTokIcon} alt="icon tiktok" />
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
        </footer>
    )
}

export default Footer
