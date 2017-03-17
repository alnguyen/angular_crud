'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /favorites when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/favorites");
  });


  describe('favorite_view', function() {

    beforeEach(function() {
      browser.get('index.html#!/favorites');
    });


    xit('should render favorite view when user navigates to /favorites', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });
});
