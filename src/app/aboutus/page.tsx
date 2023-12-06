import React from 'react'
import Image from 'next/image'
import AboutUsImage1 from '../../../public/images/aboutus_1.png'
import AboutUsImage2 from '../../../public/images/aboutus_2.png'
import { Button } from '@/ui'
import { ButtonType } from '@/ui/buttons/Button'
import Link from 'next/link'
import { AboutUs as AboutUsText, ButtonText } from '@/i18n/uk'

const AboutUs = () => {
  return (
    <main className="max-w-352 m-auto p-6">
      <div className="flex flex-col gap-8">
        <section className="text-white flex flex-col justify-between items-center gap-8 lg:flex-row">
          <div className="max-w-[746px]">
            <Image src={AboutUsImage1} alt={AboutUsText.fistImageAlt} />
          </div>
          <div className="flex flex-col gap-6 lg:w-[460px] lg:min-w-[460px]">
            <h1 className="mb-2 mt-2 text-4xl md:text-5xl">{AboutUsText.title}</h1>
            <p>{AboutUsText.paragraphs.first}</p>
            <p>{AboutUsText.paragraphs.second}</p>
            <div className="flex gap-4 flex-wrap">
              <Link href={'/serviceform'}>
                <Button>{ButtonText.contactWithUs}</Button>
              </Link>
              <Link href={'/serviceform'}>
                <Button type={ButtonType.outline}>{ButtonText.orderService}</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="text-white flex flex-col-reverse justify-between items-center  gap-8 lg:flex-row">
          <div className="flex flex-col gap-6 lg:w-[460px] lg:min-w-[460px]">
            <p>
              {AboutUsText.paragraphs.third[0]}<span className="font-bold">{AboutUsText.paragraphs.third[1]}</span>{AboutUsText.paragraphs.third[2]} 
            </p>
            <p>
              <span className="font-bold">{AboutUsText.paragraphs.fourth[0]}</span>{AboutUsText.paragraphs.fourth[1]}
            </p>
            <p>
              {AboutUsText.paragraphs.fifth}
            </p>
          </div>
          <div className="max-w-[746px]">
            <Image src={AboutUsImage2} alt="Фото нашого СТО всередині" />
          </div>
        </section>
      </div>
    </main>
  )
}

export default AboutUs
