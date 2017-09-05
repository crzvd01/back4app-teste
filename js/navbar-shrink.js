$(document).ready(function () {
    $(window).scroll(function () {

        
        if ($(document).scrollTop() > 50) {
           $('.navbar-default').addClass('navbar-shrink');
           $('.burger-menu').addClass('burger-shrink');
        } else {
           $('.navbar-default').removeClass('navbar-shrink');
           $('.burger-menu').removeClass('burger-shrink');
        }

    });
});

