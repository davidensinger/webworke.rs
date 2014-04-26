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

      // Check that the footnotes and aside markers exist
      if (s.footnotes != null && s.asideMarkers != null) {
        var markerArray = s.asideMarkers;
        var footnoteArray = s.footnotes.children;

        // Ensure that we have an equal number of footnotes and aside markers
        if (footnoteArray.length === markerArray.length) {
          for (var i = 0, n = markerArray.length; i < n; i++) {
            var child = footnoteArray[i];

            markerArray[i].insertAdjacentHTML('afterend', child.innerHTML);
          }
        }
      }
    }
  };
})();
