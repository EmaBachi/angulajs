(function(){
  'use strict';

  //resgistration
  angular.module('FactoryApp', [])
         .controller('ShoppingListOneController', ShoppingListOneController)
         .controller('ShoppingListTwoController', ShoppingListTwoController)
         .factory('ShoppingListFactory', ShoppingListFactory);

  //first shopping list
  ShoppingListOneController.$inject = ['ShoppingListFactory'];

  function ShoppingListOneController (ShoppingListFactory){
    var listOne = this;

    var service = ShoppingListFactory();

    listOne.items =  service.getItems();
    listOne.itemName = "";
    listOne.itemQuantity = "";

    listOne.addItem = function(){
      service.addItem(listOne.itemName, listOne.itemQuantity);
    };

    listOne.removeItem = function(itemIndex){
      service.removeItem(itemIndex);
    };
  }

  //second shopping list
  ShoppingListTwoController.$inject = ['ShoppingListFactory'];

  function ShoppingListTwoController (ShoppingListFactory){
    var listTwo = this;

    var service = ShoppingListFactory(3);

    listTwo.items = service.getItems();
    listTwo.itemName = "";
    listTwo.itemQuantity = "";

    listTwo.addItem = function(){
      try{
        service.addItem(listTwo.itemName, listTwo.itemQuantity);
      } catch(Error){
        return Error;
      }

    };

    listTwo.removeItem = function(itemIndex){
      service.removeItem(itemIndex);
    }
  }

  //the factory function that return the service function
  function ShoppingListFactory() {
    var factory = function(maxItems){
        return new ShoppingListService(maxItems);
    };

    return factory;
  }

  //the service function
  function ShoppingListService(maxItems) {
    var service = this;

    var items = [];

    service.addItem = function(itemName, itemQuantity) {
      if(maxItems === undefined
        || (maxItems !==undefined && items.length < maxItems)){
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

    service.removeItem = function(itemIndex){
      items.splice(itemIndex, 1);
    };

  }

})();
