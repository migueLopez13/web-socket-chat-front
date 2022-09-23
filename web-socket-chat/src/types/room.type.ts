import { Message } from "./message.type"
import { User } from "./user.type"

export type Room = {
  createdAt: Date,
  id: string,
  admin: string,
  members: string[],
  messages: Message[]
}