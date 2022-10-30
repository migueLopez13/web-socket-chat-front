<template>
  <v-app>
    <the-side-bar v-model="collapsed" />
    <the-nav-bar @toggle="collapsed = !collapsed" />
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { onMounted, ref } from "vue"
import { useRoomState } from "../../store/room.store"
import { useUserState } from "../../store/user.store"

const roomsStore = useRoomState()
const userStore = useUserState()
const collapsed = ref(false)

const { actions: roomActions } = storeToRefs(roomsStore)
const { actions: userActions } = storeToRefs(userStore)

onMounted(async () => {
  await roomActions.value.fetchRooms()
  await userActions.value.fetchUsers()
})
</script>
