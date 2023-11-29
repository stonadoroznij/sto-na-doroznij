import Image from 'next/image'
import BgImage from '../../public/images/MainBg.jpg'
import CallBtn from '../../public/Call.svg'
import { Button } from '@/ui'
import { ServiceCard } from '@/components'
import { BgPicture } from '../../public/Coleso.svg'
import { AdvantagesCard } from '@/components'

export default function Home() {
  return (
    <main className="max-w-352 m-auto p-6 mt-60 flex-col flex content-between">
      <Image src={BgImage} alt="фон"  className='shadow-2xl' placeholder="blur"
      quality={100}
      fill
      sizes="100vw" style={{
        objectFit: 'cover',
        filter: "grayscale(50%)",
        filter: "blur(2px) grayscale(50%) brightness(50%)",
      }} />
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
          <div className="pt-8">
            <Button >Зв’язатись з нами</Button>
            <Button type='outline'>Замовити послугу</Button>
          </div>
        </div>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14">
        <h2 className="flex justify-center">Послуги</h2>
        <div className="flex pt-6 justify-between">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <div className="pt-6 flex justify-center">
          <Button children="Усі послуги" type="outline" />
        </div>
      </section>
      <section>
        <h2>Переваги</h2>
        <div className="flex flex-wrap">
          <AdvantagesCard text="Нове сучасне обладнання та інструмент." />
          <AdvantagesCard />
          <AdvantagesCard />
          <AdvantagesCard />
          <AdvantagesCard />
          <AdvantagesCard />
        </div>
      </section>
    </main>
  )
}
