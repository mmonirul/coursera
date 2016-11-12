
(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function ($scope) {
    $scope.meal = '';
    $scope.totalMealCount = '';
    $scope.isMeal = true;

    $scope.checkMyMeal = function () {
      if ($scope.meal == '') {
        $scope.isMeal = false;
      } else {
        var myMeals = $scope.meal.replace(/[^0-9\.,^a-z\.,^A-Z\.,]/g, "").split(",");
        $scope.totalMealCount = myMeals.filter(Boolean).length;          
      }
    };
  });

})();
