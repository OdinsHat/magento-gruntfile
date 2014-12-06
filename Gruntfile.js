module.exports = function(grunt) {
    'use strict';

    var skinDir = 'skin/frontend/[YOURTHEME]/default/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        phplint: {
            local: {
                files: [{
                    expand: true,
                    cwd: 'app/code/local/',
                    src: ['**/*.php']
                }]
            },
            community: {
                files: [{
                    expand: true,
                    cwd: 'app/code/community/',
                    src: ['**/*.php']
                }]
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                skinDir + 'js/{,*/}*.js'
            ]
        },
        clean: {
            options: {
                force: true
            },
            cache: {
                src: ['var/cache/*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-phplint');
    grunt.loadNpmTasks('grunt-phpcs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['phplint:local']);
};