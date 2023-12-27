import { Prices } from './PricesList.data'

const PricesList = () => (
  <div className="flex flex-col gap-8">
    {Prices.map((price) => {
      return (
        <div key={price.title} className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl">{price.title}</h2>
          <div className="flex gap-4 p-4 pb-0 pt-2 text-coal-300 font-semibold lg:pl-8 lg:pr-8">
            <div className="flex-1">Послуга</div>
            <div className="w-16 text-center md:w-28">Легкові</div>
            <div className="w-16 text-center md:w-28">Буси</div>
          </div>
          <div className="flex flex-col gap-2">
            {price.services.map((service) => {
              return (
                <div
                  key={service.name}
                  className="flex items-center gap-2 p-4 bg-coal-700 rounded-lg md:gap-4 lg:pl-8 lg:pr-8"
                >
                  <div className="flex-1">{service.name}</div>
                  <div className="w-16 text-center md:w-28">
                    від
                    <br className="md:hidden" /> {service.priceCar}
                    <br className="md:hidden" /> грн
                  </div>
                  <div className="w-16 text-center md:w-28">
                    від
                    <br className="md:hidden" /> {service.priceBus}
                    <br className="md:hidden" /> грн
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    })}
  </div>
)

export default PricesList
