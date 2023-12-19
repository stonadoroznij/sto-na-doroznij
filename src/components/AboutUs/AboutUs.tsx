import React from 'react'
import Image from 'next/image'
import { Button } from '@/ui'
import AboutUsImage1 from '../../../public/images/aboutus/about-us-1.jpg'
import { ButtonType } from '@/ui/buttons/Button'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <section className="text-white flex flex-col-reverse justify-between items-center  gap-8 lg:flex-row">
      <div className="flex flex-col items-center gap-6 lg:w-[460px] lg:min-w-[460px] md:items-start">
        <h2>Про нас</h2>
        <p>
          <span className="font-bold">Автосервіс «СТО на Дорожній» </span> -
          професійний та сучасний сервіс для вашого автомобіля, який надає
          повний спектр послуг з діагностики, ремонту та технічного
          обслуговування. Ми працюємо з усіма марками автомобілів і гарантуємо
          надійність та якість нашої роботи. Наш автосервіс має сучасне та
          професійне обладнання та інструмент, що дозволяє виконати ремонт
          будь-якої марки авто.
        </p>
        <div className="flex justify-end">
          <Link href="/aboutus">
            <Button type={ButtonType.outline}>Читати повністю</Button>
          </Link>
        </div>
      </div>
      <div className="max-w-[746px]">
        <Image src={AboutUsImage1} alt="Фото нашого СТО всередині" />
      </div>
    </section>
  )
}

export default AboutUs
