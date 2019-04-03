const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');    //监测文件变化
const rollup = require('gulp-rollup');    //代码流清洗
const replace = require('rollup-plugin-replace')
const entry = "./src/server/**/*.js";
const eslint = require('gulp-eslint');
//开发环境
function buildDev() {
  return watch(entry,{ignoreInitial: false},function() {
    gulp.src(entry)
    .pipe(babel({
      babelrc: false,
      "plugins": [
          ["transform-es2015-modules-commonjs"]
        ]
    }))
    .pipe(gulp.dest('dist'));
  });
}
//上线环境
function buildPro() {
  return gulp.src(entry)
    .pipe(babel({
      babelrc: false,
      ignore: ["./src/server/config/*.js"],
      "plugins": [
          ["transform-es2015-modules-commonjs"]
        ]
    }))
    .pipe(gulp.dest('dist'));
}
//清洗环境
function buildConfig() {
  return gulp.src(entry)
    .pipe(rollup({
      output: {
        format: "cjs"
      },
      plugins: [
        replace({
          "process.env.NODE_DEV": JSON.stringify('production')
        })
      ],
      input: "./src/server/config/index.js"
    }))
    .pipe(gulp.dest('dist'));
}
//代码检查
function buildLint() {
  return gulp.src(entry)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}
let build = gulp.series(buildDev);
if(process.env.NODE_DEV == "production") {
  build = gulp.series(buildPro,buildConfig);
}
if (process.env.NODE_DEV == "lint") {
  build = gulp.series(buildLint);
}
gulp.task('default', build);