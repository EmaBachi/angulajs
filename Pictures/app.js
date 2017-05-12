(function(){
  'use strict';

  angular.module('VitoApp', [])

  .controller('VitoController', VitoController);

  VitoController.$inject = ['$scope', '$filter'];

  function VitoController($scope, $filter){

    var primaStr = "prima della serata";
    var dopoStr = "dopo la serata";

    var primaImg = "prima_della_serata";
    var dopoImg = "dopo_la_serata";

    var msg = 'wow';

    $scope.descrizione = primaStr;
    $scope.immagine = primaImg;
    $scope.strButton = dopoStr;

    $scope.serata = function(){
      if($scope.descrizione == primaStr) {
        $scope.descrizione = dopoStr;
        $scope.immagine = dopoImg;
        $scope.strButton = primaStr;
      } else {
        $scope.descrizione = primaStr;
        $scope.immagine = primaImg;
        $scope.strButton = dopoStr;
      }
    }

    $scope.msg = function(){
      if($scope.descrizione == dopoStr){
        return msg;
      }
    }

  }
})();