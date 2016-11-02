(function(){
  "use strict";
  SignUpController.$inject = ['MenuService'];

  function SignUpController(MenuService) {
    var $ctrl = this;

    this.infoMessage = "";
    this.errorMessage = "";
    
    this.firstname = "";
    this.lastname = "";
    this.phone = "";
    this.email = "";
    this.dish = "";

    this.validateDish = function() {
      MenuService.getMenuItem($ctrl.dish).then(function(data) {
        $ctrl.errorMessage = "";
        $ctrl.infoMessage = "";
      }).catch(function(err) {
        $ctrl.errorMessage = "No such menu number exists.";
        $ctrl.infoMessage = "";
      });
    }

    this.save = function() {
      MenuService.getMenuItem($ctrl.dish).then(function(data) {
        MenuService.saveUserInfo($ctrl.firstname, $ctrl.lastname, $ctrl.email, $ctrl.phone, $ctrl.dish)
        $ctrl.errorMessage = "";
        $ctrl.infoMessage = "Your information has been saved!";
      }).catch(function(err) {
        $ctrl.errorMessage = "No such menu number exists.";
        $ctrl.infoMessage = "";
      });
    }
  }

  angular.module('public').controller('SignUpController', SignUpController);
})();
