import { Request } from '@prisma/client'

type MessageData = Record<keyof Omit<Request, 'id'>, string | number>

export default MessageData
