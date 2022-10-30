<template>
  <v-app-bar color="blue" app absolute>
    <v-app-bar-nav-icon color="white" @click="$emit('toggle')" />
    <v-toolbar-title class="text-white">{{ pageTitle }}</v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-icon icon="mdi-account" color="white" x-large />
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from "vue"
const pageTitle = ref("Web chat")
</script>
