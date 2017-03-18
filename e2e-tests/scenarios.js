'use strict';

describe('my app', function() {
  it('should automatically redirect to /favorites when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/favorites");
  });


  describe('favorite_view', function() {
    beforeEach(function() {
      browser.get('index.html#!/favorites');
    });

    it('should render favorite view when user navigates to /favorites', function() {
      expect(element.all(by.css('.header__title')).first().getText()).
        toMatch(/Simple Resource CRUD Form/);
    });
  });
});
