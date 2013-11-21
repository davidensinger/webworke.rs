// Keyboard navigation, courtesy of Mousetrap.js (http://craig.is/killing/mice)
Mousetrap.bind('left', keyboardNavigation.bind(null, 'previous'))
Mousetrap.bind('right', keyboardNavigation.bind(null, 'next'))

function keyboardNavigation(ID) {
  var element = document.getElementById('js-nav-' + ID);
  if (element) {
    var anchor = element.getAttribute('href');
    window.location.href = anchor;
    return false
  }
}

// Google Map, based on Shades of Grey (http://snazzymaps.com/style/38/shades-of-grey)
google.maps.event.addDomListener(window, "load", init);

function init() {
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng( 39.96, -82.99931 ),
    scrollwheel: false,
    panControl: false,
    zoomControl: false,
    rotateControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    backgroundColor: "#2b2a28",
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]}]
  };

  var mapElement = document.getElementById("js-google-map");
  var map = new google.maps.Map(mapElement, mapOptions);

  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}
