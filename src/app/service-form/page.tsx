import React from 'react'

import { ServicesApi } from '@/api'
import { BigForm } from '@/components'

const ServiceForm = async () => {
  const services = await ServicesApi.FindAll()

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
