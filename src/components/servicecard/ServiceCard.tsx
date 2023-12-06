import Image from 'next/image'
import Link from 'next/link'
import ServiceImage1 from '../../../public/images/service_1.png'
import { Button } from '@/ui'
import { ButtonType } from '@/ui/buttons/Button'

const ServiceCard = () => {
  return (
    <div className="relative w-full bg-coal-800 rounded-xl shadow-dark border border-coal-600 hover:shadow-accent-20 hover:border-accent-yellow hover:cursor-pointer hover:-translate-y-1 p-6 flex flex-col gap-3 items-center transition-all duration-200 ease-in group">
      <Image
        src={ServiceImage1}
        alt="Ходова частина"
        className="w-full rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <div className="text-lg font-semibold">Ходова частина</div>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet consectetur. Libero viverra tellus amet
          eget at ullamcorper at aenean. Diam purus egestas donec tincidunt
          lacus facilisi ac arcu. Nunc tortor vulputate est commodo et feugiat.
          Est leo eget dolor natoque ultricies neque ultrices aliquam ac.
        </p>
      </div>
      <Link
        href={'/price'}
        className="text-sm text-white opacity-50 underline font-bold group-hover:text-accent-yellow group-hover:opacity-100"
      >
        Прайс
      </Link>
      <Button type={ButtonType.outline}>Замовити послугу</Button>
      <div className="absolute top-10 left-3 pr-4 pl-4 pb-2 pt-2 text-sm bg-accent-yellow text-coal-800 rounded-tl-2xl rounded-br-2xl">
        від 300 грн
      </div>
    </div>
  )
}

export default ServiceCard
