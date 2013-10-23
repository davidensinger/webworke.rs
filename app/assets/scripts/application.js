// Keyboard navigation, courtesy of Mousetrap.js (http://craig.is/killing/mice)
Mousetrap.bind('left', keyboardNavigation.bind(null, 'previous'))
Mousetrap.bind('right', keyboardNavigation.bind(null, 'next'))

function keyboardNavigation(ID) {
  var element = document.getElementById('js-navigation-' + ID);
  if (element) {
    var anchor = element.getAttribute('href');
    window.location.href = anchor;
    return false
  }
}

// Detect WebKit and add class to <html>
var isWebkit = /webkit/.test( navigator.userAgent );
var root = document.documentElement;

if (isWebkit) {
  root.className += " webkit";
  return false
}
