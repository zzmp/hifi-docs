module.exports = function (grunt) {
    grunt.initConfig({
		sass: {
		  dist: {
		    files: {
		      'assets/css/main.min.css': 'assets/css/main.scss'
		    }
		  }
		},
        autoprefixer: {
            dist: {
                files: {
                    'build/main.css': 'assets/css/main.min.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['assets/css/main.scss'],
                tasks: ['sass','autoprefixer']
            }
        }
    });
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Notify when a watched file is modified
	grunt.event.on('watch', function(action, filepath, target) {
	  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
	});
};