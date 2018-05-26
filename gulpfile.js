var gulp = require("gulp");
const handlebars = require("gulp-compile-handlebars");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const deporder = require("gulp-deporder");
const stripdebug = require("gulp-strip-debug");
const uglify = require("gulp-uglify");

gulp.task("html", () => {
  return gulp
    .src("./src/*.handlebars")
    .pipe(
      handlebars(
        {},
        {
          ignorePartials: true,
          batch: ["./src/partials"]
        }
      )
    )
    .pipe(
      rename({
        extname: ".html"
      })
    )
    .pipe(gulp.dest("./dist"));
});

gulp.task("js", function() {
  var jsBuild = gulp.src("./src/js/**/*");

  /*** below code used if we want to combine all js files into one and minify them. Consider for production at end of project ***/
  //   .pipe(deporder())
  //   .pipe(concat("main.js"));
  //
  // if (!devBuild) {
  //   jsBuild = jsBuild.pipe(stripdebug()).pipe(uglify());
  // }

  return jsBuild.pipe(gulp.dest("./dist/js/"));
});

gulp.task("css", function() {
  /*** do I want to minify and uglify the css as well for production? ***/
  var cssBuild = gulp.src("./src/css/**/*");
  return cssBuild.pipe(gulp.dest("./dist/css/"));
});

gulp.task("images", function() {
  /*** do I want to minify and uglify the css as well for production? ***/
  var imagesBuild = gulp.src("./src/images/**/*");
  return imagesBuild.pipe(gulp.dest("./dist/images/"));
});

gulp.task("fonts", function() {
  /*** do I want to minify and uglify the css as well for production? ***/
  var fontsBuild = gulp.src("./src/fonts/**/*");
  return fontsBuild.pipe(gulp.dest("./dist/fonts/"));
});

gulp.task("default", ["html", "js", "css", "images", "fonts"]);
