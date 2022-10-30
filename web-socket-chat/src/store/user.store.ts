import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import userRepository from '../shared/api/user.repository'
import { FakeResponse } from '../shared/types/fake-response.type'
import { User } from '../shared/types/user.type'


export const useUserState = defineStore('user', () => {

  const users = ref([] as User[])

  const getters = {}

  const actions = reactive({
    fetchUsers: async () => {
      users.value = (await userRepository.get() as FakeResponse).data as User[]
    },
    addUser: (user: User) => {
      users.value = [...users.value, user]
    }
  })


  return { users, getters, actions }

})