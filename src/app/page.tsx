'use server'
import Image from 'next/image'
import BgImage from '../../public/images/main-banner_desktop.jpg'
import BgImageMobile from '../../public/images/main-banner_mobile.jpg'
import { Button } from '@/ui'
import {
  ProcesSection,
  AboutUs,
  FaqSection,
  GoogleMap,
  Slider,
  PopUpFormButton,
} from '@/components'
import { AdvantageSection } from '@/components'
import BusImg from '../../public/bus.svg'
import { ButtonType } from '@/ui/buttons/Button'
import Link from 'next/link'
import { serviceRepo } from '@/repository'

export default async function Home() {
  const services = await serviceRepo.getAll()
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

      {/* <Image
        src={BusImg}
        alt="bus image on bg"
        className="z-0 top-[1200px] right-[80px] hidden lg:block icon-1"
        style={{
          objectFit: 'cover',
          filter: 'grayscale(100%) brightness(17%)',
          transform: 'rotate(5deg)',
        }}
      />
      <Image
        src={BusImg}
        alt="bus image on bg"
        className="top-[2400px] md:top-[2300px] hidden lg:block icon-2 z-0"
        style={{
          filter: 'grayscale(100%) brightness(17%)',
          transform: 'rotate(154deg)',
        }}
      />
      <Image
        src={BusImg}
        alt="bus image on bg"
        className="md:top-[3200px] lg:top-[2950px] hidden lg:block icon-3"
        style={{
          objectFit: 'cover',
          filter: 'grayscale(100%) brightness(17%)',
          transform: 'rotate(125deg)',
        }}
      /> */}
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
            <Link href={'/serviceform'}>
              <Button type={ButtonType.outline}>Замовити послугу</Button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col text-white">
          <h2 className="text-center">Послуги</h2>
          <Slider services={services} />
          <div className="flex justify-center mt-6">
            <Link href="/ourservices">
              <Button type={ButtonType.outline}>Усі послуги</Button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col gap-6 text-white ">
          <h2 className="flex justify-center">Переваги</h2>
          <AdvantageSection />
        </section>
        <section>
          <ProcesSection />
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
