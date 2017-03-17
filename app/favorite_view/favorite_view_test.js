'use strict';

describe('myApp.favorites module', function() {

  beforeEach(module('myApp.favorites'));

  describe('favorites controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var favoriteViewCtrl = $controller('FavoriteViewCtrl');
      expect(favoriteViewCtrl).toBeDefined();
    }));

  });
});
