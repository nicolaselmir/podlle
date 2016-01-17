/**
 * Created by Saeed_ElDah on 18/05/2015.
 */
var PodlleAppServices = angular.module('PodlleAppServices', ['ngResource']);

PodlleAppServices.factory('TestService', ['$resource',
    function($resource){
        return "saeed";
    }
]);
