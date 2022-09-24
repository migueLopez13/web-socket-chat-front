import { defineStore } from 'pinia'
import { ref } from 'vue'
import userRepository from '../shared/repository/user.repository'
import { FakeResponse } from '../shared/types/fake-response.type'
import { User } from '../shared/types/user.type'

type CreateMutable<T> = { -readonly [P in keyof T]: CreateMutable<T[P]> }

export const useUserState = defineStore('user', () => {

  const users = ref([] as User[])

  async function fetchUsers() {
    users.value = (await userRepository.get() as FakeResponse).data as User[]
  }

  function addUser(user: User) {
    users.value = [...users.value, user]
  }

  return { users, fetchUsers, addUser }

})