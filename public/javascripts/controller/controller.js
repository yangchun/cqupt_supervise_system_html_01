angular.module("index_app").controller('MainCtrl', function ($scope, $timeout) {
    $scope.clickNavButton = function () {
        console.log('click nav button');
        alert("asd");
        if ($('body').hasClass('body-small')) {
            $("body").toggleClass("mini-navbar");
            if (!$('body').hasClass('mini-navbar')) {
                // Hide menu in order to smoothly turn on when maximize menu
                $('#side-menu').hide();

                // For smoothly turn on menu
                $timeout(function () {
                    $("#page-wrapper").css("margin-left", '0');
                    $('#side-menu').fadeIn(200);
                }, 100);
            } else {
                if ($('body').hasClass('mini-navbar')) {
                    $("#page-wrapper").css("margin-left", '70px');
                    // Remove all inline style from jquery fadeIn function to reset menu state
                    $('#side-menu').removeAttr('style');
                }
            }
        }
    };
});