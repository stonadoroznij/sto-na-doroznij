import { ButtonType } from '@/ui/buttons/Button'
import { ServiceCard } from '../../components'
import { Button } from '../../ui'
import React from 'react'

const OurServices = () => {
  return (
    <main className="max-w-352 m-auto p-6">
      <section className="text-white">
        <h2 className="mb-6">Послуги</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <div className="flex justify-center mt-12 flex-wrap gap-4">
          <Button>`Зв’язатись з нами`</Button>
          <Button type={ButtonType.outline}>Замовити послугу</Button>
        </div>
      </section>
    </main>
  )
}

export default OurServices
