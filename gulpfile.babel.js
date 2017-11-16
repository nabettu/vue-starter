'use strict';

// import
import gulp from 'gulp';
import watch from 'gulp-watch';
import pug from 'gulp-pug';
import open from 'gulp-open';
import readConfig from 'read-config';

import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.babel';
import CONFIG from './config.json';

// const
const SRC = `./${CONFIG.dev.src}`;
const HTDOCS = `./${CONFIG.dev.dist}`;
const BASE_PATH = '';
const DEST = `${HTDOCS}${BASE_PATH}`;
const ASSETS = CONFIG.dev.assets;

// html
gulp.task('pug', () => {
  const { meta } = readConfig('./config.json');
  const locals = meta;
  locals.basePath = BASE_PATH;

  return gulp.src(`${SRC}/pug/**/[!_]*.pug`)
    .pipe(pug({
      locals: locals,
      pretty: true,
      basedir: `${SRC}/pug`}))
    .pipe(gulp.dest(`${DEST}`));
});

gulp.task('html', ['pug']);

// copy

gulp.task('copy', function () {
     return gulp
         .src(`${SRC}/direct/*`)
         .pipe(gulp.dest(`${DEST}/${ASSETS}/direct`));
});

gulp.task('watch', () => {
  watch([
      `${SRC}/pug/**/*.pug`,
      './config.json'
    ], () => {
    gulp.start('pug')
    //TODO: reload on dev server
  })
  watch([`${SRC}/direct/*`], () => {
    gulp.start('copy')
  })
});

gulp.task('open', function(){
  gulp.src('.')
  .pipe(open({uri:'http://localhost:' + CONFIG.dev.port}));
});

gulp.task('webpack-dev-server', (callback) => {
  const compiler = webpack(webpackConfig);

  new webpackDevServer(compiler, {
    contentBase: CONFIG.dev.dist,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
  }).listen(CONFIG.dev.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + CONFIG.dev.port);
  });
});

gulp.task('default', ['webpack-dev-server', 'html', 'watch', 'copy', 'open']);
