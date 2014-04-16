/* global smoothScroll */

// Keyboard navigation
function keyboardNavigation(ID) {
  var element = document.getElementById('js-navigation--' + ID);
  if (element) {
    element.className = element.className + ' is-active';
    var anchor = element.getAttribute('href');
    window.location.href = anchor;
    return false;
  }
}

document.onkeydown = function(e) {
  e = e || window.event;
  switch(e.which || e.keyCode) {
    case 37: // left
      keyboardNavigation('previous');
      break;
    case 39: // right
      keyboardNavigation('next');
      break;
    default: return;
  }
  e.preventDefault();
};

// Smooth Scroll
smoothScroll.init();

// Responsive footnotes
var responsiveFootnotes = (function () {
  var s; // private alias to settings

  return {
    settings: {
      asideMarkers: document.getElementsByClassName('aside-marker'),
      footnotes: document.getElementById('js-footnotes')
    },

    init: function() {
      s = this.settings;
      this.createAsides();
    },

    createAsides: function() {
      var markerArray = s.asideMarkers;
      var footnoteArray = s.footnotes.children;

      if (footnoteArray.length === markerArray.length) {
        for (var i = 0, n = markerArray.length; i < n; i++) {
          var child = footnoteArray[i];

          markerArray[i].insertAdjacentHTML('afterend', child.innerHTML);
        }
      }
    }
  };
})();

document.addEventListener('DOMContentLoaded', function(){
  responsiveFootnotes.init();
});
