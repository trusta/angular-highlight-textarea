// Generated on 2014-09-02 using generator-angular 0.9.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'src/{,*/}*.js'
                ]
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'dist/{,*/}*',
                        'dist/.git*'
                    ]
                }]
            }
        },


        // Copies remaining files to places other tasks can use
        copy: {
            toto: {
                src: ['src/angular-highlight-textarea.js'],
                dest: 'dist/angular-highlight-textarea.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/angular-highlight-textarea.min.js': ['dist/angular-highlight-textarea.js']
                }
            }
        }
    });


    grunt.registerTask('build', [
        'jshint:all',
        'clean:dist',
        'copy:toto',
        'uglify:dist'
    ]);

    grunt.registerTask('default', ['build']);
};
