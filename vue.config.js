module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/workout-tracker/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Workout Log',
    themeColor: '#1976D2',
    manifestOptions: {
      background_color: '#1976D2'
    }
  }
};
