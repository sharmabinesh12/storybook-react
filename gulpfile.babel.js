const { series, task, watch, src, dest } = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

function transformBabel() {
  return src('src/**/*.js', {ignore: ['src/index.js', 'src/docs/**/*']})
    .pipe(babel())
    .pipe(dest('dist'));
}

function transformEbEntry() {
  return src('src/eb-entry.js')
    .pipe(babel())
    .pipe(rename('index.js'))
    .pipe(dest('dist/'));
}

function transformSass() {
  return src('src/assets/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(dest('dist/assets/css/'));
}

function transformImage() {
  return src('src/assets/img/**/*')
    .pipe(imagemin())
    .pipe(dest('dist/assets/img/'));
}

task('watch', function(){
	watch(['src/**/*', '!src/docs/**/*'], series(transformBabel, transformSass, transformImage, transformEbEntry));
});

task('default', series(transformBabel, transformImage, transformEbEntry, transformSass));
