/**
 * Compile templates into functions.
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

	grunt.config.set('handlebars', {

        'dev': {
            
            'options': {
                'namespace': "hbs",
                'amd': true
            },

            'files': {
                "assets/scripts/templates/registry.js": [
                    "assets/templates/**/*.hbs"
                ]
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-handlebars');
};
