import { ButtonType } from '@/ui/buttons/Button'
import { ServiceCard } from '../../components'
import { Button } from '../../ui'
import React from 'react'
import Link from 'next/link'
import { ButtonText, Services as ServicesText } from '@/i18n/uk'
import { serviceRepo } from '../../repository'

const OurServices = async () => {
  const services = await serviceRepo.getAll()

  return (
    <main className="max-w-352 m-auto p-6">
      <section className="text-white">
        <h2 className="mb-6">{ServicesText.title}</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
        <div className="flex justify-center mt-12 flex-wrap gap-4">
          <Button>{ButtonText.contactWithUs}</Button>
          <Link href={'/serviceform'}>
            <Button type={ButtonType.outline}>{ButtonText.orderService}</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default OurServices
