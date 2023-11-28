import Image from 'next/image'
import BgImage from '../../public/images/MainBg.jpg'
import CallBtn from '../../public/Call.svg'
import { Button } from '@/ui'
import { ServiceCard } from '@/components'
import { BgPicture } from '../../public/Coleso.svg'
import { AdvantagesCard } from '@/components'


export default function Home() {
    return (
        
        <main className="max-w-352 m-auto p-6 mt-60">
        <Image 
        src={BgImage}
        alt='фон'
        className='absolute -mt-52 -z-10'/>
            <section className="text-white z-10 flex">
                <div className='w-1/2'>
                  <h1>СТО на<br/>Дорожній</h1>
                  <p className='font-normal text-sm pt-6'>Наша мета - забезпечити нашим клієнтам якісний, безпечний ремонт і незабутній клієнтський 
                досвід, заснований на сімейних цінностях.</p>
                  <div className='pt-8'>
                    <Button children='Зв’язатись з нами'/>
                    <Button children='Замовити послугу' type='outline'/>
                  </div>
                </div>
                <button className='w-16 h-16 fixed right-16 bottom-20 z-20'><Image src={CallBtn} alt="Кнопка зв'язку"/></button>
            </section>
            <section className='mt-14 font-bold font-serif flex flex-col z-20'>
              <h2 className='flex justify-center'>Послуги</h2>
              <div className='flex pt-6'>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
              </div>
              <div className='pt-6 flex justify-center'>
              <Button children='Усі послуги' type='outline'/>
              </div>
            </section>
            <section>
              <h2>Переваги</h2>
              <div className='flex flex-wrap'>
                <AdvantagesCard text="Нове сучасне обладнання та інструмент." />
                <AdvantagesCard/>
                <AdvantagesCard/>
                <AdvantagesCard/>
                <AdvantagesCard/>
                <AdvantagesCard/>
              </div>
            </section>
        </main>
    )
}
