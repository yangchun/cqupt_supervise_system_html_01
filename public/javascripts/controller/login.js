var loginApp = angular.module("loginApp", []);


loginApp.controller('loginCtrl', function ($scope, $http) {
    $scope.login=function () {
        $http({
            method: 'POST',
            withCredentials: true,
            crossDomain: true,
            params:{userName:"test",passWord:$scope.password},
            url: 'http://localhost:8080/userController/login',
        }).then(function successCallback(response) {
            if(response.data.code==1){
                location.href="http://localhost:3000/index"
            }
        }, function errorCallback(response) {
            // 请求失败执行代码
            alert("服务端未知异常！");
        });
    }
    $scope.cookie=function () {
        $http({
            headers : {'Authorization' : window.localStorage.token},
            withCredentials: true,
            crossDomain: true,
            method: 'GET',
            url: 'http://localhost:8080/userController/getCookies',
        }).then(function successCallback(response) {
            alert("asdasd");
            alert(response.data.data);
            console.log(response.data);
        }, function errorCallback(response) {
            // 请求失败执行代码
        });
    }


});

