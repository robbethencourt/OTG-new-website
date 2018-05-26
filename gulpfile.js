var gulp = require("gulp");
const handlebars = require("gulp-compile-handlebars");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

const paths = {
  src: "./src/**/*",
  html: "./src/*.handlebars",
  partials: "./src/partials",
  htmlDist: "./dist",
  js: "./src/js/**/*",
  jsDist: "./dist/js/",
  css: "./src/css/**/*",
  cssDist: "./dist/css/",
  images: "./src/images/**/*",
  imagesDist: "./dist/images/",
  fonts: "./src/fonts/**/*",
  fontsDist: "./dist/fonts/"
};

// handlebars files
// convert the .handlebars files into .html files and output to the dist foler.
gulp.task("html", () => {
  return gulp
    .src(paths.html)
    .pipe(
      handlebars(
        {},
        {
          ignorePartials: true,
          batch: [paths.partials]
        }
      )
    )
    .pipe(
      rename({
        extname: ".html"
      })
    )
    .pipe(gulp.dest(paths.htmlDist))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// javaScript files
gulp.task("js", function() {
  var jsBuild = gulp.src(paths.js);
  return jsBuild.pipe(gulp.dest(paths.jsDist)).pipe(
    browserSync.reload({
      stream: true
    })
  );
});

// css files
gulp.task("css", function() {
  var cssBuild = gulp.src(paths.css);
  return cssBuild.pipe(gulp.dest(paths.cssDist)).pipe(
    browserSync.reload({
      stream: true
    })
  );
});

// browserSync allows us to reload the pages automatically when files are changed
gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
});

// run gulp watch in root of the application so gulp watches for file changes and sends them to the dist folder
gulp.task("watch", ["browserSync", "css"], function() {
  gulp.watch(paths.css, ["css"]);
  gulp.watch(paths.src, ["default"]);
  gulp.watch(paths.src, browserSync.reload);
});

// the below will run when we run gulp watch, along with Browser Sync
gulp.task("default", ["html", "js", "css"]);

// production builds below

// run the below without gulp watch, but with gulp imagea and gulp fonts. Used for production or when changing images, but don't need to rerun these task each time a change happens to a file.
// image files
gulp.task("images", function() {
  var imagesBuild = gulp.src("./src/images/**/*");
  return imagesBuild.pipe(gulp.dest("./dist/images/"));
});

// font files
gulp.task("fonts", function() {
  var fontsBuild = gulp.src("./src/fonts/**/*");
  return fontsBuild.pipe(gulp.dest("./dist/fonts/"));
});

gulp.task("build", ["html", "js", "css", "images", "fonts"]);
