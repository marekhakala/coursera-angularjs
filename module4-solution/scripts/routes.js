(function() {
  'use strict';

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state("home", { url: "/", templateUrl: "views/home.html" })
    .state("categories", { url: '/categories', templateUrl: "views/categories.html",
      controller: "CategoriesController as categoriesController", resolve: {
        categories: ["MenuDataService", function(service) {
          return service.getAllCategories().then(function(data) {
                return data.data;
          });
        }]
      }
    })
    .state("items", { url: "/category/:categoryShortName/items", templateUrl: "views/items.html",
        controller: "ItemsController as itemsController", resolve: {
          data: ["MenuDataService", '$stateParams', function(service, $stateParams) {
            return service.getItemsForCategory($stateParams.categoryShortName).then(function(data) {
                return data.data;
            });
          }]
        }
    });
  }
  angular.module("MenuApp").config(RoutesConfig);
}());
