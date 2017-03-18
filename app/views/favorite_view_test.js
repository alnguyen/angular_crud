'use strict';

describe('myApp.favorite_view module', function() {
  beforeEach(module('myApp.favorite_view'));

  describe('favorites controller', function(){
    var scope, content
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new()
      content = $controller('FavoriteViewCtrl', {$scope: scope})
    }))

    it('should be defined', function () {
      expect(content).toBeDefined();
    })

    it('should initialize with empty favorites', function () {
      expect(scope.favorites).toEqual([]);
    })

    it('adds to favorites list', function () {
      var addFavorite = {name: 'name', type: 'type', description: 'description'}
      var addFavorite2 = {name: 'hello', type: 'phrase', description: 'world'}
      scope.addFavoriteForm = addFavorite
      scope.addFavorite()
      expect(scope.addFavoriteForm).toEqual({})
      expect(scope.favorites.length).toEqual(1)
      expect(scope.favorites).toContain(addFavorite)
      scope.addFavoriteForm = addFavorite2
      scope.addFavorite()
      expect(scope.addFavoriteForm).toEqual({})
      expect(scope.favorites.length).toEqual(2)
      expect(scope.favorites).toContain(addFavorite)
      expect(scope.favorites).toContain(addFavorite2)
    })

    it('removes from favorites list', function () {
      var addFavorite = {name: 'name', type: 'type', description: 'description'}
      var addFavorite2 = {name: 'hello', type: 'phrase', description: 'world'}
      scope.addFavoriteForm = addFavorite
      scope.addFavorite()
      scope.addFavoriteForm = addFavorite2
      scope.addFavorite()
      expect(scope.favorites.length).toEqual(2)
      scope.removeFavorite(addFavorite)
      expect(scope.favorites.length).toEqual(1)
      expect(scope.favorites).toContain(addFavorite2)
      scope.removeFavorite(addFavorite2)
      expect(scope.favorites.length).toEqual(0)
    })

    it('sets errorMsg to missing field for missing name', function () {
      var addFavorite = {name: '', type: 'type', description: 'description'}
      scope.addFavoriteForm = addFavorite
      scope.addFavorite()
      expect(scope.errorMsg).toEqual('Missing field')
    })

    it('sets errorMsg to missing field for missing type', function () {
      var addFavorite = {name: 'name', type: '', description: 'description'}
      scope.addFavoriteForm = addFavorite
      scope.addFavorite()
      expect(scope.errorMsg).toEqual('Missing field')
    })

    it('sets errorMsg to missing field for missing description', function () {
      var addFavorite = {name: 'name', type: 'type', description: ''}
      scope.addFavoriteForm = addFavorite
      scope.addFavorite()
      expect(scope.errorMsg).toEqual('Missing field')
    })

    it('sets errorMsg to "Already added" for already added favorite', function () {
      var addFavorite = {name: 'a', type: 'a', description: 'a'}
      var addFavorite2 = {name: 'b', type: 'b', description: 'b'}

      scope.addFavoriteForm = addFavorite
      scope.addFavorite()
      expect(scope.errorMsg).toEqual('')
      scope.addFavoriteForm = addFavorite2
      scope.addFavorite()
      expect(scope.errorMsg).toEqual('')
      scope.addFavoriteForm = addFavorite
      scope.addFavorite()
      expect(scope.errorMsg).toEqual('Already added')
    })
  });
});
