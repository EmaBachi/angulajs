(function(){
  'use strict';

  var shoppingListOne = ['vino', 'verdura', 'latte', 'pesce'];

  var shoppingListTwo = [
    {
      name: 'vino',
      quantity: 2
    },
    {
      name: 'verdura',
      quantity: 3
    },
    {
      name: 'latte',
      quantity: 4
    }
  ];

  angular.module('OnlineStoreApp', [])
         .controller('OnlineStoreController', OnlineStoreController);

  OnlineStoreController.$inject = ['$scope'];
  function OnlineStoreController($scope){
    $scope.shoppingListOne = shoppingListOne;
    $scope.shoppingListTwo = shoppingListTwo;

    $scope.addItem = function(){
      var item = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity
      };
      $scope.shoppingListTwo.push(item);
    }
  }

})();
