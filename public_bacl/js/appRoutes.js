// public/js/appRoutes.js
angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/',
            controller: 'MainCtrl'
        })
        .when('/myProfile', {
            templateUrl: 'views/myProfile.html',
            controller: 'ProfileCtrl'
        })
        .when('/mySkill', {
            templateUrl: 'views/mySkill.html',
            controller: 'SkillCtrl'
        })
        // nerds page that will use the NerdController
        .when('/myFriend', {
            templateUrl: 'views/myFriend.html',
            controller: 'FriendCtrl'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);