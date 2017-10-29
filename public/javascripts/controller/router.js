angular.module('index_app',['ui.router'])
    .controller('MainCtrl',function(){

    })
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider
            .otherwise('router1');
        $stateProvider
            .state('test',{
                url:'/test',
                templateUrl:'views/test.html'
            })
            .state('test1', {
                url: "/test1",
                templateUrl: "views/test1.html",
                controller: 'BatchImportThirdSkuIdCtrl',
                data: {
                    pageTitle: '批量导入商家商品编码'
                }
            })
    })