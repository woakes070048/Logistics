module.exports = function (grunt) {
    grunt.initConfig({

        watch: {
            ts_front: {
                files: ['public/app/**/*.ts'],
                tasks: ['ts:front_end'],
                options: {
                    livereload: true
                }
            },
            ts_back: {
                files: ['**/*.ts', '!public/app/**/*.ts'],
                tasks: ['ts:back_end']
            }
        },

        nodemon: {
            dev: {
                script: 'server.js',
                ignore: ['node_modules/**/*.*', 'bower_components/**/*.*', 'public/**/*.*']
            }
        },

        ts: {
            front_end: {
                options: {
                    module: 'system',
                    experimentalDecorators: true,
                    moduleResolution: "node"
                },
                src: ["public/app/**/*.ts", "!node_modules/**/*.ts"]
            },
            back_end: {
                options: {
                    module: 'commonjs',
                    experimentalDecorators: true,
                    declaration: false,
                    moduleResolution: "node"
                },
                src: ['server.ts','app/**/*.ts', "!node_modules/**/*.ts"]
            }
        },

        concat: {
            options: {
                seperator: ';'
            },
            app: {
                files: {
                    "public/vendor.js": [
                        "node_modules/angular2/bundles/angular2-polyfills.js",
                        "node_modules/systemjs/dist/system.src.js",
                        "node_modules/requirejs/require.js",
                        "node_modules/angular2/bundles/angular2.dev.js",
                        "node_modules/angular2/bundles/router.dev.js",
                        "node_modules/angular2/bundles/http.dev.js",
                        "node_modules/rxjs/bundles/Rx.js",
                        "node_modules/jquery/dist/jquery.js"
                    ]
                }
            }
        },

        concat_css: {
            options: {
                // Task-specific options go here. 
            },
            all: {
                src: ["node_modules/bootstrap/dist/css/bootstrap.css"],
                dest: "public/styles.css"
            }
        },
        
        concurrent: {
            target: {
                tasks: ['nodemon', 'watch']
            },
            options: {
                logConcurrentOutput: true
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon')
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');

    grunt.registerTask('build', ['concat', 'concat_css'])
    grunt.registerTask('default', ['build', 'ts', 'concurrent']);



}