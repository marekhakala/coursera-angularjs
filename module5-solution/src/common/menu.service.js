(function () {
  "use strict";

  angular.module('common')
  .service('MenuService', MenuService);

  MenuService.$inject = ['$q','$http', 'ApiPath'];
  function MenuService($q, $http, ApiPath) {
    var service = this;
    var userInfo;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };

    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = {'category': category};
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

    service.getMenuItem = function (item) {
      return $http.get(ApiPath + '/menu_items/' + item.toUpperCase() + ".json").then(function (response) {
        return response.data;
      });
    };

    service.getUserInfo = function() {
      return userInfo;
    };

    service.saveUserInfo = function(firstname, lastname, email, phone, dish) {
      $q.all([firstname, lastname, email, phone, dish]).then(function(response) {
         userInfo = { "firstname": firstname, "lastname": lastname,
          "email": email, "phone": phone, "dish": dish };
      });
    };
  }
})();
