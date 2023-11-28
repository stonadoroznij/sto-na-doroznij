import { Request } from '@prisma/client'

interface MessageData extends Omit<Request, 'id' | 'phoneNumber' | 'carYear'> {
  phoneNumber: string
  carYear: string
}

export default MessageData
