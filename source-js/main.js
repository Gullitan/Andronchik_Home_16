$(document).ready(function () {
    $('.menu').on('click', function () {
        $('.nav_container').slideToggle(500);
        $('.menu').toggleClass('open');
    });
    $(window).on('resize',function () {
        if ($(window).width()>500){
            $('.nav_container').removeAttr('style');
            $('.menu').removeClass('open');
        }
    })
});