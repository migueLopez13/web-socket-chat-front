import { Room } from "./room.type"
import { User } from "./user.type"

export type FakeResponse = {
  message: string
  data: User[] | Room[]
}