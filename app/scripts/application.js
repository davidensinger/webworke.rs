/* global ga, responsiveFootnotes, smoothScroll */

var keyboardNavigation = (function () {

  var navigationElement = function (id) {
    var element = document.getElementById('js-navigation--' + id);

    if (element) {
      var anchor = element.getAttribute('href');

      window.location.href = anchor;
      return false;
    }
  };

  return {
    navigationElement: navigationElement
  };

})();

document.onkeydown = function(event) {
  event = event || window.event;
  switch(event.which || event.keyCode) {
    case 37: // left
      keyboardNavigation.navigationElement('previous');
      break;
    case 39: // right
      keyboardNavigation.navigationElement('next');
      break;
    default: return;
  }
  /*jshint -W030 */
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
};

// Smooth scroll
smoothScroll.init();

// Responsive footnotes
responsiveFootnotes.createAsides();

// Send pageview to Google Analytics
ga('send', 'pageview');
