(function() {
  'use strict';

  angular.module("MenuApp")
  .component("categoryItem", { templateUrl: "views/category.html", bindings: { "item": "<" }});
}());
