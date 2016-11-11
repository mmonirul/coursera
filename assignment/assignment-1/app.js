
(function () {
  'use strict';

  angular.module('MealChecker', [])
  .controller('MealCheckController', function ($scope) {
    $scope.meal = "";
    $scope.totalMealCount = '';
    $scope.myMeals = '';

    $scope.checkMyMeal = function () {
      var totalMealItems = calculatNumericForString($scope.meal);
      var myMeals = totalMealItems.split(",");
      $scope.myMeals = myMeals;
      $scope.totalMealCount = myMeals.length;
    };

    function calculatNumericForString(string) {
        var myMeal = string.replace(/^\s\s*/, '')
                            .replace(/\s\s*$/, '')
                            .replace(/[\s,]+/g, ',');
                    return myMeal;
    }
  });

})();
