import React from "react";
import Logo from "../../../public/Logo_CTO.svg";
import LocationIcon from "../../../public/LocationIcon.svg";
import TikTokIcon from "../../../public/socialMediaIcons/TikTok.svg";
import InstagramIcon from "../../../public/socialMediaIcons/Instagram.svg";
import FacebookIcon from "../../../public/socialMediaIcons/Facebook.svg";
import TelegramIcon from "../../../public/socialMediaIcons/Telegram.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mb-6 lg:mb-12 flex justify-between items-center gap-6 text-white font-sans">
      <Image src={Logo} alt="Logo" />
      <div className="hidden lg:flex lg:gap-6">
        <a>Послуги</a>
        <a>Про нас</a>
        <a>Контакти</a>
      </div>
      <div className="hidden lg:flex lg:gap-4 lg:justify-start lg:items-center">
        <div className="flex gap-2 justify-start items-center flex-wrap">
          <Image src={TikTokIcon} alt="icon tiktok" />
          <Image src={InstagramIcon} alt="icon instagram" />
          <Image src={FacebookIcon} alt="icon facebook" />
          <Image src={TelegramIcon} alt="icon telegram" />
        </div>
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
      <div className="flex flex-col justify-between items-center w-8 h-6 lg:hidden">
        <div className="w-8 h-[3px] bg-white"/>
        <div className="w-8 h-[3px] bg-white"/>
        <div className="w-8 h-[3px] bg-white"/>
      </div>
    </header>
  );
};

export default Header;
