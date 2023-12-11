import Image from 'next/image'
import BgImage from '../../public/images/MainBg.jpg'
import { Button } from '@/ui'
import {
  ProcesSection,
  AboutUs,
  FaqSection,
  GoogleMap,
  Slider,
  ServiceCard,
  AdvantagesCard,
} from '@/components'
import { AdvantageSection } from '@/components'
import BusImg from '../../public/bus.svg'
import { ButtonType } from '@/ui/buttons/Button'

export default function Home() {
  return (
    <main className="max-w-352 m-auto p-6 mt-60 flex-col flex content-between">
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
          filter: 'blur(2px) grayscale(50%) brightness(50%)',
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
            <Button>Зв’язатись з нами</Button>
            <Button type={ButtonType.outline}>Замовити послугу</Button>
          </div>
        </div>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-[10rem] pt-14 text-white">
        <h2 className="flex justify-center">Послуги</h2>
        <Slider />
        <div className="pt-6 flex justify-center">
          <Button type={ButtonType.outline}>Усі послуги</Button>
        </div>
      </section>
      
       <Image
        src={BusImg}
        alt="bus image on bg"
        className="absolute h-full z-0 top-[1200px] right-[80px] hidden md:block"
        style={{
          objectFit: 'cover',
          filter: 'grayscale(100%) brightness(17%)',
          transform: 'rotate(5deg)'
        }}
      /> 
      
      <section className="font-bold font-serif flex flex-col gap-8 z-20 mt-[3.5rem] pt-14 text-white ">
        <h2 className="flex justify-center">Переваги</h2>
        <AdvantageSection />
      </section>
      <section>
        <ProcesSection />
      </section>
     <Image
        src={BusImg}
        alt="bus image on bg"
        className="absolute top-[2400px] lg:right-[600px] md:right-[300px] hidden md:block"
        style={{
          filter: 'grayscale(100%) brightness(17%)',
          transform: 'rotate(155deg)',
        }}
      /> 
      <section className="font-bold font-serif flex z-20 mt-14 pt-14 text-white">
        <AboutUs />
      </section>
       <Image
        src={BusImg}
        alt="bus image on bg"
        className="absolute lg:top-[2950px] md:top-[3300px] right-[450px] hidden md:block"
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
