import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import { loadFonts } from "./plugins/webfontloader"
import router from "./router"
import { worker } from "./shared/mocks/browser"
import { i18n } from "./plugins/i18n/i18n"

import TheAppLayout from "./shared/components/the-app-layout.vue"
import TheSideBar from "./shared/components/the-side-bar.vue"
import TheNavBar from "./shared/components/the-nav-bar.vue"

import { QuillEditor } from '@vueup/vue-quill'

loadFonts()

if (import.meta.env.VITE_MS === "mock") {
  worker.start()
}

const pinia = createPinia()
const app = createApp(App)

app.component('the-app-layout', TheAppLayout)
app.component('the-side-bar', TheSideBar)
app.component('the-nav-bar', TheNavBar)
app.component('QuillEditor', QuillEditor)

app.use(pinia).use(vuetify).use(i18n).use(router).mount("#app")
