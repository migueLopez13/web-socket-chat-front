import { Room } from "../types/room.type";
import BaseRepository from "./base.repository";

class RoomRepository extends BaseRepository<Room>{
  constructor() {
    super("/room")
  }
}

const roomRepository = new RoomRepository()
export default roomRepository