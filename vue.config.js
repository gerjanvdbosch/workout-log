module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/workout-tracker/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Workout Tracker',
    themeColor: '#121212',
    manifestOptions: {
      background_color: '#121212'
    }
  }
};
