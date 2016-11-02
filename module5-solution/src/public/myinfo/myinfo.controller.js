(function () {
"use strict";
MyInfoController.$inject = ['userInfo', 'MenuService'];

function MyInfoController(userInfo, MenuService) {
  var $ctrl = this;
  $ctrl.userInfo = userInfo;

  if (userInfo !== undefined) {
    MenuService.getMenuItem(userInfo.dish).then(function(item) {
      $ctrl.menuItem = item;
    }).catch(function(error) {
      $ctrl.errorMessage = "No such menu number exists.";
    });
  }
}

angular.module('public').controller('MyInfoController', MyInfoController);

})();
