(function() {
  'use strict';

  SearchService.$inject = ['$http'];
  MainController.$inject = ['SearchService'];

  function MainController(searchService) {
    var controller = this;
    this.dataLoaded = false;
    this.dataLoading = false;
    this.searchDescription = "";

    this.searchMenu = function(searchDescription) {
      if(!controller.dataLoaded) {
        controller.dataLoading = true;
        searchService.getMenuItems().then(function(response) {
          controller.dataLoading = false;
          var items = searchService.searchMenu(searchDescription, response.data.menu_items);

          if(searchDescription.length == 0 || items.length == 0) {
            controller.errorMessage = "Nothing found.";
          } else {
            controller.items = items;
            controller.errorMessage = "";
          }

          controller.dataLoaded = true;
        }).catch(function() {
          controller.errorMessage = "Internet connection not working.";
          controller.dataLoading = false;
        });
      } else {
        var items = searchService.searchMenu(searchDescription);

        if(searchDescription.length == 0 || items.length == 0) {
          controller.errorMessage = "Nothing found.";
          controller.items = [];
        } else {
          controller.items = items;
          controller.errorMessage = "";
        }
      }
    };

    this.removeItem = function(index) {
      searchService.removeItem(index);
    }
  }

  function MenuItemDirectiveController() {
    var ctrl = this;
  }

  function MenuItemDirective() {
    return { restrict: "E", templateUrl: "views/item.html",
      scope: { item: "<", index: "<", onRemove: "&" }, controller: MenuItemDirectiveController,
      bindToController: true, controllerAs: "menuItemCtrl" };
  }

  function SearchService($http) {
    var service = this;
    var menuItems = [];
    var matchingItems;

    service.getMenuItems = function() {
      return $http({ url: "https://davids-restaurant.herokuapp.com/menu_items.json" });
    };

    service.searchMenu = function(searchDescription, items) {
      matchingItems = [];

      if(items != null) {
        items.forEach(function(item) {
          menuItems.push(item);
        });
      }

      menuItems.forEach(function(item) {
        if(item.description.indexOf(searchDescription.toLowerCase()) > -1)
        matchingItems.push(item);
      });

      return matchingItems;
    };

    service.removeItem = function(index) {
      matchingItems.splice(index, 1);
    }
  }

  angular.module('RestaurantMenuSearch', [])
    .controller('MainController', MainController)
    .controller('MenuItemDirectiveController', MenuItemDirectiveController)
    .directive('menuItem', MenuItemDirective)
    .service('SearchService', SearchService);
}());
