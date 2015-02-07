/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {

		'api': {

			// API files to watch:
			'files': ['api/**/*']
		},

        'styles': {
            'files': [
                'assets/styles/**/*.scss'
            ],
            'tasks': [
                'compass:dev',
                'sync:dev'
            ]
        },

        'scripts': {
            'files': [
                'assets/scripts/**/*.js',
                '!assets/scripts/templates/registry.js'
            ],
            'tasks': [
                'sync:dev'
            ]
        },

        'templates': {
            'files': [
                'assets/templates/**/*.hbs'
            ],
            'tasks': [
                'handlebars:dev',
                'sync:dev'
            ]
        }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
