module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        concat: {
          main: {
            src: 'src/css/*.css',  // All css files in dir
            dest: 'dist/css/getmeteome.css'
          }
        },

        cssmin: {
          main: {
            src: 'dist/css/getmeteome.css',
            dest: 'dist/css/getmeteome.min.css'
          }
        },

        // version headers for files
        usebanner: {
            taskName: {
                options: {
                    position: 'top',
                    banner: '/*\n * Weather-icon-font v<%= pkg.version %> (<%= pkg.homepage %>)\n * Copyright 2016-<%= grunt.template.today("yyyy") %> GetMeteoMe (https://getmeteo.me)\n * <%= pkg.license %>\n */',
                    linebreak: true
                },
                files: {
                    src: [
                        'dist/css/getmeteome.css',
                        'dist/css/getmeteome.min.css',
                        'docs/css/getmeteome.css'
                    ]
                }
            }
        },

        copy: {
          main: {
            src: 'dist/css/getmeteome.min.css',
            dest: 'docs/css/getmeteome.min.css'
          }
        },

        // Test server. For use run [grunt connect]
        connect: {
    	  server: {
    	    options: {
    	      port: 8000,
    	      base: 'docs',
              keepalive: true
    	    }
    	  }
    	}
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-banner');

    grunt.registerTask('default', ['concat', 'cssmin', 'usebanner', 'copy']);
};
