var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('gulp-babel')
var mainBowerFiles = require('main-bower-files')

var data = {
  html: {
    src: 'src/*.html',
    dest: 'build'
  },
  scss: {
    src: 'src/scss/**/*',
    dest: 'build/stylesheets'
  },
  js: {
    src: 'src/javascripts/**/*',
    dest: 'build/javascripts'
  },
  vendor: {
    css: {
      src: mainBowerFiles('**/*.css'),
      dest: 'build/stylesheets'
    },
    js: {
      src: mainBowerFiles('**/*.js'),
      dest: 'build/javascripts'
    }
  }
}

gulp.task('default', ['html', 'scss', 'js', 'vendor-css', 'vendor-js'], function () {
  gulp.watch(data.html.src, ['html'])
  gulp.watch(data.scss.src, ['scss'])
  gulp.watch(data.js.src, ['js'])
  gulp.watch(data.vendor.css.src, ['vendor-css'])
  gulp.watch(data.vendor.js.src, ['vendor-js'])
})

gulp.task('html', function () {
  gulp.src(data.html.src)
  .pipe(gulp.dest(data.html.dest))
})

gulp.task('scss', function () {
  gulp.src(data.scss.src)
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(data.scss.dest))
})

gulp.task('js', function () {
  gulp.src(data.js.src)
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest(data.js.dest))
})

gulp.task('vendor-css', function () {
  gulp.src(data.vendor.css.src)
  .pipe(gulp.dest(data.vendor.css.dest))
})

gulp.task('vendor-js', function () {
  gulp.src(data.vendor.js.src)
  .pipe(gulp.dest(data.vendor.js.dest))
})
