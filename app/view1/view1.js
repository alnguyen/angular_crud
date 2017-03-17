'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
  $scope.addFavoriteForm = {}
  $scope.favorites = [
    {name: 'Myrcenary', type: 'Beer', description: 'Best Double IPA Ever'}
  ]

  $scope.addFavorite = function () {
    $scope.favorites.push($scope.addFavoriteForm)
    $scope.addFavoriteForm = {}
  }

  $scope.removeFavorite = function (removeFavorite) {
    $scope.favorites = $scope.favorites.filter((favorite) => {
      removeFavorite !== favorite
    })
  }
});
