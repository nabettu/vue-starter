'use strict';

// import
import gulp from 'gulp';
import watch from 'gulp-watch';
import pug from 'gulp-pug';
import open from 'gulp-open';

import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.babel';

// const
const SRC = './src';
const HTDOCS = './' + webpackConfig.devServer.contentBase;
const BASE_PATH = '';
const DEST = `${HTDOCS}${BASE_PATH}`;

import meta from './src/config/meta.json';

// html
gulp.task('pug', () => {
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

gulp.task('watch', () => {
  watch([`${SRC}/pug/**/*.pug`], () => {
    gulp.start('pug')
    //TODO: reload;
  })
});

gulp.task('open', function(){
  gulp.src('.')
  .pipe(open({uri:'http://localhost:' + webpackConfig.devServer.port}));
});

gulp.task('webpack-dev-server', (callback) => {
  const compiler = webpack(webpackConfig);

  new webpackDevServer(compiler, {
    contentBase: webpackConfig.devServer.contentBase,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
  }).listen(webpackConfig.devServer.port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + webpackConfig.devServer.port);
  });
});

gulp.task('default', ['webpack-dev-server', 'html', 'watch', 'open']);
