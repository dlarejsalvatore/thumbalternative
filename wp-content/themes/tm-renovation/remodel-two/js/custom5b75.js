$(function(){

    document.addEventListener( 'wpcf7submit', function( event ) {
        var inputs = event.detail.inputs;
        var id = event.detail.id;
        // $("#" + id).find('input[type="submit"]').attr('disabled', 'disabled');

        setTimeout(function () {
            // $("#" + id).find('input[type="submit"]').removeAttr('disabled');
        }, 1000);
    }, false );

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var formsIds = ['3212'];

        location = 'http://1800remodel.com/thank-you/';
    }, false );
    // Плавный скролл по якорям
    $('a[href*="#"]').click(function () {

        elementClick = $(this).attr("href");
        if (elementClick.length) {
            var destination = $(elementClick).offset().top;
            $('body, html').animate( { scrollTop: destination }, 1100 );
            return false;
        }
    });

    $('.rm-tm-button').on('click', function(){
        $('.rm-topmenu').toggle('fast');
    });

    $('.project').click(function(){
        window.location = $(this).find("a").attr("href");
        return false;
    });


    $('.rm-topslider .content').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.gallery').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.partners-list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#gallery-tabs').tabs();

    $('select').styler();

    $('.gallery a').on('click', function (e) {
        e.preventDefault();
    });

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').addClass('show');
        } else {
            $('.scrollup').removeClass('show');
        }
    });

    //Click event to scroll to top
    $('.scrollup').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $('.fancybox').fancybox();

    $('#form-topslider').on('submit', function (e) {
        e.preventDefault();
        var link = $('#service').val();

        // console.log(link);

        if(link != ""){
            window.location.href= link;
        }


    });



    if($(window).width() < 991)
    {
        $(".rm-header-bottom").trigger("sticky_kit:detach");
    }else{
        $(".rm-contacts").trigger("sticky_kit:detach");
    }


});

$(window).on('load resize', function () {
    if($(window).width() < 991)
    {
        $(".rm-header-bottom").trigger("sticky_kit:detach");
    }else{
        $(".rm-contacts").trigger("sticky_kit:detach");
    }
});

$(window).on('load resize scroll', function () {
    if($(window).width() < 991)
    {
        // $(".rm-header-bottom").trigger("sticky_kit:detach");
        // $('.rm-contacts').stick_in_parent({
        //     parent: 'body'
        // });
    }else{
        // $(".rm-contacts").trigger("sticky_kit:detach");
        $('.rm-header-bottom').stick_in_parent({
            parent: 'body'
        });

    }
});