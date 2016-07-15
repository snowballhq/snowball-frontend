var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('gulp-babel')

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
  }
}

gulp.task('default', ['html', 'scss', 'js'], function () {
  gulp.watch(data.html.src, ['html'])
  gulp.watch(data.scss.src, ['scss'])
  gulp.watch(data.js.src, ['js'])
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
