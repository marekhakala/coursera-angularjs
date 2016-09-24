function LunchController($scope) {
  $scope.outputMessage = '';

  $scope.foodsCount = function() {
    var foods = $scope.foodList;

    if (foods) {
      var foodLength = 0;
      var foods = $scope.foodList.split(',');

      $scope.inputStyle = 'ok';
      $scope.textColor = 'green';

      angular.forEach(foods, function(food) {
        if (food && food.trim().length > 0) foodLength++;
      });

      if (foodLength === 0) {
        $scope.textColor = 'red';
        $scope.inputStyle = 'error';
        $scope.outputMessage = "Please enter the text without white spaces!";
      } else if (foodLength > 3)
        $scope.outputMessage = "Too much!";
      else
        $scope.outputMessage = "Enjoy!";
    } else {
      $scope.inputStyle = 'error';
      $scope.textColor = 'red';
      $scope.outputMessage = "Please enter the text first!";
    }
  }
}

angular.module("LunchChecker", []).controller('LunchController', ['$scope', LunchController]);
