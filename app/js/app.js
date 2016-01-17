var PodlleApp = angular.module('PodlleApp', [
    'ngRoute',
    'PodlleAppControllers',
    'PodlleAppServices',
    'PodlleAppAnimations',
    'PodlleAppFilters',
    'LocalStorageModule'
]);

PodlleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/explore', {
                templateUrl: 'app/views/explore.html'
            }).
            when('/radio', {
                templateUrl: 'app/views/radio.html'
            }).
            when('/favorites', {
                templateUrl: 'app/views/favs.html'
            }).
            when('/profile', {
                templateUrl: 'app/views/profile.html'
            }).
            otherwise({

            });
    }]).run(function($rootScope,$location, localStorageService) {
    $rootScope.$on('$routeChangeSuccess', function () {

    })
});




(function() {
  'use strict';
  angular.module('fabToolbarBasicUsageDemo', ['ngMaterial'])
    .controller('AppCtrl', function($scope) {
      $scope.isOpen = false;
      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'
      };
    });
})();
