import { defineStore } from 'pinia'
import roomRepository from '../repository/room.repository'
import { FakeResponse } from '../types/fake-response.type'
import { Room } from '../types/room.type'

export const useRoomState = defineStore('room', {
  state: () => ({
    rooms: [] as Room[],
  }),

  getters: {
    rooms(state) {
      return state.rooms
    }
  },

  actions: {
    async fetchRooms() {
      this.rooms = (await roomRepository.get() as FakeResponse).data as Room[]
    },
    addRoom(room: Room) {
      this.rooms.push(room)
    }
  },
})
