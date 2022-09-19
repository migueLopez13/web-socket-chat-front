import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import { loadFonts } from "./plugins/webfontloader"
import router from "./router"

loadFonts()

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser")
  worker.start()
}

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(vuetify).use(router).mount("#app")
