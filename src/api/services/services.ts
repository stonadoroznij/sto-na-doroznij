import { Http } from '@/services'

import { FindAllServicesDto } from './services.types'

export class ServicesApi {
  static async FindAll(): Promise<FindAllServicesDto> {
    const res = await Http.Get('/api/v1/services')

    return res.json()
  }
}
