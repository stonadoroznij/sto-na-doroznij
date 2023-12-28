import { Http } from '@/services'

import { CreateServiceRequestDto } from './service-request.types'

export class ServiceRequestApi {
  static Create(data: CreateServiceRequestDto) {
    return Http.Post('/api/v1/service-request', data)
  }
}
