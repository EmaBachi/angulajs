(function(){
  'use strict';

  angular.module('BagApp', [])
         .controller('AddController', AddController)
         .controller('ShowController', ShowController)
         .service('BagService', BagService);

  AddController.$inject = ['BagService'];
  function AddController(BagService) {
    var addController = this;

    addController.itemName = "";
    addController.quantity = "";

    addController.addItem = function(){
      BagService.addItem(addController.itemName, addController.itemQuantity);
    }
  }

  ShowController.$inject = ['BagService'];
  function ShowController(BagService) {
    var showController = this;

    showController.items = BagService.getItems();
    showController.removeItem = function(index){
      BagService.removeItem(index);
    };
  }

  function BagService() {
    var bagService = this;

    //la struttura dati è definita all'interno del service
    var items = [];

     bagService.addItem = function(itemName, itemQuantity){
      var item = {
        name: itemName,
        quantity: itemQuantity
        };
      items.push(item);
      console.log(items);
    };

    bagService.getItems = function(){
      return items;
    };

    bagService.removeItem = function(index){
      items.splice(index, 1);
    };

  }
})();
