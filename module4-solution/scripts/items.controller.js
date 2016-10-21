(function() {
  'use strict';

  ItemsController.$inject = ['data'];

  function ItemsController(input) {
    this.categoryName = input.category.name;
    this.items = input.menu_items;
  }

  angular.module("MenuApp").controller("ItemsController", ItemsController);
}());
