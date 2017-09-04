$(document).ready(function () {
    $(window).scroll(function () {

        
        if ($(document).scrollTop() > 50) {
           $('.navbar-default').addClass('navbar-shrink');
        } else {
           $('.navbar-default').removeClass('navbar-shrink');
        }

    });
});