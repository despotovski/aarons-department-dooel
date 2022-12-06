const mix = require('laravel-mix');
require('laravel-mix-purgecss')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.extract();

mix.js('resources/js/app.js', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .purgeCss({
        extend: {
            safelist: {
                standard: [
                    /select/,
                    /ReactModal/,
                    /react-datepicker/,
                    /expand-on-focus/,
                    /rdw/,
                    /public-DraftStyleDefault/,
                    /carousel/,
                    /CircularProgressbar/,
                    /progressbar/
                ]
            },
        }
    })
    .copyDirectory('resources/assets', 'public/assets', false)
    .webpackConfig({
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]'
        }
    })
    .options({
        processCssUrls: false
    })
    .version()
    .sourceMaps(false, 'source-map')
