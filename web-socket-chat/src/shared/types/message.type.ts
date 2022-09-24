import { User } from "./user.type"

export type Message = {
  createdAt: Date,
  id: string,
  owner: User,
  text: string
}