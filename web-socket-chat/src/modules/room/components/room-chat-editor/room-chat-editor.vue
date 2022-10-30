<template>
  <article class="ql-container">
    <quill-editor :options="options" />
    <v-btn icon flat class="send-button">
      <v-icon color="grey">mdi-send</v-icon>
    </v-btn>
  </article>
</template>

<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill"
import { reactive } from "vue"

const options = reactive({
  placeholder: "Write something...",
  modules: {
    toolbar: ["bold", "italic", "underline", "strike"],
  },
  theme: "snow",
})
</script>

<style lang="scss">
.ql-container {
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: max-content;
  border: 2px solid #9e9e9e;
  border-radius: 20px;
  background-color: white;

  div {
    border: none !important;
  }

  .send-button {
    position: absolute;
    right: 0px;
    top: 0px;
  }
}
</style>