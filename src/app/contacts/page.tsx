import { SocialMedia } from '@/components'

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
        <div className="mapouter w-full h-1/2">
          <div className="gmap_canvas w-full h-1/2">
            <iframe
              src="https://maps.google.com/maps?q=50.4510623,%2029.8011723&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ width: '100%', aspectRatio: 'auto 4 / 2' }}
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contacts
