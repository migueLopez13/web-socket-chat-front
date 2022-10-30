<template>
  <article class="room-container pa-4" :style="background">
    <article>
      <room-messages-container :messages="room?.messages" />
      <room-users-status />
    </article>
    <room-chat-editor />
  </article>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity"
import { storeToRefs } from "pinia"
import { useRoute } from "vue-router"
import { Room } from "../../../shared/types/room.type"
import { useRoomState } from "../../../store/room.store"
import RoomChatEditor from "../components/room-chat-editor"
import RoomMessagesContainer from "../components/room-messages-container"
import RoomUsersStatus from "../components/room-users-status"

const roomsStore = useRoomState()
const route = useRoute()
const { getters } = storeToRefs(roomsStore)

const room = getters.value.getRoom(route.params.id as string) as Room

const background = computed(() => `background-color: ${room?.backgroundColor}`)
</script>

<style lang="scss">
.room-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
