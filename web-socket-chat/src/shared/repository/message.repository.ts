
import { Message } from "../types/message.type";
import BaseRepository from "./base.repository";

class MessageRepository extends BaseRepository<Message>{
  constructor() {
    super("/message")
  }

  async get(id: string) {
    return super.get(id)
  }
}

const messageRepository = new MessageRepository()
export default messageRepository