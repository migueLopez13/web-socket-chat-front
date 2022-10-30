<template>
  <v-navigation-drawer
    v-bind="$attrs"
    color="blue"
    app
    absolute
    bottom
    temporary
  >
    <v-list nav dense class="text-white">
      <v-list-item
        title="Home"
        prepend-icon="mdi-home"
        @click="$router.push({ name: 'Welcome' })"
      />

      <v-list-item
        title="Profile"
        prepend-icon="mdi-card-account-details"
        @click="$router.push({ name: 'Profile' })"
      />

      <v-list-item
        title="Contacts"
        prepend-icon="mdi-account-group"
        @click="$router.push({ name: 'Contacts' })"
      />

      <v-list-group value="Rooms">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-message"
            title="Rooms"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="room in rooms"
          :key="room.id"
          :title="room.name"
          @click="$router.push({ name: 'Room', params: { id: room.id } })"
        />
      </v-list-group>

      <v-list-item
        title="New room"
        prepend-icon="mdi-plus-thick"
        @click="$router.push({ name: 'CreateRoom' })"
      />

      <v-list-item
        title="Configuration"
        prepend-icon="mdi-cog"
        @click="$router.push({ name: 'Configuration' })"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { toRefs } from "vue"
import { useRoomState } from "../../store/room.store"

const props = defineProps({
  collapsed: Boolean,
})

const { collapsed } = toRefs(props)

const roomsStore = useRoomState()
const { rooms } = storeToRefs(roomsStore)
</script>
