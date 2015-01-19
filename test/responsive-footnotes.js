/* global casper, responsiveFootnotes */

exports.responsiveFootnotesInit = function() {

  var config = {
    url: 'http://localhost:3000/neville-wheezy-norris/'
  };

  casper.test.begin('Testing responsive footnotes', 8, function suite(test) {
    test.info('⌚️ Loading ' + config.url + '…');

    casper.start(config.url, function() {
      this.viewport(1024, 768);
      test.info('⌚️ Resizing viewport to by 1024px x 768px…');
    });

    casper.then(function() {
      test.assertElementCount('.aside', 4, 'Four .aside elements exist.');
      test.assertElementCount('.aside-marker', 2, 'Two .aside-marker elements exist.');
      test.assertElementCount('.footnotes-link--wrapper', 4, 'Four .footnotes-link--wrapper elements exist.');
      test.assertNotVisible('.aside-marker', 'Both .aside-marker elements aren’t visible.');
      test.assertNotVisible('#js-footnotes', 'The #js-footnotes element at the bottom of the profile isn’t visible either.');
      this.viewport(567, 768);
      test.info('⌚️ Resizing viewport to by 567px x 768px…');
    });

    casper.then(function() {
      test.assertVisible('.aside-marker', 'Both .aside-marker elements are now visible.');
      test.assertVisible('#js-footnotes', 'The #js-footnotes element at the bottom of the profile is now visible.');
      test.assertNotVisible('.aside-marker + .aside', 'Both .aside-marker + .aside elements aren’t visible.');
    });

    casper.run(function() {
      test.done();
    });
  });
};
