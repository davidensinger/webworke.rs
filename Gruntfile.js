// Generated on 2013-09-30 using generator-jekyllrb 0.4.0
'use strict';

// Directory reference:
//   css: assets/styles
//   sass: _scss
//   javascript: assets/scripts
//   images: assets/images
//   fonts: assets/fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      sass: {
        files: ['<%= yeoman.app %>/_scss/**/*.scss'],
        tasks: ['sass:server']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,xml}',
          '_config.yml'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.{html,xml}',
          '{.tmp,<%= yeoman.app %>}/assets/styles/**/*.css',
          '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
          '<%= yeoman.app %>/assets/images/**/*.{gif,jpg,jpeg,png,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*',
            '!<%= yeoman.dist %>/generated/*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    sass: {
      options: {
        bundleExec: true,
        lineNumbers: false
      },
      dist: {
        files: [{
          src: '<%= yeoman.app %>/_scss/application.scss',
          dest: '.tmp/assets/styles/application.css'
        }]
      },
      server: {
        options: {
          sourcemap: true,
          lineNumbers: true
        },
        files: [{
          src: '<%= yeoman.app %>/_scss/application.scss',
          dest: '.tmp/assets/styles/application.css'
        }]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    // UseminPrepare will only scan a single page for usemin blocks. If you
    // use usemin blocks that aren't in index.html, create a usemin manifest
    // page (hackery!) and point this task there.
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        basedir: '<%= yeoman.dist %>',
        dirs: ['<%= yeoman.dist %>/**/*']
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/assets/styles/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'min'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    xmlmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.xml',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files
            // Usemin moves CSS and javascript inside of Usemin blocks
            // Copy moves asset files and directories
            'assets/images/**/*',
            'assets/fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore
            '!**/_*{,/**}'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    rev: {
      options: {
        length: 4
      },
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/assets/scripts/**/*.js',
            '<%= yeoman.dist %>/assets/styles/**/*.css',
            '<%= yeoman.dist %>/assets/images/**/*.{gif,jpg,jpeg,png,svg}',
            '<%= yeoman.dist %>/assets/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/assets/scripts/**/*.js',
        'test/spec/**/*.js',
        '!<%= yeoman.app %>/assets/scripts/_vendor/**/*'
      ]
    },
    csscss: {
      options: {
        bundleExec: true,
        minMatch: 2,
        ignoreSassMixins: false,
        colorize: true,
        shorthand: false,
        verbose: true
      },
      check: {
       src: ['<%= yeoman.app %>/assets/styles/**/*.css',
             '<%= yeoman.app %>/_scss/application.scss']
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>}/assets/styles/**/*.css',
          '<%= yeoman.app %>}/_scss/application.scss'
        ]
      }
    },
    modernizr: {
      devFile: '<%= yeoman.app %>/_bower_components/modernizr/modernizr.js',
      outputFile: '<%= yeoman.dist %>/assets/scripts/vendor/modernizr.js',
      files: [
        '<%= yeoman.dist %>/assets/scripts/{,*/}*.js',
        '<%= yeoman.dist %>/assets/styles/{,*/}*.css',
        '!<%= yeoman.dist %>/assets/scripts/vendor/*'
      ]
    },
    concurrent: {
      server: [
        'sass:server',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'copy:dist'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'connect:livereload',
      'watch'
    ]);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass:server',
    'jshint:all',
    'csscss:check',
    'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'modernizr',
    'imagemin',
    'svgmin',
    'rev',
    'usemin',
    'htmlmin',
    'xmlmin'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
