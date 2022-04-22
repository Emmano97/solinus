module.exports = {
    plugin: [
        require('stylelint')({
            configFile: 'stylelint.s.js',
        }),

        require('postcss-extend'),
        require('precss'),
        require('postcss-preset-env'),
        //require('tailwindcss')('tailwindcss.config.js'),
        require('postcss-nested'),
        require('autoprefixer')(),
        require('postcss-reporter'),
    ],
}