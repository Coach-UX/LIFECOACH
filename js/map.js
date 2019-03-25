var mapStyle = [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
        "saturation": 36
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 0
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "off"
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#D190A3"
      },
      {
        "lightness": 0
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#DF9CAF"
      },
      {
        "lightness": 1
      },
      {
        "weight": 1.2
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
        "color": "#DF9CAF"
      },
      {
        "lightness": 0
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#000000"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#000000"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "color": "#D190A3"
      },
      {
        "lightness": 0
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#D190A3"
      },
      {
        "lightness": 0
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#DF9CAF"
      },
      {
        "weight": .2
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#202020"
      },
      {
        "weight": .09
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#202020"
      },
      {
        "weight": .09
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
        "color": "#202020"
      },
      {
        "weight": .09
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#A87684"
      },
      {
        "saturation": 0
      },
      {
        "visibility": "simplified"
      }
    ]
  }
]









function initialize() {


  var markers = new Array();

  var mapOptions = {
    zoom: 15.2,
    center: new google.maps.LatLng(40.722500, -74.001380),
    styles: mapStyle,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    backgroundColor: '#DF9CAF'
  };



  var locations = [
    ['Get Directions ',
      // LATITUDE
      40.722100,
      // LONGITUDE
      -74.001380,
      // ?
      1,
      // MARKER
      'img/marker.svg',
      // DIRECTIONS LINK
      'https://maps.google.com?daddr=107+Grand+St,+New+York,+NY+10013'
    ]
  ];


  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  for (var i = 0; i < locations.length; i++) {


          $('#markers').append('<a class="marker-link" data-markerid="' + i + '" href="#">' + '<h3>' + locations[i][0] + '</h3</a> ');

          var marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map,
              title: locations[i][0],
              url: locations[i][5],
              icon: {
                  url: locations[i][4],
                  scaledSize: new google.maps.Size(63.82, 90),
                  }
          });
          //
          // var infowindow = new google.maps.InfoWindow();
          //
          // infowindow.setContent('<div class="infowindow" style="width:auto; height:auto; text-align: center;">' +
          //   '<a href="' +
          //   locations[i][5] +
          //   '" target="_blank">' +
          //   "<h3>" +
          //   locations[i][0] +
          //   "</h3>" +
          //   "</a>"
          // );
          //
          // google.maps.event.addListener(marker, 'click', (function(marker, i) {
          //
          //   return function() {
          //
          //
          //     infowindow.open(map, marker);
          //   }
          //
          // })(marker, i));

// SHOW TOOLTIP BY DEFAULT
          //
          // markers.push(marker);
          //
          // infowindow.open(map, marker);

  }

  google.maps.event.addListener(marker, 'click', function() {
    window.open(this.url, '_blank');
});

  $('.marker-link').on('click', function() {

    google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
  });

  google.maps.event.addListener(map, 'click', function(event) {
    if (infowindow) {
      infowindow.close();
    }
  });

}

initialize();
