(function() {
  'use strict';

  CategoriesController.$inject = ['categories', '$rootScope'];

  function CategoriesController(categories, $rootScope) {
    this.categories = categories;
  }

  angular.module("MenuApp").controller("CategoriesController", CategoriesController);
}());
