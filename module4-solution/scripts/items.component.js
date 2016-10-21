(function() {
  'use strict';

  angular.module("MenuApp")
  .component("menuItem", { templateUrl: "views/item.html", bindings: { item: "<" }});
}());
