'use strict';

/**
 * @ngdoc function
 * @name fatHeartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fatHeartApp
 */
angular.module('fatHeartApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.age = 0;
    $scope.showHeart = "asdas";

    $scope.$watch(
        function() {
            return $scope.age;
        },
        function(newValue, oldValue) {
            $scope.varx  = 220  - $scope.age; 
            if($scope.varx > 0){
                $scope.minHR = $scope.varx * 0.6;
                $scope.maxHR = $scope.varx * 0.8;     
                $scope.showHeart = "asda111";
            }
        }
        );



    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
