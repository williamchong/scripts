// WARNING: This file is automatically generated, do not manually modify.
import { withQuery } from 'ufo'
import type { GoogleTagManagerApi } from 'third-party-capital'
import { useRegistryScript } from '#nuxt-scripts-utils'
import type { RegistryScriptInput } from '#nuxt-scripts'
import { object, string } from '#nuxt-scripts-validator'

export const GoogleTagManagerOptions = object({ id: string() })

declare global {
  interface Window extends GoogleTagManagerApi {}
}
export type GoogleTagManagerInput = RegistryScriptInput<typeof GoogleTagManagerOptions>

export function useScriptGoogleTagManager<T extends GoogleTagManagerApi>(_options?: GoogleTagManagerInput) {
  return useRegistryScript<T, typeof GoogleTagManagerOptions>(_options?.key || 'google-tag-manager', options => ({
    scriptInput: {
      src: withQuery('https://www.googletagmanager.com/gtm.js', { id: options?.id }),
    },
    schema: import.meta.dev ? undefined : GoogleTagManagerOptions,
    scriptOptions: {
      use: () => {
        return { dataLayer: window.dataLayer, google_tag_manager: window.google_tag_manager }
      },
      stub: import.meta.client
        ? undefined
        : ({ fn }) => {
            return fn === 'dataLayer' ? [] : void 0
          },
      performanceMarkFeature: 'nuxt-third-parties-gtm',
      ...({ tagPriority: 1 }),
    },
    // eslint-disable-next-line
        clientInit: import.meta.server ? undefined : () => {window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});},
  }), _options)
}
