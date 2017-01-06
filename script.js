function HomeControl(controlDiv, map) {

    google.maps.event.addDomListener(zoomout, 'click', function () {
        var currentZoomLevel = map.getZoom();
        if (currentZoomLevel != 0) {
            map.setZoom(currentZoomLevel - 1);
        }
    });

    google.maps.event.addDomListener(zoomin, 'click', function () {
        var currentZoomLevel = map.getZoom();
        if (currentZoomLevel != 21) {
            map.setZoom(currentZoomLevel + 1);
        }
    });
}


function initialize() {
    var mapCanvas = document.getElementById('map');
    var myLatlng = {
        lat: 52.237442,
        lng: 21.003692
    };
    var mapOptions = {
        zoom: 13,
        center: myLatlng,
        Marker: true,
        panControl: false,
        mapTypeControl: false,
        zoomControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_CENTER
        },
        scaleControl: false,
        streetViewControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    var locations = [
        ['Palac Kultury i Nauki', 52.231871, 21.005841],
        ['Arkadia', 52.257305, 20.984481],
        ['Lazienki Krolewskie', 52.215147, 21.035074]
    ];

    var marker, i;
    var palac = document.getElementById("palac");
    var arkadia = document.getElementById("arkadia");
    var lazienki = document.getElementById("lazienki");
    var upUp = document.getElementById("up");
    var down = document.getElementById("down");
    var right = document.getElementById("right");
    var left = document.getElementById("left");
    var upLeft = document.getElementById("up-left");
    var upRight = document.getElementById("up-right");
    var downLeft = document.getElementById("down-left");
    var downRight = document.getElementById("down-right");
    var infowindow = new google.maps.InfoWindow();


    up.addEventListener("click", function m() {
        map.panBy(0, -300);
    });
    down.addEventListener("click", function m() {
        map.panBy(0, 300);
    });
    left.addEventListener("click", function m() {
        map.panBy(-300, 0);
    });
    right.addEventListener("click", function m() {
        map.panBy(300, 0);
    });

    palac.addEventListener("click", function () {
        map.setZoom(15);
        map.setCenter({
            lat: 52.231871,
            lng: 21.005841
        });
    });

    arkadia.addEventListener("click", function () {
        map.setZoom(15);
        map.setCenter({
            lat: 52.257305,
            lng: 20.984481
        });
    });

    lazienki.addEventListener("click", function () {
        map.setZoom(15);
        map.setCenter({
            lat: 52.215147,
            lng: 21.035074
        });
    });


    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
                map.setZoom(15);
                map.setCenter(marker.getPosition());
            }
        })(marker, i));


        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
                map.setZoom(15);
                map.setCenter(marker.getPosition());
            }
        })(marker, i));

    }
    var homeControlDiv = document.createElement('div');
    var homeControl = new HomeControl(homeControlDiv, map);
}


google.maps.event.addDomListener(window, 'load', HomeControl);
google.maps.event.addDomListener(window, 'load', initialize);