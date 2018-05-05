$('#header-carousel').carousel({
    // interval: 2000
});

$('#quote-carousel').carousel({
    // interval: 2000
});

// init Masonry
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
});

function initialize() {
    if (!!document.getElementById('map')) {
        initMap();
    } else {
        return false;
    }
}

function initMap() {
    var uluru = {lat: 40.7143528, lng: -74.0059731};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Mogo'
    });
}
