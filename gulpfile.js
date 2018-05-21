var gulp 		= require ( 'gulp' );
var stylus		= require ( 'gulp-stylus' );
var uglifycss 	= require( 'gulp-uglifycss' );
var prefixer	= require( 'gulp-autoprefixer');
var sourcemaps	= require( 'gulp-sourcemaps' );
var useref 		= require('gulp-useref');
var concatCss 	= require('gulp-concat-css');
var pug 		= require( 'gulp-pug' );
var gulpif 		= require('gulp-if');
var browserSync	= require('browser-sync').create();


var config = { 
	
	// arquivos que o gulp espera por moficação
	assistir 	: [ './styl/**/*.styl',  './lib/**/*.styl', './pug/**/*.pug'],
	
	srcStylus	: './styl/*.styl',
	
	destCSS 	: './public/css/',
	distCSS 	: './dist/css',

	distJS 		: './dist/js',

	disHtml		:  './dist',

	pugFolfer	: './pug/*.pug',
	pugDes		: './public'

}

gulp.task('pug', function(){
	return gulp.src(config.pugFolfer)
			.pipe(pug({
				pretty: true
			}))
			.pipe(gulp.dest(config.pugDes));
});
/** 
	*Salva os arquivos .styl na pasta /css
	usage: no promt de comando gulp stylus
*/
gulp.task( 'stylus', function(){
	
	return gulp.src(config.srcStylus)
			.pipe(sourcemaps.init())
			.pipe( stylus() )
			.pipe(prefixer())
			.pipe(sourcemaps.write('./maps'))
			.pipe( gulp.dest( config.destCSS ) );	
});

gulp.task('stylusLib', function(){
		// arquivos de terceiros
	return 	gulp.src('lib/*.styl')
			.pipe( stylus() )
			.pipe( gulp.dest( config.destCSS ) );
})


/** 
	*A cada modificação ele atualiza o arquivos css de  acordo com os *.styl
	usage: no promt de comando gulp stylus:watch
*/
gulp.task( 'stylus:w', function(){

	gulp.watch(config.assistir, [ 'stylus','stylusLib' , 'pug' ] );


});

/** 
	*Minimiza o tamanho do CSS
*/
gulp.task('finish',['finishCSS'], function () {

    return gulp.src( config.pugDes + '/*.html')
		.pipe(useref())
		.pipe(gulpif('*.css', concatCss( "all.biz.min.css" ) ) )		
		.pipe( gulpif('*.css', uglifycss()) )
		.pipe(gulp.dest( config.disHtml ));
		
});

gulp.task('finishCSS', function () {
	return gulp.src(config.destCSS + '/*.css')
	  .pipe(concatCss( "all.biz.min.css" ) )
	  .pipe( uglifycss() )
	  .pipe(gulp.dest( config.distCSS ));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('reload', ['stylus', 'stylusLib', 'pug'], function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('default', ['stylus', 'stylusLib', 'pug'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch(config.assistir, ['reload']);
});