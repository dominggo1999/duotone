export const presets = [
  {
    name: 'spotify',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: [
          100,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
        src: 'http://localhost:3000/src/assets/default.jpeg',
      },
      foreground: {
        bg: '#0A3463',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#0AB76C',
      },
    },
    frames: [
      '34% 63% 55% 31% / 39% 53% 36% 44%',
      '34% 66% 61% 50% / 63% 65% 63% 51%',
      '40% 61% 64% 48% / 40% 44% 55% 42%',
      '40% 65% 49% 55% / 50% 31% 54% 44%',
      '36% 63% 57% 41% / 50% 46% 58% 52%',
    ],
    scaleTime: 19,
    rotateTime: 31,
  },
  {
    name: 'kinda red',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#0A0505',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#F00E2E',
      },
    },
    frames: [
      '37% 62% 52% 45% / 62% 60% 37% 57%',
      '38% 67% 51% 45% / 36% 48% 41% 53%',
      '38% 67% 58% 52% / 33% 47% 40% 46%',
      '40% 67% 46% 45% / 62% 44% 60% 40%',
      '34% 66% 62% 31% / 37% 44% 36% 66%',
    ],
    scaleTime: 20,
    rotateTime: 44,
  },
  {
    name: 'lemon',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: [
          68,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#a35e2d',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#ffea00',
      },
    },
    frames: [
      '34% 67% 60% 47% / 46% 31% 46% 63%',
      '38% 67% 50% 57% / 43% 52% 54% 58%',
      '38% 66% 59% 41% / 46% 54% 38% 44%',
      '34% 67% 53% 52% / 52% 48% 51% 53%',
      '34% 66% 55% 56% / 53% 63% 62% 60%',
    ],
    scaleTime: 13,
    rotateTime: 68,
  },
  {
    name: 'purply',
    settings: {
      image: {
        blendMode: 'unset',
        opacity: [
          100,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#b955c2',
        blendMode: 'color-burn',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#000000',
      },
    },
    frames: [
      '37% 61% 56% 32% / 46% 53% 52% 39%',
      '36% 67% 46% 49% / 49% 60% 40% 63%',
      '34% 61% 45% 45% / 52% 47% 57% 52%',
      '39% 66% 47% 57% / 43% 36% 54% 43%',
      '38% 61% 55% 47% / 34% 33% 38% 66%',
    ],
    scaleTime: 11,
    rotateTime: 42,
  },
  {
    name: 'vintage',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#290900',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#FFEFB3',
      },
    },
    frames: [
      '37% 66% 52% 48% / 61% 34% 64% 68%',
      '40% 64% 62% 43% / 63% 64% 59% 59%',
      '37% 67% 64% 53% / 31% 40% 41% 63%',
      '35% 65% 56% 41% / 45% 45% 70% 41%',
      '35% 65% 62% 39% / 54% 34% 67% 64%',
    ],
    scaleTime: 11,
    rotateTime: 36,
  },
  {
    name: 'princess blue',
    settings: {
      image: {
        blendMode: 'overlay',
        opacity: [
          100,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#618CF5',
        blendMode: 'color-burn',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#8C9DA4',
      },
    },
    frames: [
      '40% 63% 52% 39% / 38% 54% 41% 44%',
      '37% 66% 62% 56% / 32% 45% 60% 69%',
      '38% 62% 47% 50% / 50% 31% 51% 51%',
      '35% 63% 49% 39% / 40% 35% 62% 62%',
      '36% 66% 56% 53% / 63% 51% 67% 52%',
    ],
    scaleTime: 19,
    rotateTime: 53,
  },
  {
    name: 'spicy red',
    settings: {
      image: {
        blendMode: 'unset',
        opacity: [
          100,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#C35655',
        blendMode: 'color-burn',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#000000',
      },
    },
    frames: [
      '40% 64% 54% 56% / 55% 43% 45% 43%',
      '40% 65% 51% 39% / 43% 53% 55% 62%',
      '34% 62% 56% 41% / 47% 38% 61% 46%',
      '35% 62% 49% 48% / 40% 59% 45% 67%',
      '35% 63% 61% 47% / 45% 48% 59% 48%',
    ],
    scaleTime: 16,
    rotateTime: 47,
  },
  {
    name: 'black velvet',
    settings: {
      image: {
        blendMode: 'screen',
        opacity: [
          100,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#1D1D37',
        blendMode: 'exclusion',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#000000',
      },
    },
    frames: [
      '37% 63% 63% 55% / 46% 31% 48% 67%',
      '35% 62% 63% 40% / 41% 51% 51% 49%',
      '39% 64% 52% 49% / 53% 37% 70% 62%',
      '35% 62% 50% 33% / 31% 55% 66% 66%',
      '35% 62% 44% 45% / 64% 56% 49% 49%',
    ],
    scaleTime: 14,
    rotateTime: 47,
  },
  {
    name: 'melon baby',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: [
          100,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#0A3463',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#EA6F31',
      },
    },
    frames: [
      '38% 65% 64% 49% / 35% 38% 65% 56%',
      '40% 64% 57% 46% / 55% 38% 61% 51%',
      '40% 64% 46% 31% / 59% 65% 37% 58%',
      '39% 62% 62% 46% / 55% 46% 37% 51%',
      '34% 65% 60% 52% / 34% 56% 38% 62%',
    ],
    scaleTime: 19,
    rotateTime: 65,
  },
  {
    name: 'geranium',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: [
          85,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#0d1538',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#C35655',
      },
    },
    frames: [
      '34% 64% 61% 52% / 36% 57% 68% 62%',
      '37% 61% 56% 37% / 40% 36% 56% 52%',
      '34% 65% 51% 41% / 64% 49% 68% 60%',
      '40% 62% 51% 57% / 32% 35% 37% 48%',
      '36% 61% 44% 43% / 50% 65% 69% 65%',
    ],
    scaleTime: 18,
    rotateTime: 53,
  },
  {
    name: 'perrywinkle',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: [
          63,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#645fc7',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#f2feff',
      },
    },
    frames: [
      '36% 64% 62% 31% / 50% 50% 36% 65%',
      '39% 65% 48% 36% / 64% 44% 64% 47%',
      '34% 67% 61% 57% / 56% 31% 41% 69%',
      '40% 62% 64% 38% / 41% 52% 69% 48%',
      '39% 66% 61% 43% / 61% 33% 48% 63%',
    ],
    scaleTime: 14,
    rotateTime: 34,
  },
  {
    name: 'pick candy',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: [
          87,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#3d50a2',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#EF009E',
      },
    },
    frames: [
      '37% 66% 61% 38% / 53% 55% 62% 58%',
      '39% 62% 53% 48% / 34% 64% 64% 60%',
      '37% 65% 52% 58% / 57% 41% 49% 44%',
      '36% 67% 60% 43% / 59% 56% 51% 69%',
      '34% 61% 54% 34% / 62% 52% 55% 39%',
    ],
    scaleTime: 14,
    rotateTime: 42,
  },
  {
    name: 'witch hazel',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: [
          80,
        ],
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#01aB6d',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#fbf019',
      },
    },
    frames: [
      '37% 64% 50% 58% / 40% 42% 64% 65%',
      '38% 61% 44% 33% / 64% 35% 56% 58%',
      '34% 62% 64% 57% / 64% 57% 41% 46%',
      '37% 65% 43% 35% / 48% 44% 43% 47%',
      '37% 61% 62% 53% / 58% 36% 39% 43%',
    ],
    scaleTime: 14,
    rotateTime: 42,
  },
  {
    name: 'droplet',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#91CFF8',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#FFFFFF',
      },
    },
    frames: [
      '35% 63% 60% 39% / 32% 50% 62% 61%',
      '37% 62% 50% 58% / 51% 41% 37% 44%',
      '34% 62% 52% 49% / 64% 46% 50% 39%',
      '37% 66% 53% 48% / 49% 36% 66% 70%',
      '37% 64% 53% 52% / 47% 38% 44% 67%',
    ],
    scaleTime: 20,
    rotateTime: 54,
  },
  {
    name: 'evergreen',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#241A5F',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#01AB6D',
      },
    },
    frames: [
      '37% 63% 57% 33% / 33% 57% 67% 48%',
      '37% 64% 53% 45% / 32% 56% 50% 42%',
      '38% 61% 48% 50% / 50% 44% 53% 52%',
      '38% 61% 59% 47% / 39% 36% 37% 59%',
      '39% 61% 45% 48% / 55% 31% 68% 41%',
    ],
    scaleTime: 18,
    rotateTime: 39,
  },
  {
    name: 'magnificence',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#602457',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#ACD49D',
      },
    },
    frames: [
      '37% 63% 63% 57% / 51% 43% 43% 60%',
      '39% 64% 47% 56% / 42% 37% 62% 66%',
      '38% 65% 62% 55% / 37% 60% 38% 48%',
      '39% 63% 50% 47% / 53% 45% 68% 40%',
      '38% 64% 50% 51% / 46% 62% 54% 64%',
    ],
    scaleTime: 15,
    rotateTime: 39,
  },
  {
    name: 'melodramatic',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#5062D6',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#EF009E',
      },
    },
    frames: [
      '38% 66% 58% 35% / 64% 57% 63% 61%',
      '40% 67% 52% 57% / 62% 45% 47% 51%',
      '37% 61% 60% 58% / 47% 60% 59% 37%',
      '38% 63% 57% 36% / 47% 47% 41% 54%',
      '38% 66% 43% 42% / 52% 47% 38% 38%',
    ],
    scaleTime: 18,
    rotateTime: 50,
  },
  {
    name: 'icy breeze',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#8682D9',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#DEFCFE',
      },
    },
    frames: [
      '38% 61% 64% 44% / 64% 46% 39% 61%',
      '36% 67% 57% 44% / 57% 50% 43% 63%',
      '40% 63% 53% 31% / 56% 34% 42% 65%',
      '38% 67% 55% 33% / 39% 33% 58% 53%',
      '40% 67% 57% 47% / 59% 62% 65% 65%',
    ],
    scaleTime: 18,
    rotateTime: 40,
  },
  {
    name: 'rose melody',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#65B7D6',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#FDD9E2',
      },
    },
    frames: [
      '38% 65% 45% 31% / 54% 46% 39% 41%',
      '36% 67% 63% 53% / 55% 56% 50% 70%',
      '35% 61% 48% 54% / 40% 53% 41% 60%',
      '36% 65% 57% 41% / 51% 48% 40% 41%',
      '37% 66% 51% 47% / 36% 53% 63% 39%',
    ],
    scaleTime: 15,
    rotateTime: 70,
  },
  {
    name: 'sephia',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#36200C',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#FF9738',
      },
    },
    frames: [
      '37% 67% 57% 51% / 45% 59% 56% 44%',
      '37% 66% 62% 39% / 47% 40% 69% 64%',
      '39% 64% 47% 51% / 31% 32% 37% 40%',
      '37% 62% 53% 57% / 50% 48% 60% 70%',
      '35% 62% 43% 42% / 47% 39% 61% 48%',
    ],
    scaleTime: 18,
    rotateTime: 64,
  },
  {
    name: 'check',
    settings: {
      image: {
        blendMode: 'multiply',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#2F0781',
        blendMode: 'lighten',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#DFB233',
      },
    },
    frames: [
      '40% 62% 56% 35% / 64% 31% 64% 59%',
      '37% 63% 51% 41% / 61% 37% 45% 49%',
      '34% 67% 63% 46% / 56% 31% 70% 55%',
      '39% 65% 54% 44% / 42% 32% 38% 65%',
      '35% 63% 50% 46% / 33% 61% 55% 70%',
    ],
    scaleTime: 18,
    rotateTime: 65,
  },
  {
    name: 'vvvvv',
    settings: {
      image: {
        blendMode: 'screen',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#514442',
        blendMode: 'color-burn',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#E9E9D2',
      },
    },
    frames: [
      '38% 66% 53% 44% / 39% 52% 57% 58%',
      '37% 65% 55% 44% / 57% 51% 65% 56%',
      '38% 61% 45% 47% / 39% 44% 51% 54%',
      '38% 66% 55% 52% / 36% 45% 67% 42%',
      '38% 67% 46% 43% / 54% 39% 37% 63%',
    ],
    scaleTime: 13,
    rotateTime: 61,
  },
  {
    name: 'vvvvv',
    settings: {
      image: {
        blendMode: 'color-burn',
        opacity: 80,
        blur: 0,
        brightness: 1,
        contrast: 1,
      },
      foreground: {
        bg: '#618CF5',
        blendMode: 'overlay',
      },
      wrapper: {
        spacing: '15',
        scale: 1,
        bg: '#8C9DA4',
      },
    },
    frames: [
      '36% 67% 64% 32% / 44% 39% 70% 51%',
      '34% 61% 62% 48% / 44% 35% 38% 52%',
      '40% 67% 53% 47% / 64% 58% 56% 51%',
      '37% 66% 48% 48% / 64% 34% 56% 68%',
      '40% 62% 52% 47% / 53% 62% 64% 69%',
    ],
    scaleTime: 13,
    rotateTime: 66,
  },
];
