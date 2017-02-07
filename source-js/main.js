var menu = document.querySelector('.menu');
function toggleMenu () {
    menu.classList.toggle('open');
}
menu.addEventListener('click', toggleMenu);


$(document).ready(function () {
    $('.menu').on('click', function () {
        $('.nav_container').slideToggle(500);
    });
    $(window).resize(function () {
        if ($(window).width()>500){
            $('.nav_container').removeAttr('style');
        }
    })
});