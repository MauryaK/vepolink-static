const $ = jQuery;
const $window = $(window);
const $header = $("header");
const $footer = $("footer");
const $body = $("body");
const $html = $("html");
const formControls = $(".form-control");
var $scrollTop = scrollY;

$window.scroll(function () {
    scrollTop = $(this).scrollTop();
    $header.toggleClass("header-fixed", scrollTop > $window.height() / 100);
    $("#back-to-top").toggleClass("show", scrollTop > 200);
});

$scrollTop > 0 ? $header.addClass('header-fixed') : $header.removeClass('header-fixed');

formControls.on(
    "input change",
    throttle(function () {
        const $parent = $(this).parent(".form-group");
        $parent.toggleClass("valid", this.value !== "");
    })
);
function throttle(callback, delay = 250) {
    let isThrottled = false;
    return function () {
        if (!isThrottled) {
            callback.apply(this, arguments);
            isThrottled = true;
            setTimeout(() => (isThrottled = false), delay);
        }
    };
}
$('.bannerHomeSlide').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    smartSpeed: 1200,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1,
            nav: false
        }
    }
});
$('.clientTestSlid').owlCarousel({
    loop: true,
    dots: false,
    margin: 0,
    responsiveClass: true,
    smartSpeed: 1200,
    navText: ['<img src="assets/icons/prevServ.png" />', '<img src="assets/icons/nextServ.png" />'],
    responsive: {
        0: {
            items: 1.1,
            nav: false
        },
        675: {
            items: 1,
            stagePadding: 50,
            nav: false
        },
        768: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});
$('.moreProdSlid').owlCarousel({
    loop: true,
    dots: false,
    margin: 0,
    responsiveClass: true,
    smartSpeed: 1200,
    navText: ['<img src="assets/icons/prevServ.png" />', '<img src="assets/icons/nextServ.png" />'],
    responsive: {
        0: {
            items: 1.1,
            nav: false
        },
        520: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
        }
    }
});

// Model
$body.on('click', '.humburger', function (e) {
    e.preventDefault();
    $('.overlay').addClass('open');
    $('.humbuger_navigation').toggleClass('is-open')
})
$body.on('click', '.enqModel', function (e) {
    e.preventDefault();
    $('.overlay').addClass('open');
    $('.modelEnquiry').toggleClass('is-open')
})
$body.on('click', '.closeModel', function () {
    $('.overlay').removeClass('open');
    $('.model').removeClass('is-open')
})

$body.on('click', '.scrolTO', function () {
    let ScrolTO = (parseInt($('.banner').height()) - parseInt($header.height()));
    $('html, body').animate({
        scrollTop: ScrolTO
    }, 1000);
})

$body.on("click", ".top_service .dropdown>a,.sub-nav-trigger", function (e) {
    e.preventDefault();
    $(this).parent('li').siblings('.dropdown').children('.sub-nav').slideUp();
    $(this).parent('li').siblings('.dropdown').removeClass('active');
    $(this).parent('.dropdown').toggleClass('active');
    $(this).siblings('.sub-nav').slideToggle();
})

$(function () {
    $('.listPartners').owlCarousel({
        items: 8,
        rtl: false,
        loop: true,
        margin: 20,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            520: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 8
            }
        }
    })

    $body.on('click', '.scrollyPy li a', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        const offset = $(target).offset().top - 100;
        $('html, body').animate({
            scrollTop: offset
        }, 800);
    })


    // Download PDF

    $body.on('click', '.selectDrop .selected', function (e) {
        $('.selectDrop').toggleClass('active');
        $('.selectDrop ul').slideToggle();
    })
    $body.on('click', '.selectDrop ul li', function (e) {
        $(this).toggleClass('active').siblings().removeClass('active');
        const file = $(this).data('link');
        if (file) {
            $('.selectDrop ul').slideUp();
            $('.selectDrop').removeClass('active');
            $('.selectDrop .selected').text($(this).text());
            $('a.downpdf').attr('href', file);
            $('.selectDrop').removeClass('err')
        }

    })
    $body.on('click', 'a.downpdf', function (e) {
        const file = $(this).attr('href');
        if (file == 'javascript:void(0)' || file == "") {
            e.preventDefault();
            $('.selectDrop').addClass('err')
            // $('.selectDrop ul').slideToggle();
        }
    })
    // AOS
    if ($('[data-aos]').length > 0) {
        AOS.init();
    }
})