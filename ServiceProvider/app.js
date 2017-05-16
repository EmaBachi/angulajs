(function(){
  'use strict';

  angular.module('ProviderApp', [])
         .controller('ShoppingListController', ShoppingListController)
         .provider('ShoppingListService', ShoppingListServiceProvider);

  ShoppingListController.$inject = ['ShoppingListService'];

  function ShoppingListController(ShoppingListService){
    var list = this;

    list.items = ShoppingListService.getItems();

    list.itemName = "";
    list.itemQuanity = "";

    list.addItem = function(){
      try{
        ShoppingListService.addItem(list.itemName, list.itemQuantity);
      } catch(error){
        list.errorMessage = error.message;
      }
    };

    list.removeItem = function(itemIndex){
      ShoppingListService.removeItem(itemIndex)
    };

  }

  function ShoppingListService(maxItems){
    var service = this;

    var items = [];

    service.addItem = function(itemName, itemQuantity){
      if(items.length < maxItems){
          var item = {
            name: itemName,
            quantity: itemQuantity
          }

          items.push(item);
        }
        else{
          throw new Error("Max items reached");
        }
    };

    service.getItems = function(){
      return items;
    };

    service.removeItem = function(itemIndex) {
      items.splice(itemIndex, 1);
    };
  }

  function ShoppingListServiceProvider(){
    var provider = this;

    provider.default = {
      maxItems: 2
    };

    provider.$get = function(){
      var service = new ShoppingListService(provider.default.maxItems);
      return service;
    };

  }

})();
