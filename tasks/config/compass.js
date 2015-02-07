/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 *
 * For usage docs see:
 * https://github.com/gruntjs/grunt-contrib-compass
 */
module.exports = function(grunt) {

	grunt.config.set('compass', {

        'dev': {
            'options': {
                'sassDir': 'assets/styles',
                'cssDir': 'assets/css',
                'imagesDir': 'assets/images',
                'fontsDir': 'assets/fonts'
            }
        },

        'prod': {
            'options': {
                'sassDir': 'assets/styles',
                'cssDir': 'assets/css',
                'imagesDir': 'assets/images',
                'fontsDir': 'assets/fonts',
                'force': true,
                'outputStyle': 'compressed'
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
};
