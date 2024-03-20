module.exports = function (grunt) {
  const sass = require('node-sass');

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner:
          '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/js',
            src: '**/*.js',
            dest: 'dist/js',
            ext: '.min.js',
          },
        ],
      },
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        options: {
          style: 'compressed',
        },
        files: [
          {
            expand: true,
            cwd: 'src/scss',
            src: ['**/*.scss'],
            dest: 'dist/css',
            ext: '.css',
          },
        ],
      },
    },
    copy: {
      html: {
        expand: true,
        cwd: 'src/',
        src: 'index.html',
        dest: 'dist/',
      },
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['src/index.html'],
        },
      },
    },
    watch: {
      scripts: {
        files: ['src/js/**/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass'],
      },
      html: {
        files: 'src/*.html',
        tasks: ['copy:html', 'processhtml'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-processhtml');

  grunt.registerTask('default', [
    'uglify',
    'sass',
    'copy',
    'processhtml',
    'watch',
  ]);
};
