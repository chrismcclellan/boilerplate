module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'compileAssets',
		'clean:build',
		'copy:build'
	]);
};
