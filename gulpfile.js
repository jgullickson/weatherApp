const gulp = require('gulp');
const { src, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const savefile = require('gulp-savefile');

function compileMasterSass() {
    return src('./src/sass/styles.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(gulp.dest('./src/css'))
}

function saveMasterSass() {
    return src('./src/sass/styles.scss')
        .pipe(savefile())
}

function watchComponentsSass(){
    watch('./src/sass/components/*.scss', series(saveMasterSass, compileMasterSass))
} 

function watchMasterSass(){
    watch('./src/sass/styles.scss', compileMasterSass)
} 

exports.watch_sass = parallel(watchComponentsSass, watchMasterSass)