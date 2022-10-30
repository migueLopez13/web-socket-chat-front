<template>
  <article class="messages-container">
    <v-card v-for="message in messages" :key="message.id">
      <v-card-text class="ma-2 pa-0">
        {{ `${message.owner}:` }}
      </v-card-text>
      <v-card-text class="py-1"> {{ message.text }} </v-card-text>
      <v-card-subtitle class="d-flex justify-end">
        {{ formatedDate(message.createdAt) }}
      </v-card-subtitle>
    </v-card>
  </article>
</template>

<script setup lang="ts">
import moment from "moment"
import { Message } from "../../../../shared/types/message.type"
import { PropType } from "vue"

const props = defineProps({
  messages: {
    type: Object as PropType<Message[]>,
    required: false,
    default: [],
  },
})

const formatedDate = (date: Date) => moment(date).format("DD/MM/YYYY HH:mm:ss")
</script>

<style lang="scss">
.messages-container {
  height: 82vh;
}
</style>