const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('build', (callback) =>{
    console.log('Construyendo el sitio');
    setTimeout(() => {
        callback();
    }, 1200);  
});

gulp.task('serve', () => {
	browserSync.init({
		server: './www',
		port: 8000
	});

	gulp.watch('www/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('build', 'serve'))