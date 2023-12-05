import { BigForm } from '../../components'
import React from 'react'

const ServiceForm = () => {
  return (
    <main className="max-w-171 m-auto p-6">
      <section className="flex flex-col gap-12 text-white">
        <h2 className="text-center">Замовити послугу</h2>
        <BigForm />
      </section>
    </main>
  )
}

export default ServiceForm
