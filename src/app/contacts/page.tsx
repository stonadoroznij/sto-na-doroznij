import { GoogleMap, SocialMedia } from '@/components'

const Contacts = () => {
  return (
    <main className="max-w-352 m-auto p-6">
      <section className="flex flex-col items-center gap-14 text-white">
        <h2 className="mb-6">Контакти</h2>
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Телефонуйте</h3>
            <div className="text-lg">+38 (096) 973 37 54</div>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Графік роботи</h3>
            <div className="text-lg">
              Пн-Пт 9.00-18.00
              <br />
              Сб 9.00-14.00
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Приїжайте</h3>
            <div className="text-lg">Макарів, вул.Дорожня 33</div>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Слідкуйте</h3>
            <SocialMedia />
          </div>
        </div>
        <h2 className="mb-6 text-center">Побудувати маршрут в Google maps</h2>
        <GoogleMap />
      </section>
    </main>
  )
}

export default Contacts
