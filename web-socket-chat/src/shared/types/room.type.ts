import { Message } from "./message.type"

export type Room = {
  createdAt: Date,
  id: string,
  admin: string,
  name: string,
  members: string[],
  messages: Message[]
}