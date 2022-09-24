import { defineStore } from 'pinia'
import { ref } from 'vue'
import roomRepository from '../shared/repository/room.repository'
import { FakeResponse } from '../shared/types/fake-response.type'
import { Room } from '../shared/types/room.type'

export const useRoomState = defineStore('room', () => {

  const rooms = ref([] as Room[])

  async function fetchRooms() {
    rooms.value = (await roomRepository.get() as FakeResponse).data as Room[]
  }

  function addRoom(room: Room) {
    rooms.value = [...rooms.value, room]
  }

  return { rooms, fetchRooms, addRoom }

})
