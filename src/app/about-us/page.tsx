import Image from 'next/image'
import Link from 'next/link'

import { PopUpFormButton } from '@/components'
import { Urls } from '@/consts'
import { Button } from '@/ui'

import AboutUsImage1 from '../../../public/images/about-us/about-us-1.jpg'
import AboutUsImage2 from '../../../public/images/about-us/about-us-2.jpg'

const AboutUs = () => {
  return (
    <main className="max-w-352 m-auto p-6">
      <div className="flex flex-col gap-8">
        <section className="text-white flex flex-col justify-between items-center gap-8 lg:flex-row">
          <div className="max-w-[746px]">
            <Image src={AboutUsImage1} alt="Фото нашого СТО зовні" />
          </div>
          <div className="flex flex-col gap-6 lg:w-[460px] lg:min-w-[460px]">
            <h1 className="mb-2 mt-2 text-4xl md:text-5xl">Про нас</h1>
            <p>
              &quot;СТО на Дорожній&quot; — це новий автосервіс, який заснований
              на засадах сімейного бізнесу. Молода команда професіоналів, які
              постійно розвиваються і впроваджують нові технології для
              досягнення найкращих результатів на всіх етапах виконання робіт.
            </p>
            <p>
              Ми вибираємо тільки якісний підхід до справи, саме тому ми
              гарантуємо не тільки першокласне виконання робіт, а й привітне та
              тепле обслуговування.
            </p>
            <div className="flex gap-4 flex-wrap">
              <PopUpFormButton />
              <Link href={Urls.ServiceForm}>
                <Button type="outline">Замовити послугу</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="text-white flex flex-col-reverse justify-between items-center  gap-8 lg:flex-row">
          <div className="flex flex-col gap-6 lg:w-[460px] lg:min-w-[460px]">
            <p>
              Автосервіс{' '}
              <span className="font-bold">&quot;СТО на Дорожній&quot;</span> —
              це професійна турбота про Ваш автомобіль!
            </p>
            <p>
              <span className="font-bold">&quot;СТО на Дорожній&quot;</span> —
              це новий автосервіс, який заснований на засадах сімейного бізнесу.
              Молода команда професіоналів, які постійно розвиваються і
              впроваджують нові технології для досягнення найкращих результатів
              на всіх етапах виконання робіт.
            </p>
            <p>
              Ми вибираємо тільки якісний підхід до справи, саме тому ми
              гарантуємо не тільки першокласне виконання робіт, а й привітне та
              тепле обслуговування.
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
