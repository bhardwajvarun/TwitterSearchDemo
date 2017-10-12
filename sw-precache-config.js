  module.exports = {
    staticFileGlobs: [
      'dist/public/*.{json,webmanifest}',
      'dist/public/*.css',
      'dist/public/*.{ttf,woff,woff2,eof}',
      'dist/public/*.js',
      'dist/public/*.map',
      'dist/public/index.html',
      'dist/assets/*.{png,jpg,jpeg,ico,gif,svg}'
    ],
    stripPrefixMulti: {
      'dist/public/assets/': 'assets/',
      'dist/public/': ''
    },
    verbose: true,
    navigateFallback: '/index.html',
    runtimeCaching: [{
      urlPattern: /\/api\//,
      handler: 'networkFirst'
    }]
  };
  
  