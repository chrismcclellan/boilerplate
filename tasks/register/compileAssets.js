module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
        'compass:dev',
        'handlebars:dev',
        'requirejs:dev'
	]);
};
