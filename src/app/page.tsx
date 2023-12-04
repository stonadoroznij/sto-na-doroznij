import Image from 'next/image'
import BgImage from '../../public/images/MainBg.jpg'
import { Button } from '@/ui'
import {
  FaqCards,
  ProcesSection,
  ServiceCard,
  Step,
  AboutUs,
  FaqSection,
} from '@/components'
import YellowDot from '../../public/yellowDot.svg'
import ClearDot from '../../public/clearDot.svg'
import YellowCar from '../../public/YellowCar.svg'
import { Slider } from '@/components'
import { AdvantageSection } from '@/components'

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
        sizes="100vw"
        style={{
          objectFit: 'cover',
          filter: 'blur(2px) grayscale(50%) brightness(50%)',
        }}
      />
      <section className="text-white z-40 flex relative mb-14">
        <div className="w-1/2">
          <h1>
            СТО на
            <br />
            Дорожній
          </h1>
          <p className="font-normal text-sm pt-6">
            Наша мета - забезпечити нашим клієнтам якісний, безпечний ремонт і
            незабутній клієнтський досвід, заснований на сімейних цінностях.
          </p>
          <div className="w-[28.5rem] flex justify-between pt-6">
            <Button>Зв’язатись з нами</Button>
            <Button type="outline">Замовити послугу</Button>
          </div>
        </div>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-[10rem] pt-14 text-white">
        <h2 className="flex justify-center">Послуги</h2>
        {/*<Slider/>*/}
        <div className="pt-6 flex justify-center">
          <Button children="Усі послуги" type="outline" />
        </div>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-[3.5rem] pt-14 text-white">
        <h2 className="flex justify-center">Переваги</h2>
        <AdvantageSection />
      </section>
      <section>
        <ProcesSection />
      </section>
      <section className="font-bold font-serif flex z-20 mt-14 pt-14 text-white">
        <AboutUs />
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
        <h2 className="flex justify-center">
          Побудувати маршрут в GOOGLE MAPS
        </h2>
        MAP
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
        <h2 className="flex justify-center">Питання / Відповіді</h2>
        <FaqSection />
      </section>
    </main>
  )
}
