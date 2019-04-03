const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');    //监测文件变化
const rollup = require('gulp-rollup');    //代码流清洗
const entry = "./src/server/**/*.js";
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
      input: "./src/server/config/index.js"
    }))
    .pipe(gulp.dest('dist'));
}
//代码检查
function buildLint() {

}
let build = gulp.series(buildDev);
if(process.env.NODE_ENV == "production") {
  build = gulp.series(buildPro,buildConfig);
}
if (process.env.NODE_ENV == "lint") {
  build = gulp.series(buildLint);
}
gulp.task('default', build);