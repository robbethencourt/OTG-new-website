// A $( document ).ready() block.
$(document).ready(function() {
  var myCenter = new google.maps.LatLng(26.271042, -80.133342);

  function initialize() {
    var mapProp = {
      center: myCenter,
      zoom: 9,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );

    var marker = new google.maps.Marker({
      position: myCenter,

      icon: "images/marker.png"
    });

    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
      content: "Hello Address"
    });
  }

  google.maps.event.addDomListener(window, "load", initialize);
});

$(document).ready(function() {
  var myCenter = new google.maps.LatLng(28.447103, -81.373024);

  function initialize() {
    var mapProp = {
      center: myCenter,
      zoom: 9,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(
      document.getElementById("googleMap2"),
      mapProp
    );

    var marker = new google.maps.Marker({
      position: myCenter,

      icon: "images/marker.png"
    });

    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
      content: "Hello Address"
    });
  }

  google.maps.event.addDomListener(window, "load", initialize);
});
$(document).ready(function() {
  var myCenter = new google.maps.LatLng(39.828343, -98.57948);

  function initialize() {
    var mapProp = {
      center: myCenter,
      zoom: 3,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(
      document.getElementById("googleMap3"),
      mapProp
    );

    var marker = new google.maps.Marker({
      position: myCenter,

      icon: "images/marker.png"
    });

    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
      content: "Hello Address"
    });
  }

  google.maps.event.addDomListener(window, "load", initialize);
});
$(document).ready(function() {
  var myCenter = new google.maps.LatLng(23.0203458, 72.5797426);

  function initialize() {
    var mapProp = {
      center: myCenter,
      zoom: 9,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(
      document.getElementById("googleMap4"),
      mapProp
    );

    var marker = new google.maps.Marker({
      position: myCenter,

      icon: "images/marker.png"
    });

    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
      content: "Hello Address"
    });
  }

  google.maps.event.addDomListener(window, "load", initialize);
});
$(document).ready(function() {
  var myCenter = new google.maps.LatLng(23.0203458, 72.5797426);

  function initialize() {
    var mapProp = {
      center: myCenter,
      zoom: 9,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(
      document.getElementById("googleMap5"),
      mapProp
    );

    var marker = new google.maps.Marker({
      position: myCenter,

      icon: "images/marker.png"
    });

    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
      content: "Hello Address"
    });
  }

  google.maps.event.addDomListener(window, "load", initialize);
});
$(document).ready(function() {
  var myCenter = new google.maps.LatLng(23.0203458, 72.5797426);

  function initialize() {
    var mapProp = {
      center: myCenter,
      zoom: 9,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(
      document.getElementById("googleMap6"),
      mapProp
    );

    var marker = new google.maps.Marker({
      position: myCenter,

      icon: "images/marker.png"
    });

    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
      content: "Hello Address"
    });
  }

  google.maps.event.addDomListener(window, "load", initialize);
});
