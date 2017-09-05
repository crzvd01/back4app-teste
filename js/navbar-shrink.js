$(document).ready(function () {
    $(window).scroll(function () {

        
        if ($(document).scrollTop() > 50) {
           $('.navbar-default').addClass('navbar-shrink');
           $('.burger-menu').addClass('burger-shrink');
           $('.title-header').addClass('title-header-shrink');
        } else {
           $('.navbar-default').removeClass('navbar-shrink');
           $('.burger-menu').removeClass('burger-shrink');
           $('.title-header').removeClass('title-header-shrink');
        }

    });
});

