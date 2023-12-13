import Image from 'next/image'
import BgImage from '../../public/images/main-banner.jpg'
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
    <main className="max-w-352 m-auto p-6 mt-60 flex-col flex content-between overflow-hidden">
      <Image
        src={BgImage}
        alt="фон"
        className="shadow-2xl"
        placeholder="blur"
        quality={100}
        fill
        // sizes="100dvw"
        style={{
          objectFit: 'cover',
          filter: 'grayscale(50%) brightness(30%)',
          maxHeight: '53rem',
        }}
      />
      <section className="text-white z-10 flex relative mb-14">
        <div className="flex flex-col gap-6">
          <h1>
            СТО на
            <br />
            Дорожній
          </h1>
          <p className="font-normal text-sm w-full md:w-1/2">
            Наша мета - забезпечити нашим клієнтам якісний, безпечний ремонт і
            незабутній клієнтський досвід, заснований на сімейних цінностях.
          </p>
          <div className="flex gap-4 flex-wrap">
            <PopUpFormButton />
            <Link href={'/serviceform'}>
              <Button type={ButtonType.outline}>Замовити послугу</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-[10rem] pt-14 text-white">
        <h2 className="flex justify-center">Послуги</h2>
        <Slider services={services}/>
        {/* <Carousel slides={services} cardsToDisplay={4}/> */}
        <div className="pt-6 flex justify-center">
          <Link href="/ourservices">
            <Button type={ButtonType.outline}>Усі послуги</Button>
          </Link>
        </div>
      </section>

      <Image
        src={BusImg}
        alt="bus image on bg"
        className="z-0 top-[1200px] right-[80px] hidden lg:block icon-1"
        style={{
          objectFit: 'cover',
          filter: 'grayscale(100%) brightness(17%)',
          transform: 'rotate(5deg)',
        }}
      />

      <section className="font-bold font-serif flex flex-col gap-8 z-20 mt-[3.5rem] pt-14 text-white ">
        <h2 className="flex justify-center">Переваги</h2>
        <AdvantageSection />
      </section>
      <section className="none z-20 md:block">
        <ProcesSection />
      </section>
      <Image
        src={BusImg}
        alt="bus image on bg"
        className="top-[2400px] md:top-[2300px] hidden lg:block icon-2 z-0"
        style={{
          filter: 'grayscale(100%) brightness(17%)',
          transform: 'rotate(154deg)',
        }}
      />
      <section className="font-bold font-serif flex z-20 mt-14 pt-14 text-white">
        <AboutUs />
      </section>
      <Image
        src={BusImg}
        alt="bus image on bg"
        className="md:top-[3200px] lg:top-[2950px] hidden lg:block icon-3"
        style={{
          objectFit: 'cover',
          filter: 'grayscale(100%) brightness(17%)',
          transform: 'rotate(125deg)',
        }}
      />
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
        <h2 className="text-center mb-6">Побудувати маршрут в GOOGLE MAPS</h2>
        <GoogleMap />
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
        <h2 className="text-center mb-6">Питання / Відповіді</h2>
        <FaqSection />
      </section>
    </main>
  )
}
