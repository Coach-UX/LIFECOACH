var mapStyle = [{
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
        "saturation": 36
      },
      {
        "color": "#231F20"
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
        "color": "#231F20"
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
        "color": "#231F20"
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
        "color": "#231F20"
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
        "color": "#231F20"
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
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
          "color": "#DF9CAF"
      },
      {
        "visibility": "on"
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
        "color": "#231F20"
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
        "color": "#231F20"
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
        "color": "#D190A3"
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
    zoom: 15,
    center: new google.maps.LatLng(35.674970, 139.722029),
    styles: mapStyle,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    gestureHandling: 'greedy',
    backgroundColor: '#DF9CAF'
  };

  var locations = [
    [
      // INFOWINDOW CTA
      'アクセス',
      // LATITUDE
      35.674970,
      // LONGITUDE
      139.722029,
      // ?
      1,
      // MARKER
      'img/marker.svg',
      // DIRECTIONS LINK
      'https://maps.google.com?daddr=Kitaaoyama,+Minato,+Tokyo+107-0061,+Japan'
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
                  scaledSize: new google.maps.Size(55, 77.56),
                  }
          });

          var infowindow = new google.maps.InfoWindow();

          infowindow.setContent('<div class="infowindow" style="width:auto; height:auto;padding: 10% 0 10% 0; text-align: center;">' +
            '<a href="' +
            locations[i][5] +
            '" target="_blank">' +
            locations[i][0] +
            "</a>"
          );

          google.maps.event.addListener(marker, 'click', (function(marker, i) {

            return function() {


              infowindow.open(map, marker);
            }

          })(marker, i));

// SHOW TOOLTIP BY DEFAULT

          markers.push(marker);

          infowindow.open(map, marker);

  }

//   google.maps.event.addListener(marker, 'click', function() {
//     window.open(this.url, '_blank');
// });
//
//   $('.marker-link').on('click', function() {
//
//     google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
//   });
//
//   google.maps.event.addListener(map, 'click', function(event) {
//     if (infowindow) {
//       infowindow.close();
//     }
//   });

}

initialize();
