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
