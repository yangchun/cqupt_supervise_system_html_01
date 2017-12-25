/**
 * Created by Administrator on 2017/12/25 0025.
 */
angular.module("index_app").controller('undergraduateExperimentCtrl', function ($scope, $http) {
    var page=1;
    //公共查询
    $scope.serachExperiment = function () {
        var params = {
            "academy": $scope.academy,
            "teacher": $scope.teacher,
            "courseNumber": $scope.courseNumber,
            "courseName": $scope.courseName,
            "courseType":"实验及实践",
            "page":page
        };
        $http({
            method: 'POST',
            withCredentials: true,
            crossDomain: true,
            params: params,
            url: 'http://localhost:8080/courseController/getUndergraduateCourse',
        }).then(function successCallback(response) {
            if (response.data.code == 1) {
                $scope.courseList=response.data.data;
            }
        }, function errorCallback(response) {
            // 请求失败执行代码
            alert("服务端未知异常！");
        });
    };
    //查询课程列表
    $scope.serachExperimentList=function () {
        page=1;
        $scope.serachExperiment();
    }
    $scope.previousExperimentPage=function(){
        page=page-1;
        if(page<1){
            page=1;
        }
        $scope.serachExperiment();
    }
    $scope.nextExperimentPage=function(){
        page=page+1;
        $scope.serachExperiment();
    }
    $scope.serachExperimentById=function(id){
        $http({
            method: 'GET',
            withCredentials: true,
            crossDomain: true,
            params: {"id":id},
            url: 'http://localhost:8080/courseController/getUndergraduateCourseById',
        }).then(function successCallback(response) {
            if (response.data.code == 1) {
                $scope.courseInfo=response.data.data;
            }
        }, function errorCallback(response) {
            // 请求失败执行代码
            alert("服务端未知异常！");
        });
        //打开浮动窗口
        $('.theme-popover-mask').show();
        $('.theme-popover-mask').height($(document).height());
        $('.theme-popover').slideDown(200);

    }
    $scope.evaluationExperiment=function (id) {

        alert(id);
    }
    $scope.closeExperimentFloat=function () {
        $('.theme-popover-mask').hide();
        $('.theme-popover').slideUp(200);
    }



});