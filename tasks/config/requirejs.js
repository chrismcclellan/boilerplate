/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(grunt) {

	grunt.config.set('requirejs', {

        'dev': {
            'options': {
                'name': 'main',
                'mainConfigFile': 'assets/scripts/main.js',
                'baseUrl': 'assets/scripts',
                'out': 'assets/js/amd-app.js',
                'findNestedDependencies': true
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
};
