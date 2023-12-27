import Link from 'next/link'
import React from 'react'

import { PopUpFormButton, ServiceCard } from '@/components'
import { Urls } from '@/consts'
import { serviceRepo } from '@/repository'
import { Button } from '@/ui'

const OurServices = async () => {
  const services = await serviceRepo.getAll()

  return (
    <main className="max-w-352 m-auto p-6">
      <section className="text-white">
        <h2 className="mb-6">Послуги</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="flex justify-center mt-12 flex-wrap gap-4">
          <PopUpFormButton />
          <Link href={Urls.ServiceForm}>
            <Button type="outline">Замовити послугу</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default OurServices
