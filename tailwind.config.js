const text = '#D2D2DF';
const primary = '#27272F';
const secondary = '#1B1B22';
const accent = '#1BE4C9';
const highlight = '#737382';
const purple = '#6546C2';
const slider = '#5A5A66';

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      backgroundColor: {
        primary,
        secondary,
        accent,
        highlight,
        purple,
        slider,
      },
      textColor: {
        accent,
        text,
      },
      fontFamily: {
        primary: ['Nunito', 'sans-serif'],
      },
      borderColor: {
        accent,
      },
    },
  },
  plugins: [],
};
