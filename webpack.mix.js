const mix = require('laravel-mix')

// THIS fixes stuff
// mix.config.publicPath = 'public'

mix.js('js/hello.js', 'public/js')
   .version()
