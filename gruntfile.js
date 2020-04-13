module.exports = function(grunt){

  grunt.initConfig({

    less:{
      dev:{
        options:{
          //  paths: ['less/'] //doesn't apply unless we want to set a different dir for import
          // compress: true
        },
        files:{
          'css/styles.css' : 'less/styles.less',
          'css/index.css' : 'less/index.less'
        }
      }
    },

    concat:{
      options:{
        separator: '/* custom Miracle JS/css */',
      },
      js:{
        src: ['js/botchat.js','js/script.js'],
        dest: 'dist/mbot.js',
      },
      css:{
        src: ['css/botchat.css','css/styles.css', 'css/index.css'],
        dest: 'dist/mbot.css',
      },
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
      },
      target: {
        files: {
          'dist/mbot.min.css': ['dist/mbot.css']
        }
      }
    },

    uglify: {
      // Uglify options
      options: {},
      // Minify js files in dist/
      dist: {
        src: ['dist/mbot.js'],
        dest: 'dist/mbot.min.js'
      },
    },

    jshint: {
      gruntfile: 'gruntfile.js',
      files: ['./*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      gruntfile: {
        files: 'gruntfile.js',
        tasks: ['jshint:gruntfile'],
      },
      less: {
        files: ['less/*'],
        tasks: ['less:dev']
      },
      css: {
        files: ['css/*'],
        tasks: ['concat:css']
      },
      js: {
        files: ['js/*'],
        tasks: ['concat:js']
      },
    }



  });

  grunt.registerTask('default', [
    'watch'
  ]);


  /**
  * Production tast, use for deploying
  * run `grunt production`
  */
  grunt.registerTask('prod', [
    'less:dev',           // Covnert Less files to css
    'concat:css',        // Concatenate main css files
    'cssmin',           // Minify concatenated css files
    'concat:js',        // Concatenate main JS files
    'uglify',           // Minifiy concatenated JS file
  ]);

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-nodemon');
  // grunt.loadNpmTasks('grunt-concurrent');
};
