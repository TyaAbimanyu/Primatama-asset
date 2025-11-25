import { boot } from 'quasar/wrappers'
import Vue3Marquee from 'vue3-marquee'

export default boot(({ app }) => {
  app.use(Vue3Marquee)
})
