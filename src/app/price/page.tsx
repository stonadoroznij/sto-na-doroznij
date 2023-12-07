import { Price as Prices } from '../../i18n/uk'

const Price = () => {
  return (
    <main className="max-w-352 m-auto p-6">
      <section className="text-white">
        <h2 className="mb-6 text-center">{Prices.title}</h2>
        <div className="flex flex-col gap-8">
          {Prices.items.map((v) => {
            return (
              <div key={v.title} className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-3xl">{v.title}</h2>
                <div className="flex gap-4 p-4 pb-0 pt-2 text-coal-300 font-semibold lg:pl-8 lg:pr-8">
                  <div className="flex-1">{Prices.columnNames[0]}</div>
                  <div className="w-16 text-center md:w-20">
                    {Prices.columnNames[1]}
                  </div>
                  <div className="w-16 text-center md:w-20">
                    {Prices.columnNames[2]}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  {v.services.map((s) => {
                    return (
                      <div
                        key={s.name}
                        className="flex items-center gap-2 p-4 bg-coal-700 rounded-lg md:gap-4 lg:pl-8 lg:pr-8"
                      >
                        <div className="flex-1">{s.name}</div>
                        <div className="w-16 text-center md:w-20">
                          {Prices.from}
                          <br className="md:hidden" /> {s.priceCar}
                        </div>
                        <div className="w-16 text-center md:w-20">
                          {Prices.from}
                          <br className="md:hidden" /> {s.priceBus}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Price
