module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  },
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
