import Image from 'next/image'
import BgImage from '../../public/images/MainBg.jpg'
import { Button } from '@/ui'
import { FaqCards, ServiceCard, Step } from '@/components'
import { BgPicture } from '../../public/Coleso.svg'
import { AdvantagesCard } from '@/components'
import AboutUs from '../../public/images/aboutus_2.png'
import Advantages1 from '../../public/AdvantagesIcons/Advantages-1.svg'
import Advantages2 from '../../public/AdvantagesIcons/Advantages-2.svg'
import Advantages3 from '../../public/AdvantagesIcons/Advantages-3.svg'
import Advantages4 from '../../public/AdvantagesIcons/Advantages-4.svg'
import Advantages5 from '../../public/AdvantagesIcons/Advantages-5.svg'
import Advantages6 from '../../public/AdvantagesIcons/Advantages-6.svg'
import YellowDot from '../../public/yellowDot.svg'
import ClearDot from '../../public/clearDot.svg'
import YellowCar from '../../public/YellowCar.svg'
import Slider from '@/components'

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
        <Slider/>
        {/*<div className="flex pt-6 justify-between w-[240rem]">
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
        <div className='flex justify-end mt-[2rem]'>
          <span className='flex w-[13rem] justify-between text-2xl'>
            <button className='text-2xl hover:text-accent-yellow'>
            &lt;
            </button>
            <span className='-mt-0/5'>•</span>
            <span className='-mt-0/5'>•</span>
            <span className='-mt-0/5'>•</span>
            <button className='hover:text-accent-yellow text-2xl'>
            &gt;
            </button>
          </span>
      </div>*/}
        <div className="pt-6 flex justify-center">
          <Button children="Усі послуги" type="outline" />
        </div>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-[3.5rem] pt-14 text-white">
        <h2 className="flex justify-center">Переваги</h2>
        <div className="flex flex-wrap justify-center">
          <AdvantagesCard
            imageSrc={Advantages1}
            text="Нове сучасне обладнання та інструмент."
          />
          <AdvantagesCard
            imageSrc={Advantages2}
            text="Досвідчені та кваліфіковані працівники."
          />
          <AdvantagesCard
            imageSrc={Advantages3}
            text="Широкий спектр послуг з ремонту та обслуговування авто."
          />
          <AdvantagesCard
            imageSrc={Advantages4}
            text="Гарантія на роботу та запчастини."
          />
          <AdvantagesCard
            imageSrc={Advantages5}
            text="Сучасний 3D стенд розвал-сходження."
          />
          <AdvantagesCard
            imageSrc={Advantages6}
            text="Комфортна зона очікування для клієнтів."
          />
        </div>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
        <h2 className="flex justify-center">Як відбувається процес</h2>
        <div className="mt-12 mb-[6.875rem] flex justify-center">
          <hr className="w-[56.25rem]" />
          <span className="flex absolute justify-between w-[57rem] -mt-2">
            <Image src={YellowDot} alt="yellowDot" />
            <Image src={YellowDot} alt="yellowDot" />
            <Image src={ClearDot} alt="ClearDot" />
            <Image src={ClearDot} alt="ClearDot" />
            <Image src={ClearDot} alt="ClearDot" />
          </span>
          <Image src={YellowCar} alt="YellowCar" className="absolute -mt-3" />
          <span className="flex mt-[2rem] absolute justify-between w-[59rem]">
            <Step name="Етап 1" about="Опис" />
            <Step name="Етап 2" about="Опис" />
            <Step name="Етап 3" about="Опис" />
            <Step name="Етап 4" about="Опис" />
            <Step name="Етап 5" about="Опис" />
          </span>
        </div>
        <div className="flex justify-center">
          <Button type="outline">Зв'язатися з нами</Button>
        </div>
      </section>
      <section className="font-bold font-serif flex z-20 mt-14 pt-14 text-white">
        <div className="w-[26.25rem] h-[36rem] pt-[10.5rem] mr-[8.375rem]">
          <h2 className="flex justify-start">Про нас</h2>
          <p className="mt-[1.5rem] mb-[3rem] font-normal text-sm">
            “СТО на Дорожній” — це новий автосервіс, який заснований на засадах
            сімейного бізнесу. Молода команда професіоналів, які постійно
            розвиваються і впроваджують нові технології для досягнення найкращих
            результатів на всіх етапах виконання робіт.
          </p>
          <div className="flex justify-end">
            <Button type="outline">Read more</Button>
          </div>
        </div>
        <div>
          <Image src={AboutUs} alt="Про нас" />
        </div>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
        <h2 className="flex justify-center">
          Побудувати маршрут в GOOGLE MAPS
        </h2>
        MAP
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
        <h2 className="flex justify-center">Питання / Відповіді</h2>
        <FaqCards
          question="Навіщо потрібно проводити діагностику авто регулярно?"
          answer="Комплексна діагностика автомобіля (включаючи ходову) означає, що необхідно витратити трохи часу та відвідати станцію технічного обслуговування для проведення повної перевірки вузлів та механізмів. Після проведення діагностики ви знатимете про стан усіх деталей підвіски, приводних механізмів, стан технічних рідин та інших елементів і при необхідності можна буде їх замінити. Таким чином, ви зможете заощадити пристойну суму, якщо зробите це заздалегідь але і будете впевнені в тому, що ви не потрапите в аварійну ситуацію через деталі, що різко вийшла з ладу."
          open="none"
        />
      </section>
    </main>
  )
}
