$(window).on('load', function(){
$(function(){    
    // pg loader
    setTimeout(function(){
        $(".g-pgloader").css("display", "none");
        $(".g-pgloader-wr").addClass("g-pgloader-wr-hide");
        setTimeout(function(){
            $(".g-pgloader-wr").remove();
        }, 1200);
    }, 1000);
    // End of pg loader

    // logo change on scroll
    var g_logo_src = $("#gHdrLogo").attr("src");
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $("#gHdrLogo").attr("src", "assets/img/mdf-logo-onscroll.png");
            $("#gHdr").addClass("t-hm-hdr-onscroll");
        } else {
            $("#gHdrLogo").attr("src", g_logo_src);
            $("#gHdr").removeClass("t-hm-hdr-onscroll");
        }
    });
    // End of logo change on scroll

    // Side nav
    $("#gSidenavOpenBtn").click(function() {
        $("#gSidenav").addClass("g-sidenav-show");
        setTimeout(function() {
            $("#gSidenavBox").addClass("g-sidenav-box-show");
        }, 300);
    });
    $("#gSidenavCloseBtn").click(function() {
        $("#gSidenavBox").removeClass("g-sidenav-box-show");
        $("#gSidenav").removeClass("g-sidenav-show");
    });
    // End of Side nav
});
});


// Google map
function gGoogleMap(){
    // map
    var g_map_latLng = new google.maps.LatLng(13.091714, 80.179226);
    var g_map_prop = {
        center: g_map_latLng,
        zoom: 16,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#212121"
                }]
            },
            {
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#333333"
                }]
            },
            {
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#575757"
                    },
                    {
                        "weight": 2
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                        "color": "#ef0d33"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": 1.5
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                        "color": "#efefef"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": 2
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "color": "#212121"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#757575"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#181818"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#1b1b1b"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#2c2c2c"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8a8a8a"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#373737"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#3c3c3c"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#4e4e4e"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#000000"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#3d3d3d"
                }]
            }
        ],
    };
    var g_map = new google.maps.Map(document.getElementById("gGoogleMapEmbed"), g_map_prop);

    // marker
    var g_map_marker = new google.maps.Marker({
        position: g_map_latLng,
        icon: 'assets/img/home/map-loc-icon.png',
    });
    g_map_marker.setMap(g_map);
}
// End of Google map
