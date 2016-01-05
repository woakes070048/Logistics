module.exports = function (grunt) {
    grunt.initConfig({

        watch: {
            ts: {
                files: ['public/app/**/*.ts', 'app/**/*.ts'],
                tasks: ['ts'],
                options: {
                    livereload: true
                }
            }
        },

        nodemon: {
            dev: {
                script: 'server.js',
                ignore: ['node_modules/**/*.*', 'bower_components/**/*.*', 'public/app/**/*.*']
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
                    moduleResolution: "node"
                },
                src: ['server.ts','app/**/*.ts']
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
            },
        },
        
        concurrent: {
            target: {
                tasks: ['nodemon', 'ts']
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
    grunt.registerTask('compile', ['ts']);
    grunt.registerTask('default', ['build', 'compile', 'nodemon']);



}