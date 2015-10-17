var path = require("path");

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        screwIE8: true,
         preserveComments: "some"
      },
      dist: {
        files: {
          "../../source/i.min.js": ["../../source/i.js"]
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.registerTask("default", ["uglify"]);
};
