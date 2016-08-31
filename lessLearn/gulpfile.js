var gulp=require("gulp");

var less=require("gulp-less");

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename= require("gulp-rename");

gulp.task("default",function(){
	console.log("hello world");
});

//语法检查
gulp.task("jshint",function(){
	return gulp.src("src/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter("default"));
});



gulp.task("minify",function(){
	
	 return gulp.src('src/*.js')
    .pipe(concat('build.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('build.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task("testless",function(){
	gulp.src('src/css/*.less')
		.pipe(less())
		.pipe(gulp.dest("src/css"));
	
});

//监视文件的变化
gulp.task("watch",function(){
	gulp.watch("src/css/*.less",['testless']);
	
});
