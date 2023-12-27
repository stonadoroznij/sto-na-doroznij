import React from 'react'

import { BigForm } from '@/components'
import { serviceRepo } from '@/repository'

const ServiceForm = async () => {
  const services = await serviceRepo.getAll()

  return (
    <main className="max-w-171 m-auto p-6">
      <section className="flex flex-col gap-12 text-white">
        <h2 className="text-center">Замовити послугу</h2>
        <BigForm services={services} />
      </section>
    </main>
  )
}

export default ServiceForm
