module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    
    ember_handlebars: {
      options: {
          processName: function(filePath) {
            var shortFilePath = filePath.replace(/templates\//, '').replace('.hbs', '');
            return shortFilePath;
          },
          processPartialName: function(filePath) {
            var shortFilePath = filePath.replace(/templates\//, '').replace('.hbs', '');
            return shortFilePath;
          }
      },
      compile: {
        files: {
          '/templates.js': 'templates/*.hbs'
        }
      }
    },
    
    watch: {
      ember_handlebars: {
        files: '/templates/*.hbs',
        tasks: ['ember_handlebars']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-handlebars');
 
  // Default task(s).
  grunt.registerTask('default', ['ember_handlebars']);
};