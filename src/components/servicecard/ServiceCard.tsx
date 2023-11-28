import Image from 'next/image'
import React from 'react'
import ServiceImage1 from '../../../public/images/service_1.png'

const ServiceCard = () => {
    return (
        <div className="w-full bg-coal-800 rounded-xl shadow-dark border border-coal-600 hover:shadow-accent-20 hover:border-accent-yellow hover:cursor-pointer hover:-translate-y-1 p-6 flex flex-col gap-3 items-center transition-all duration-200 ease-in">
            <Image
                src={ServiceImage1}
                alt="Ходова частина"
                className="w-full rounded-lg"
            />
            <div className="flex flex-col gap-2">
                <div className="text-lg font-semibold">Ходова частина</div>
                <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur. Libero viverra
                    tellus amet eget at ullamcorper at aenean. Diam purus
                    egestas donec tincidunt lacus facilisi ac arcu. Nunc tortor
                    vulputate est commodo et feugiat. Est leo eget dolor natoque
                    ultricies neque ultrices aliquam ac.
                </p>
            </div>
            <a className="text-sm text-accent-yellow underline font-bold">
                Read more
            </a>
        </div>
    )
}

export default ServiceCard
