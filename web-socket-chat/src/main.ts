import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import { loadFonts } from "./plugins/webfontloader"
import router from "./router"
import { worker } from "./shared/mocks/browser"

loadFonts()

if (import.meta.env.VITE_MS === "mock") {
  worker.start()
}

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(vuetify).use(router).mount("#app")
