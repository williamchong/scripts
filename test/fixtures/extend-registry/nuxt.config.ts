import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  hooks: {
    'scripts:registry': function (registry) {
      registry.push({
        category: 'custom',
        label: 'My Custom Script',
        import: {
          name: 'useScriptMyCustomScript',
          from: resolve('./scripts/my-custom-script'),
        },
      })
    },
  },
})
