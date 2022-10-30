import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import roomRepository from '../shared/api/room.repository'
import { FakeResponse } from '../shared/types/fake-response.type'
import { Room } from '../shared/types/room.type'

export const useRoomState = defineStore('room', () => {

  const rooms = ref([] as Room[])

  const getters = reactive({
    getRoom: (roomID: string) => {
      return rooms.value.find(({ id }) => id === roomID)
    }
  })

  const actions = reactive({
    fetchRooms: async () => {
      rooms.value = (await roomRepository.get() as FakeResponse).data as Room[]
    },
    addRoom: (room: Room) => {
      rooms.value = [...rooms.value, room]
    }
  })

  return { rooms, getters, actions }

})
