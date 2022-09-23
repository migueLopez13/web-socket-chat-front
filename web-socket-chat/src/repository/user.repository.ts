import { FakeResponse } from "../types/fake-response.type";
import { User } from "../types/user.type";
import BaseRepository from "./base.repository";

class UserRepository extends BaseRepository<User>{
  constructor() {
    super("/user")
  }

  get(id?: string) {
    return super.get(id)
  }
}

const userRepository = new UserRepository()
export default userRepository