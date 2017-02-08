$(document).ready(function () {

    //RESPONSIVE MENU
    $('.menu').on('click', function () {
        $('.nav_container').slideToggle(500);
        $('.menu').toggleClass('open');
    });
    $(window).on('resize', function () {
        if ($(window).width() > 500) {
            $('.nav_container').removeAttr('style');
            $('.menu').removeClass('open');
        }
    });

    //OPEN POPUP
    $('.pop_up_btn').on('click', function (event) {
        event.preventDefault();
        $('body').css('overflow', 'hidden');
        $('#overlay').fadeIn(400, function () {
            $('#modal_form')
                .css('display', 'block')
                .animate({opacity: 1, top: '50%'}, 200);
        });
    });

    //CLOSE POPUP
    $('#modal_close, #overlay').on('click', function () {
        $('body').css('overflow', 'auto');
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200, function () {
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            })
    });

    //TAB
    $('.content:not(":first-of-type")').hide();

    $('.tab_element')
        .each(function (iter) {
            $(this).attr('data-tab', 'tab' + iter);
        })
        .on('click', function () {
            var dataTab = $(this).data('tab');
            $('.tab_element').removeClass('active');
            $(this).addClass('active');

            $('.content').hide();
            $('.content[data-tab=' + dataTab + ']').fadeIn(600);
        }).append('<div class="line"></div>');


    $('.content').each(function (iter) {
        $(this).attr('data-tab', 'tab' + iter);
    });


});