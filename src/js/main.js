(function () {

    // fixed header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.header__fixed').addClass('header--fixed');
        } else {
            $('.header__fixed').removeClass('header--fixed');
        }
    });

    // scroll to link
    $('.nav, #menu__mobile').on('click', 'a', function(){
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: (top -45 +'px')}, 1500);
        if ($('#menu__mobile').is(":visible")) {
            $('.menu__toggle-btn--close').hide();
            $('#menu__mobile').animate({
                width: "0",
            }, 600 );
        }
    });

    // open mobile menu
    $('.menu__toggle-btn--open').click(function() {
        $('#menu__mobile').show();
        $('#menu__mobile').animate({
                width: "240px",
            }, 
            600, function() {
                $('.menu__toggle-btn--close').show();
            }
        );
    });

    // close mobile menu
    $('.menu__toggle-btn--close').click(function() {
        $('.menu__toggle-btn--close').hide();
        $('#menu__mobile').animate({
            width: "0",
        }, 600 );
    });

    // header slider
    $('#header-carousel').carousel({
        // interval: 2000
    });

    // quote slider
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

    // map
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

})();