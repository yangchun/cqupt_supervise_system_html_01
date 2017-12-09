angular.module('index_app',['ui.router'])
    .controller('MainCtrl',function(){

    })
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider
            .otherwise('router1');
        $stateProvider
            //本科生
            .state('undergraduate_theory_course',{
                url:'/undergraduate_theory_course',
                templateUrl:'views/undergraduate/undergraduate_theory_course.html'
            })
            .state('undergraduate_experiment_course', {
                url: "/undergraduate_experiment_course",
                templateUrl: "views/undergraduate/undergraduate_experiment_course.html",
            })
            .state('undergraduate_course_record', {
                url: "/undergraduate_course_record",
                templateUrl: "views/undergraduate/undergraduate_course_record.html",
            })
            .state('undergraduate_recorded_teacher', {
                url: "/undergraduate_recorded_teacher",
                templateUrl: "views/undergraduate/undergraduate_recorded_teacher.html",
            })
            .state('undergraduate_cache_record', {
                url: "/undergraduate_cache_record",
                templateUrl: "views/undergraduate/undergraduate_cache_record.html",
            })
            //研究生
            .state('graduate_theory_course',{
                url:'/graduate_theory_course',
                templateUrl:'views/graduate/graduate_theory_course.html'
            })
            .state('graduate_experiment_course', {
                url: "/graduate_experiment_course",
                templateUrl: "views/graduate/graduate_experiment_course.html",
            })
            .state('graduate_course_record', {
                url: "/graduate_course_record",
                templateUrl: "views/graduate/graduate_course_record.html",
            })
            .state('graduate_recorded_teacher', {
                url: "/graduate_recorded_teacher",
                templateUrl: "views/graduate/graduate_recorded_teacher.html",
            })
            .state('graduate_cache_record', {
                url: "/graduate_cache_record",
                templateUrl: "views/graduate/graduate_cache_record.html",
            })
    })