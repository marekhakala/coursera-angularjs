(function() {
  'use strict';

    ToBuyController.$inject = ["ShoppingCart"];
    AlreadyBoughtController.$inject = ["ShoppingCart"];

    function ToBuyController(list) {
      this.buyList = list.getBuyList();

      this.add = function(index) {
        list.addBought(index);
      }

      this.isEmpty = function() {
        return (this.buyList.length == 0);
      }
    };

    function AlreadyBoughtController(list) {
      this.boughtList = list.getBoughtList();

      this.isEmpty = function() {
        return (this.boughtList.length == 0);
      }
    }

    function ShoppingCartService() {
      var service = this;
      var boughtList = [];

      var buyList = [ { name: "Cookies", quantity: 15 },
      { name: "Chocolates", quantity: 60 }, { name: "Soda drinks", quantity: 20 },
      { name: "Bananas", quantity: 10 }, { name: "Apples", quantity: 4 } ];

      service.addBought = function(index) {
        boughtList.unshift(buyList.splice(index, 1)[0]);
      }

      service.getBuyList = function() {
        return buyList;
      };

      service.getBoughtList = function() {
        return boughtList;
      };
    }

    angular.module('ShoppingCartList', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingCart', ShoppingCartService);
}());
