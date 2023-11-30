import Image from 'next/image'
import BgImage from '../../public/images/MainBg.jpg'
import { Button } from '@/ui'
import { ServiceCard } from '@/components'
import { BgPicture } from '../../public/Coleso.svg'
import { AdvantagesCard } from '@/components'
import AboutUs from '../../public/images/aboutus_2.png'
import Advantages1 from '../../public/AdvantagesIcons/Advantages-1.svg'
import Advantages2 from '../../public/AdvantagesIcons/Advantages-2.svg'
import Advantages3 from '../../public/AdvantagesIcons/Advantages-3.svg'
import Advantages4 from '../../public/AdvantagesIcons/Advantages-4.svg'
import Advantages5 from '../../public/AdvantagesIcons/Advantages-5.svg'
import Advantages6 from '../../public/AdvantagesIcons/Advantages-6.svg'

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
          <div className="pt-8">
            <Button>Зв’язатись з нами</Button>
            <Button type="outline">Замовити послугу</Button>
          </div>
        </div>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
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
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
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
        <div className="mt-6 mb-6 flex justify-center">
          <hr className="w-[56.25rem]" />
        </div>
        <Button type="outline">Зв'язатися з нами</Button>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
        <div>
          <h2>Про нас</h2>
          <p>
            “СТО на Дорожній” — це новий автосервіс, який заснований на засадах
            сімейного бізнесу. Молода команда професіоналів, які постійно
            розвиваються і впроваджують нові технології для досягнення найкращих
            результатів на всіх етапах виконання робіт.
          </p>
          <Button type="outline">Read more</Button>
        </div>
        <div>
          <Image src={AboutUs} alt="Про нас" />
        </div>
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
        <h2>Побудувати маршрут в GOOGLE MAPS</h2>
        MAP
      </section>
      <section className="font-bold font-serif flex flex-col z-20 mt-14 pt-14 text-white">
        <h2>Питання / Відповіді</h2>
      </section>
    </main>
  )
}
