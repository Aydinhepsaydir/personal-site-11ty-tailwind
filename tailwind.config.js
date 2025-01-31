module.exports = {
  theme: {
    extend: {
      colors: {}
    },
  },
  variants: {},
  plugins: [],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk', 'src/**/*.js', 'src/**/*.html'],
  } : {}
}