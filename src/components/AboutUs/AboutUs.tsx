import React from 'react'
import Image from 'next/image'
import { Button } from '@/ui'
import AboutUsImage2 from '../../../public/images/aboutus_2.png'
import { ButtonType } from '@/ui/buttons/Button'

const AboutUs = () => {
  return (
    <section className="text-white flex flex-col-reverse justify-between items-center  gap-8 lg:flex-row">
      <div className="flex flex-col items-center gap-6 lg:w-[460px] lg:min-w-[460px] md:items-start">
        <h2>Про нас</h2>
        <p>
          <span className="font-bold">“СТО на Дорожній”</span> — це новий
          автосервіс, який заснований на засадах сімейного бізнесу. Молода
          команда професіоналів, які постійно розвиваються і впроваджують нові
          технології для досягнення найкращих результатів на всіх етапах
          виконання робіт.
        </p>
        <div className="flex justify-end">
          <Button type={ButtonType.outline}>Read more</Button>
        </div>
      </div>
      <div className="max-w-[746px]">
        <Image src={AboutUsImage2} alt="Фото нашого СТО всередині" />
      </div>
    </section>
  )
}

export default AboutUs
