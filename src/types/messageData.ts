import { Request } from '@prisma/client'

interface MessageData extends Omit<Request, 'id' | 'carYear'> {
  carYear: string
}

export default MessageData
