import React from 'react'
import Image from 'next/image'
import { Button } from '@/ui'
import AboutUsImg from '../../../public/images/aboutus_2.png'

const AboutUs = () => {
  return (
    <div className="flex">
      <div className="w-[26.25rem] h-[36rem] pt-[10.5rem] mr-[8.375rem]">
        <h2 className="flex justify-start">Про нас</h2>
        <p className="mt-[1.5rem] mb-[3rem] font-normal text-sm">
          “СТО на Дорожній” — це новий автосервіс, який заснований на засадах
          сімейного бізнесу. Молода команда професіоналів, які постійно
          розвиваються і впроваджують нові технології для досягнення найкращих
          результатів на всіх етапах виконання робіт.
        </p>
        <div className="flex justify-end">
          <Button type="outline">Read more</Button>
        </div>
      </div>
      <div>
        <Image src={AboutUsImg} alt="Про нас" />
      </div>
    </div>
  )
}

export default AboutUs
