'use strict';

angular.module('myApp.favorite_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/favorites', {
    templateUrl: 'app/views/favorite_view.html',
    controller: 'FavoriteViewCtrl'
  });
}])

.controller('FavoriteViewCtrl', function($scope) {
  // Default scope values
  $scope.addFavoriteForm = {}
  $scope.errorMsg = ''
  $scope.favorites = []

  function alreadyAdded () {
    var addingFav = $scope.addFavoriteForm
    return $scope.favorites.find((favorite) => {
      return (
        favorite.name === addingFav.name
        && favorite.type === addingFav.type
        && favorite.description === addingFav.description
      )
    })
  }

  function isMissingField () {
    var addingFav = $scope.addFavoriteForm
    return !addingFav.name || !addingFav.type || !addingFav.description
  }

  function runValidations () {
    var addingFav = $scope.addFavoriteForm
    if (isMissingField()) return 'Missing field'
    if (alreadyAdded()) return 'Already added'
    return
  }

  $scope.addFavorite = function () {
    var error = runValidations($scope.addFavoriteForm)

    if (!error) {
      $scope.favorites.push($scope.addFavoriteForm)
      $scope.errorMsg = ''
      $scope.addFavoriteForm = {}
      return
    }

    $scope.errorMsg = error
  }

  $scope.removeFavorite = function (removeFavorite) {
    var indexOf = $scope.favorites.indexOf(removeFavorite)
    $scope.favorites.splice(indexOf, 1)
  }
});
