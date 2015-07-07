// JavaScript Document
module.exports = function(grunt){
	'use strict';
    grunt.initConfig({
        concat: {
            options: {                                       //配置
                stripBanners:true,
                banner: '/*! This is the grunt test ' +      //添加自定义的banner
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            basic: {                                         //另一个任务
                files: {                                     //另一种更简便的写法
                    'dist/css/style.css': ['css/*.css']
                }
            },
			ui: {                                         //另一个任务
                files: {                                     //另一种更简便的写法
                    'dist/css/base/ui.css': ['css/base/*.css']
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! This is uglify test - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            common: {
                files: {
                    'dist/js/common.js': ['js/common.js','js/router.js','js/view.js','js/api.js','js/fn.js','js/obj.js']
                }
            },
			lib: {
                files: {
                    'dist/js/lib.js': ['js/config.js','js/cookies.min.js','js/idcode/jquery.idcode.js','js/jquery.qrcode.js','js/qrcode.js','js/jquery-form.js','js/underscore-min.js','js/extend/slides.min.jquery.js','js/ui/core.js','js/ui/widget.js','js/ui/position.js','js/ui/menu.js','js/ui/button.js','js/ui/spinner.js','js/ui/selectmenu.js','js/ui/mouse.js','js/ui/slider.js','js/ui/datepicker.js','js/ui/datepicker-zh-CN.js','ueditor/ueditor.config.js','ueditor/ueditor.all.min.js','js/require.js','js/echarts.js']
                }
            }
        },

        watch: {
            another: {
                files: ['js/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat','uglify']);
}