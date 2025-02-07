import type { Highlighter, BundledLanguage } from 'shiki'
import { createHighlighter } from 'shiki'
import { computed, ref, toValue } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import { devtools } from './rpc'

export const shiki = ref<Highlighter>()

export function loadShiki() {
  // Only loading when needed
  return createHighlighter({
    themes: [
      'vitesse-dark',
      'vitesse-light',
    ],
    langs: [
      'css',
      'javascript',
      'typescript',
      'html',
      'vue',
      'vue-html',
      'bash',
      'diff',
    ],
  }).then((i) => {
    shiki.value = i
  })
}

export function renderCodeHighlight(code: MaybeRef<string>, lang: BundledLanguage) {
  return computed(() => {
    const colorMode = devtools.value?.colorMode || 'light'
    return shiki.value!.codeToHtml(toValue(code), {
      lang,
      theme: colorMode === 'dark' ? 'vitesse-dark' : 'vitesse-light',
    }) || ''
  })
}
