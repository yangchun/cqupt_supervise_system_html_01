var loginApp = angular.module("loginApp", []);


loginApp.controller('loginCtrl', function ($scope, $http) {
    $scope.login=function () {
        $http({
            method: 'POST',
            params:{userName:"test",passWord:$scope.password},
            url: 'http://localhost:8080/userController/test',
        }).then(function successCallback(response) {
            window.localStorage.token=response.data.data.token;
            alert(response.data.data.token);
            console.log(response.data);
        }, function errorCallback(response) {
            // 请求失败执行代码
        });
    }
    $scope.cookie=function () {
        $http({
            headers : {'Authorization' : window.localStorage.token},
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

