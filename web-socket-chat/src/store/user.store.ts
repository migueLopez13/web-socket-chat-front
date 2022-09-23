import { defineStore } from 'pinia'
import userRepository from '../repository/user.repository'
import { FakeResponse } from '../types/fake-response.type'
import { User } from '../types/user.type'

type CreateMutable<T> = { -readonly [P in keyof T]: CreateMutable<T[P]> }

export const useUserState = defineStore('user', {
  state: () => {
    return {
      users: [] as CreateMutable<User[]>,
    }
  },

  getters: {
    users(state) {
      return state.users
    },
  },

  actions: {
    async fetchUsers() {
      this.users = (await userRepository.get() as FakeResponse).data as User[]
    },

    addUser(user: User) {
      this.users.push(user)
    },
  }
})