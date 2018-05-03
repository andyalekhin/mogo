'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');

const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

const browserSync = require('browser-sync');

gulp.task('views', () => 
    gulp.src('src/html/*.html')
        .pipe(plumber())
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream())
);

gulp.task('styles', () =>
    gulp.src('src/scss/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream())
);

gulp.task('scripts', () =>
    gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        'node_modules/masonry-layout/dist/masonry.pkgd.js',
        'node_modules/imagesloaded/imagesloaded.pkgd.js',
        'src/js/main.js'
    ])
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/js'))
		.pipe(browserSync.stream())
);

gulp.task('images', () =>
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
        .pipe(browserSync.stream())
);

gulp.task('fonts', () =>
    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('public/fonts'))
);

gulp.task('browserSync', () => 
    browserSync.init({
        server: {
            baseDir: 'public'
        }
    })
);

gulp.task('watch', function(){
    gulp.watch('src/html/**/*.html', ['views']);
    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/img/**/*', ['images']);
});

gulp.task('default', ['views', 'styles', 'scripts', 'images', 'fonts']);
gulp.task('dev', ['default', 'browserSync', 'watch']);
