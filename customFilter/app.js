(function(){
  //prima di tutto bisogna inserire la stringa di sctrict
  "use strict";

  //dobbiamo associare ad angular l'applicazione (e le dipendenze se ce ne sono)
  //quando invochiamo la funzione module, angular va a cercare nel file html
  //il tag a cui è associato ng-app. La stringa riportata nel tag e la stringa
  //inserita nella funzione module devono essere uguali.
  angular.module('CustomFiltersApp', [])
         .controller('CustomFiltersController', CustomFiltersController); //associamo poi ad angular un controller
  //usiamo inject per proteggere la variabile scope e gli eventuali filtri
  //angular.inject richiede un vettore
  CustomFiltersController.$inject = ['$scope', '$filter'];

  //definiamo la funione CustomFiltersController
  function CustomFiltersController($scope, $filter){

    var cgm = 'Bachi'

    //si possono definire alcune proprietà per la variabile scope.
    //le proprietà di questa variabile possono essere sia tipi che funzioni
    $scope.saluti = 'Ciao a tutti';
    $scope.nome = '';
    $scope.cognome = $filter('uppercase')(cgm);
    $scope.descrizione = function(){
      return 'Summa delle conoscenze su Angular';
    }
    $scope.saluta = function(){
      return 'Ciao '+$scope.nome;
    }
    $scope.filtroJs = function(){
      return $filter($scope.cognome, 'upper');
    }


  }
  }
)();
