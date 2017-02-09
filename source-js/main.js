$(document).ready(function () {
    
    //SCROL
    $('.element').on('click', function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
        }
        return false;
    });

    //UP ARROW
    var top_show = 200; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки
    $(document).ready(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > top_show) $('.top_arrow').fadeIn();
            else $('.top_arrow').fadeOut();
        });
        $('.top_arrow').click(function () {
            $('body, html').animate({
                scrollTop: 0
            }, delay);
        });
    });

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

    $('.header_nav_element .element').on('click', function () {
        $('.element').removeClass('action');
        $(this).addClass('action');
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

    //ACCORDION
    $('.answer').not(':first').hide();

    $('.question').on('click', function () {

        var findArticle = $(this).next('.answer');
        var findWrapper = $(this).closest('.accordion_wrap');

        if (findArticle.is(':visible')) {
            findArticle.slideUp('fast');

        }
        else {
            findWrapper.find('.answer').slideUp('fast');
            findArticle.slideDown('fast');
        }
    });

    //TOOLTIP
    if($(window).width()>500) {
        $('.input_email').hover(function () {
            $('.tooltip_email').fadeIn();
        }, function () {
            $('.tooltip_email').fadeOut();
        });
    }
});