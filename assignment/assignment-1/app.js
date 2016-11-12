
(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', function ($scope) {
    $scope.meal = "";
    $scope.totalMealCount = '';
    $scope.myMeals = '';

    $scope.checkMyMeal = function () {
      var totalMealItems = lunchItems($scope.meal);
      var myMeals = totalMealItems.split(",");
      $scope.myMeals = myMeals;
      $scope.totalMealCount = myMeals.length;
    };

    function lunchItems(string) {
        var myMeal = string.replace(/^\s\s*/, '')
                            .replace(/\s\s*$/, '')
                            .replace(/[\s,]+/g, ',');
                    return myMeal;
    }
  });

})();
