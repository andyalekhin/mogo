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
