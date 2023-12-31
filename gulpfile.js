import gulp from 'gulp';
import browserSync from 'browser-sync';
import gulpCssImport from 'gulp-cssimport';
import sassPkg from 'sass';
import gulpSass from 'gulp-sass';
import {deleteAsync} from 'del';
import htmlmin from 'gulp-htmlmin';
import cleanCss from 'gulp-clean-css';
import terser from 'gulp-terser';
import plumber from 'gulp-plumber';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import sourcemaps from 'gulp-sourcemaps';
import gulpImg from 'gulp-image';
import gulpWebp from 'gulp-webp';
import gulpAvif from 'gulp-avif';
import {stream as critical} from 'critical';
import gulpif from 'gulp-if';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';


const prepros = true;
let dev = false;

const sass = gulpSass(sassPkg);

// Задачи
const webpackConf = {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'eval-source-map' : false,
  optimization: {
    minimize: true,
  },
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [],
  },
};

if (!dev) {
  webpackConf.module.rules.push({
    test: /\.(js)$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader',
  });
}

export const html = () => gulp
    .src('src/**/*.html')
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());

export const style = () => {
  if (prepros) {
    return gulp
        .src('src/scss/**/*.scss')
        .pipe(gulpif(dev, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCss({
          2: {
            specialComments: 0,
          },
        }))
        .pipe(gulpif(dev, sourcemaps.write('../maps')))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
  }
  return gulp
      .src('src/css/index.css')
      .pipe(gulpif(dev, sourcemaps.init()))
      .pipe(gulpCssImport({
        extensions: ['css'],
      }))
      .pipe(autoprefixer())
      .pipe(cleanCss({
        2: {
          specialComments: 0,
        },
      }))
      .pipe(gulpif(dev, sourcemaps.write('../maps')))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
};


export const js = () => gulp
    .src('src/js/**/**.js')
    .pipe(gulpif(dev, sourcemaps.write('../maps')))
    .pipe(plumber())
    .pipe(webpackStream(webpackConf, webpack))
    .pipe(gulpif(!dev, gulp.dest('dist/js')))
    .pipe(gulpif(!dev, terser()))
    .pipe(
        rename({
          suffix: '.min',
        }),
    )
    .pipe(gulpif(dev, sourcemaps.write('../maps')))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());

export const img = () => gulp
    .src('src/img/**/*.{jpg,jpeg,png,svg,gif}')
    .pipe(gulpif(!dev, gulpImg({
      optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
      pngquant: ['--speed=1', '--force', 256],
      zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
      jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max',
        80],
      mozjpeg: ['-optimize', '-progressive'],
      gifsicle: ['--optimize'],
      svgo: true,
    })))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());

export const webp = () => gulp
    .src('src/img/**/*.{jpg,jpeg,png}')
    .pipe(gulpWebp({
      quality: 60,
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream({
      once: true,
    }));

export const avif = () => gulp
    .src('src/img/**/*.{jpg,jpeg,png}')
    .pipe(gulpAvif({
      quality: 50,
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream({
      once: true,
    }));

export const critCSS = () => gulp
    .src('dist/*.html')
    .pipe(critical({
      base: 'dist/',
      inline: true,
      css: ['dist/css/index.css'],
    }))
    .on('error', err => {
      console.err(err.message);
    })
    .pipe(gulp.dest('dist'));

export const copy = () => gulp
    .src('src/fonts/**/*',
        {
          base: 'src',
        })
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({
      once: true,
    }));

export const server = () => {
  browserSync.init({
    ui: false,
    notify: false,
    // tunnel: true,
    server: {
      baseDir: 'dist',
    },
  });

  gulp.watch('src/**/*.html', html);
  gulp.watch(prepros ? 'src/scss/**/*.scss' : 'src/css/**/*.css', style);
  gulp.watch('src/img/**/*.{jpg, jpeg, png, svg, gif}', img);
  gulp.watch('src/js/**/*.js', js);
  gulp.watch('src/fonts/**/*', copy);
  gulp.watch('src/img/**/*.{jpg, jpeg, png}', webp);
  gulp.watch('src/img/**/*.{jpg, jpeg, png}', avif);
};

export const clear = (done) => {
  deleteAsync('dist/**/*', {
    force: true,
  });
  done();
};

// Запуск
export const develop = async () => {
  dev = true;
};
export const base = gulp.parallel(html, style, js, img, avif, webp, copy);

export const build = gulp.series(clear, base, critCSS);

export default gulp.series(develop, base, server);
