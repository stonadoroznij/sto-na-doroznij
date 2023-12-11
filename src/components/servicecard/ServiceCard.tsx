import Image from 'next/image'
import Link from 'next/link'
import ServiceImage1 from '../../../public/images/service_1.png'
import { Button } from '@/ui'
import { ButtonType } from '@/ui/buttons/Button'
import { ButtonText, Services as ServicesText } from '@/i18n/uk'

type Service = {
  id: number
  name: string
  description: string | null
  price: number | null
}

interface PropsType {
  service: Service
}

const ServiceCard = ({ service }: PropsType) => {
  return (
    <div className="relative w-full bg-coal-800 rounded-xl shadow-dark border border-coal-600 hover:shadow-accent-20 hover:border-accent-yellow hover:cursor-pointer hover:-translate-y-1 p-6 flex flex-col gap-3 justify-between items-center transition-all duration-200 ease-in group">
      <div className="w-full flex flex-col gap-3">
        <Image
          src={`/images/services/service-${service.id}.jpg`}
          width={600}
          height={465}
          alt={service.name}
          className="w-full rounded-lg"
        />
        <div className="flex flex-col w-full gap-2">
          <div className="text-lg font-semibold">{service.name}</div>
          <div key={service.id}>
            <p className="line-clamp-4 text-coal-300 group-hover:text-white">
              {service.description}
            </p>
            <div className="absolute top-10 left-3 pr-4 pl-4 pb-2 pt-2 text-sm bg-accent-yellow text-coal-800 rounded-tl-2xl rounded-br-2xl">
              {`${ServicesText.from} ${service.price} ${ServicesText.currency}`}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Link
          href={'/price'}
          className="text-sm text-coal-300 underline font-bold hover:text-accent-yellow"
        >
          {ButtonText.price}
        </Link>
        <Link href={`/serviceform?service=${service.id}`}>
          <Button type={ButtonType.outline}>{ButtonText.orderService}</Button>
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
