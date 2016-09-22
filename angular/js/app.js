(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope){

    $scope.message = "";
    $scope.items = "";

    $scope.checkMeal = function(){
      $scope.message = "";

      if ($scope.items.length == 0){
        $scope.message = "Please enter data first";
        return;
      };

      if ($scope.items.split(",").length <= 3) {
        $scope.message = "Enjoy!";
        return;
      }
      else {
        $scope.message = "Too much!";
        return;
        }
    }

}

})();
