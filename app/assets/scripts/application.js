function leftArrowPressed() {
  var element = document.getElementById('js-navigation-previous');
  var anchor = element.getAttribute('href');
  window.location.href = anchor;
 }

function rightArrowPressed() {
  var element = document.getElementById('js-navigation-next');
  var anchor = element.getAttribute('href');
  window.location.href = anchor;
}

document.onkeydown = function(event) {
  event = event || window.event;
  switch (event.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
  }
};
