'use strict';

angular.module('myApp.favorite_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/favorite_view', {
    templateUrl: 'favorite_view/favorite_view.html',
    controller: 'FavoriteViewCtrl'
  });
}])

.controller('FavoriteViewCtrl', function($scope) {
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
