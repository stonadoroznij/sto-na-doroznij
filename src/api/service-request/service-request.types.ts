export interface CreateServiceRequestDto {
  name: string
  phone: string
  email?: string
  carBrand?: string
  carModel?: string
  carYear?: string
  vinCode?: string
  message?: string
  services?: number[]
}
