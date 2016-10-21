(function() {
  'use strict';

  MenuDataService.$inject = ['$http', 'apiUrl', 'categoriesPath', 'itemsPath'];

  function MenuDataService($http, apiUrl, categoriesPath, itemsPath) {
    var service = this;

    this.getAllCategories = function() {
      return $http({ url: apiUrl + categoriesPath });
    }

    this.getItemsForCategory = function(categoryShortName) {
      return $http({ url: apiUrl + itemsPath, params: { category: categoryShortName } });
    }
  }

  angular.module("MenuApp").service("MenuDataService", MenuDataService)
    .constant("apiUrl", "https://davids-restaurant.herokuapp.com")
    .constant("categoriesPath", "/categories.json")
    .constant("itemsPath", "/menu_items.json");
}());
