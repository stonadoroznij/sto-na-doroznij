import { GoogleMap, SocialMediaBig } from '@/components'
import { Contacts as ContactsText } from '@/i18n/uk'
import Link from 'next/link'
import { Urls } from '@/consts'

const Contacts = () => {
  return (
    <main className="max-w-352 m-auto p-6">
      <section className="flex flex-col items-center gap-14 text-white">
        <h2 className="mb-6">{ContactsText.title}</h2>
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">{ContactsText.callUs}</h3>
            <a href={`tel:${ContactsText.phone.replaceAll(' ', '-')}`}>
              <div className="text-lg">{ContactsText.phone}</div>
            </a>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">
              {ContactsText.workingTime.title}
            </h3>
            <div className="text-lg text-center lg:text-left">
              {ContactsText.workingTime.first}
              <br />
              {ContactsText.workingTime.second}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">{ContactsText.driveToUs}</h3>
            <Link href={`${Urls.Contacts}#map`}>
              <div className="text-lg">{ContactsText.address}</div>
            </Link>
          </div>
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-2xl font-semibold">{ContactsText.followUs}</h3>
            <SocialMediaBig />
          </div>
        </div>
        <h2 className="mb-6 text-center">{ContactsText.buildRoute}</h2>
        <div className="w-full" id="map">
          <GoogleMap />
        </div>
      </section>
    </main>
  )
}

export default Contacts
