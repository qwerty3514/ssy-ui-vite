import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  safelist: [
    'i-ic-baseline-search',
    'i-ic-baseline-edit',
    'i-ic-baseline-check',
    'i-ic-baseline-message',
    'i-ic-baseline-delete',
  ],

  content: {
    pipeline: {
      include: [
        'src/**/*.{vue,js,ts,jsx,tsx}',
        'demo/**/*.{html,vue}',
      ],
    },
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
