module.exports = function(grunt) {

    grunt.initConfig({
        exec: {
            compileTypeScript: 'tsc -p src'
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['exec:compileTypeScript', 'karma:unit']);
};
