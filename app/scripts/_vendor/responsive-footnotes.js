var responsiveFootnotes = (function () {

  var asideMarkers = document.getElementsByClassName('aside-marker');
  var footnoteContainer =  document.getElementById('js-footnotes');

  var createAsides = function () {

    // Check that the footnotes and aside markers exist
    if (footnoteContainer != null && asideMarkers != null) {
      var footnotes = footnoteContainer.children;

      // Ensure that we have an equal number of footnotes and aside markers
      if (footnotes.length === asideMarkers.length) {
        for (var i = 0, n = asideMarkers.length; i < n; i++) {
          asideMarkers[i].insertAdjacentHTML('afterend', footnotes[i].innerHTML);
        }
      }
    }
  };

  return {
    createAsides: createAsides
  };

})();
