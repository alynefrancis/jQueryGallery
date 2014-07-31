module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
      dist: {
        files: {
          'css/stylesheet.css' : 'css/stylesheet.scss'
          // says I am looking for changes in my scss
        }
      }
    },
    watch: {
      css: {
        files: ['css/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      jade: {
        files: ['jade/*.jade'],
        tasks: ['jade']
      },
      options: {
        livereload: true
      }
    }, 
    connect: {
      server: {
        options: {
          port: 9001,
          base:''
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 5 versions', 'ie 7', 'ie 8', 'ie 9']
      },
      no_dest: {
        src: 'css/stylesheet.css'
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    },
    // csslint: {
    //   strict: {
    //     src: ['css/*.css']
    //   }
    // },
    jade: {
      compile: {
        files: [{
         src: "**/*.jade",
         dest: "",
         ext: ".html",
         expand: true,  
         cwd: "jade/"
      }],
      options: {
       pretty: true
      }
    }
  },
 });
// closes grunt initConfig
 


 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-contrib-jade');

// grunt connect (or more verbosely, grunt connect:server) will start a static web server at http://localhost:9001/, with its base path set to the www-root directory relative to the gruntfile, and any tasks run afterwards will be able to access it.



 // Default task(s).
 grunt.registerTask('default', ['connect', 'sass', 'cssmin', 'watch']);
};
// on the grunt website it says there is 'sass' in the square brackets above 

// If you're using watch, then you don't need to add Jade to the registerTask line at the bottom, since 'watch' should already be in there.
// If you're not using it, though, then you need to drop it in
// REMEMBER:
// Jade will overwrite any html that is already in its destination file, so if you just want to muck around, DO NOT set the dest to your good, full html