'use server'

import Image from 'next/image'
import Link from 'next/link'

import { ServicesApi } from '@/api'
import {
  AboutUs,
  FaqSection,
  GoogleMap,
  PopUpFormButton,
  ProcessSection,
  Slider,
} from '@/components'
import { AdvantageSection } from '@/components'
import { Urls } from '@/consts'
import { Button } from '@/ui'

import BusImg from '../../public/bus.svg'
import BgImage from '../../public/images/main-banner-desktop.jpg'
import BgImageMobile from '../../public/images/main-banner-mobile.jpg'

export default async function Home() {
  const services = await ServicesApi.FindAll()

  return (
    <main className="max-w-352 m-auto p-6 flex-col flex gap-16 lg:gap-24">
      <div className="absolute top-0 left-0 w-full hidden sm:block sm:h-[80vh] max-h-[900px] -z-10">
        <Image
          src={BgImage}
          alt="фон"
          placeholder="blur"
          quality={100}
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(40%)',
            maxHeight: '53rem',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-screen sm:hidden max-h-[900px] -z-10">
        <Image
          src={BgImageMobile}
          alt="фон"
          placeholder="blur"
          quality={100}
          fill
          style={{
            objectFit: 'cover',
            filter: 'brightness(40%)',
            maxHeight: '53rem',
          }}
        />
      </div>

      <Image
        src={BusImg}
        alt="bus image on bg"
        className="absolute top-[1200px] right-[80px] -z-10 hidden lg:block"
        style={{
          objectFit: 'cover',
          filter: 'grayscale(100%) brightness(17%)',
          transform: 'rotate(5deg)',
        }}
      />
      <Image
        src={BusImg}
        alt="bus image on bg"
        className="absolute top-[2000px] -z-10 hidden lg:block"
        style={{
          objectFit: 'cover',
          filter: 'grayscale(100%) brightness(17%)',
          transform: 'rotate(154deg)',
        }}
      />
      <div className="w-full flex flex-col gap-24">
        <section className="text-white h-[calc(100vh-184px)] sm:h-[calc(80vh-184px)] lg:sm:h-[calc(80vh-208px)] max-h-[640px] flex flex-col justify-center gap-6">
          <h1>
            СТО на
            <br />
            Дорожній
          </h1>
          <p className="font-normal text-lg w-full md:w-2/3">
            СТО на Дорожній- знаходимо рішення для кожного авто!
          </p>
          <div className="flex gap-4 flex-wrap">
            <PopUpFormButton />
            <Link href={Urls.ServiceForm}>
              <Button type="outline">Замовити послугу</Button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col text-white">
          <h2 className="text-center">Послуги</h2>
          <Slider services={services} />
          <div className="flex justify-center mt-6">
            <Link href={Urls.OurServices}>
              <Button type="outline">Усі послуги</Button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-6 text-white ">
          <h2 className="flex justify-center">Переваги</h2>
          <AdvantageSection />
        </section>
        <section>
          <ProcessSection />
        </section>
        <section className="text-white">
          <AboutUs />
        </section>
        <section className="flex flex-col gap-6 text-white">
          <h2 className="text-center mb-6">Побудувати маршрут в GOOGLE MAPS</h2>
          <GoogleMap />
        </section>
        <section className="flex flex-col gap-6 text-white">
          <h2 className="text-center">Питання / Відповіді</h2>
          <FaqSection />
        </section>
      </div>
    </main>
  )
}
