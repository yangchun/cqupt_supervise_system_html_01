angular.module("index_app").controller('undergraduateCourseCtrl', function ($scope, $http) {
    var page=1;
    //公共查询
    $scope.serach = function () {
        var params = {
            "academy": $scope.academy,
            "teacher": $scope.teacher,
            "courseNumber": $scope.courseNumber,
            "courseName": $scope.courseName,
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
    $scope.serachList=function () {
        page=1;
        $scope.serach();
    }
    $scope.previousPage=function(){
        page=page-1;
        if(page<1){
            page=1;
        }
        $scope.serach();
    }
    $scope.nextPage=function(){
        page=page+1;
        $scope.serach();
    }
    $scope.serachById=function(id){
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
    $scope.evaluation=function (id) {

        alert(id);
    }
    $scope.closeFloat=function () {
        $('.theme-popover-mask').hide();
        $('.theme-popover').slideUp(200);
    }



});