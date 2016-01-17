var PodlleAppControllers = angular.module('PodlleAppControllers', []);

PodlleAppControllers.controller('podlleCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.first = "first";
    }
]);
