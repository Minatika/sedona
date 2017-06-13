"use strict";

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    less: {
      style: {
        files: {
          "css/style.css": "less/style.less"
        }
      },
      build: {
        files: {
          "build/css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 2 versions"
            ]})
          ]
        },
        src: "css/*.css"
      },
      build: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 2 versions"
            ]}),
            require("css-mqpacker")({
              sort: true
            })
          ]
        },
        src: "build/css/*.css"
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "*.html",
            "css/*.css"
          ]
        },
        options: {
          server: ".",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    // публикация на GitHub Pages (будет доступен в сети по адресу http://ВАШ-НИКНЕЙМ.github.io/ВАШ-РЕПОЗИТОРИЙ/)
    'gh-pages': {
      options: {
        // какую папку считать результатом работы
        base: 'build'
      },
      src: '**/*'
},

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff, woff2}",
            "img/**",
            "js/**",
            "*.html"
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    },

    csso: {
      build: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    svgmin: {
      sumbols: {
        files: [{
          expand: true,
          src: ["build/img/*.svg"]
        }]
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/*.{png,jpg,gif}"]
        }]
      }
    }

  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "postcss",
    "csso",
    "svgmin",
    "imagemin",
    "gh-pages"
  ]);
};
