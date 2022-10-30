<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          src="https://vuejs.org/images/logo.png"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <h3>{{ "Rooms:" }}</h3>
        <article
          v-for="room in rooms"
          :key="room.id"
          style="cursor: pointer"
          @click="$router.push({ name: 'Room', params: { id: room.id } })"
        >
          {{ room.name }}
        </article>
      </v-col>
      <v-col cols="6">
        <h3>{{ "Users:" }}</h3>
        <article v-for="user in users" :key="user.email">
          {{ user.name }}
        </article>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRoomState } from "../../store/room.store"
import { useUserState } from "../../store/user.store"
import { storeToRefs } from "pinia"

const roomsStore = useRoomState()
const userStore = useUserState()

const { rooms } = storeToRefs(roomsStore)
const { users } = storeToRefs(userStore)
</script>
