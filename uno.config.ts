import { defineConfig, presetUno, presetWebFonts } from 'unocss';

import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

import presetAutoprefixer from 'unocss-preset-autoprefixer';

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          name: 'DM Sans',
          weights: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          italic: true
        },
        mono: {
          name: 'DM Mono',
          weights: [300, 400, 500],
          italic: true
        }
      }
    }),
    presetAutoprefixer()
  ],
  theme: {
    colors: {
      // My personal carefully handpicked gray palette
      gray: {
        975: '#0A0A0A',
        950: '#0F0F10',
        925: '#141415',
        900: '#19191A',

        875: '#232324',
        850: '#28282A',
        825: '#2D2D2F',
        800: '#323234',

        775: '#3C3C3E',
        750: '#414144',
        725: '#464649',
        700: '#4B4B4E',

        675: '#555558',
        650: '#5A5A5E',
        625: '#5F5F63',
        600: '#646468',

        575: '#69696D',
        550: '#737378',
        525: '#78787D',
        500: '#7D7D82',

        475: '#87878C',
        450: '#8D8D91',
        425: '#929296',
        400: '#97979B',

        375: '#A1A1A5',
        350: '#A7A7AA',
        325: '#ACACAF',
        300: '#B1B1B4',

        275: '#BBBBBE',
        250: '#C1C1C3',
        225: '#C6C6C8',
        200: '#CBCBCD',

        175: '#D5D5D7',
        150: '#E0E0E1',
        125: '#E0E0E1',
        100: '#E5E5E6',

        75: '#EFEFF0',
        50: '#F5F5F5',
        25: '#FAFAFA'
      }
    }
  },
  shortcuts: {
    'flex-y': 'flex items-center',
    'kb-focus': 'focus-visible:(outline outline-3 outline-white/20 outline-offset-5 rounded)'
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],

  // Pre-compute all translate-x-1 to translate-x-50 to allow conditional classes
  safelist: [...Array.from({ length: 50 }, (_, i) => `translate-x-${i + 1}`)]
});
