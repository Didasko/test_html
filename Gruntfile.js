/*###############################################
# 
# Gruntfile
#
###############################################*/
module.exports = function( grunt ) {

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // JS linter (check le JS !)
    jshint: {
      files: ['Gruntfile.js', 'assets/js/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,

        globals: {
          module: true,
          require: true,
          requirejs: true,
          jQuery: true,
          console: true,
          define: true
        }
      }
    },

    // SASS->css compilation task
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'assets/css/sass',
          cssDir: 'assets/css'
        }
      }
    },

    // CSS minification
    cssmin: {                  // Task
      compress: {
        files: {
          'assets/css/style-min.css': 'assets/css/style.css'
        }
      }
    },

    // Watcher task to compil SASS -> css
    // check l'état des fichiers en continu (exemple : vient d'être modifié...) et lance les tâches correspondantes définies ci-dessous.
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['jshint:gruntfile'],
          options: {
            nocase: true
        }
      },
      scss: {
        files: 'assets/css/sass/**/*.scss',
        tasks: ['compass']
      },
      css: {
        files: 'assets/css/style.css',
        tasks: ['cssmin']
      },
      scripts: {
        files: 'assets/js/**/*.js',
        tasks: ['jshint']
      }
    }

  });

  

  // Load tasks from "grunt-sample" grunt plugin installed via Npm.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  // Exemple : "grunt default" lance les tâches 'jshint', 'compass'. Idem pour "grunt prod" et "grunt watch".
  grunt.registerTask('default', ['jshint', 'compass']);
  grunt.registerTask('prod', ['jshint', 'compass']);
  grunt.registerTask('listen', ['watch']);
};