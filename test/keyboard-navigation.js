/* global casper, keyboardNavigation */

exports.keyboardNavigationInit = function() {

  var config = {
    url: 'http://localhost:3000'
  };

  casper.test.begin('Testing keyboard navigation', 7, function suite(test) {
    test.info('⌚️ Loading ' + config.url + '…');

    casper.start(config.url, function() {
      test.assertType(keyboardNavigation, 'object', 'The keyboardNavigation object exists. Hooray!');
      test.assertDoesntExist('#js-navigation--next', 'The element #js-navigation--next doesn’t exist because we’re on the homepage, which displays the most recent profile.');
      test.assertExists('#js-navigation--previous', 'The element #js-navigation--previous does exist because it’s needed to navigate to the second most recent profile.');
      this.sendKeys('body', casper.page.event.key.Left);
      test.info('⌚️ Loading the second most recent profile…');
    });

    casper.then(function() {
      this.echo('The page title is: ' + this.evaluate(function() {
        return document.title;
      }), 'PARAMETER');
      test.assertExists('#js-navigation--next', 'The element #js-navigation--next exists because there is now a more recent profile to navigate to.');
      this.sendKeys('body', casper.page.event.key.Right);
      test.info('⌚️ Loading the most recent profile…');
    });

    casper.then(function() {
      this.echo('The page title is: ' + this.evaluate(function() {
        return document.title;
      }), 'PARAMETER');
      this.open(config.url + '/about/');
      test.info('⌚️ Loading the About page…');
    });

    casper.then(function() {
      test.assertUrlMatch(config.url + '/about', 'The URL matches /about');
      test.assertDoesntExist('#js-navigation--next', 'The element #js-navigation--next doesn’t exist because we’re on a page template.');
      test.assertDoesntExist('#js-navigation--previous', 'The element #js-navigation--previous doesn’t exist because we’re on a page template.');
    });

    casper.run(function() {
      test.done();
    });
  });
};
