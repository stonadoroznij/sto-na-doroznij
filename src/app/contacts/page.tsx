import Link from 'next/link'

import { GoogleMap, SocialMediaBig } from '@/components'
import { Contacts as ContactsInfo, Urls } from '@/consts'

const Contacts = () => {
  return (
    <main className="max-w-352 m-auto p-6">
      <section className="flex flex-col items-center gap-14 text-white">
        <h2 className="mb-6">Контакти</h2>
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Телефонуйте</h3>
            <a href={`tel:${ContactsInfo.Phone.replaceAll(' ', '-')}`}>
              <div className="text-lg">{ContactsInfo.Phone}</div>
            </a>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Графік роботи</h3>
            <div className="text-lg text-center lg:text-left">
              {ContactsInfo.WorkingHours[0]}
              <br />
              {ContactsInfo.WorkingHours[1]}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Приїжджайте</h3>
            <Link href={`${Urls.Contacts}#map`}>
              <div className="text-lg">{ContactsInfo.Address}</div>
            </Link>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">Слідкуйте</h3>
            <SocialMediaBig />
          </div>
        </div>
        <h2 className="mb-6 text-center">Побудувати маршрут в Google maps</h2>
        <div className="w-full" id="map">
          <GoogleMap />
        </div>
      </section>
    </main>
  )
}

export default Contacts
