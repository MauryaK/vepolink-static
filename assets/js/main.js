const $ = jQuery;

const $window = $(window);
const $body = $("body");
const $header = $("header");
const $htmlBody = $("html, body");

const SCROLL_TOP_BTN = $("#back-to-top");

/* ---------------------------
   Scroll
--------------------------- */

const handleScroll = () => {
    const scrollTop = $window.scrollTop();

    $header.toggleClass("header-fixed", scrollTop > 0);
    SCROLL_TOP_BTN.toggleClass("show", scrollTop > 200);

    // scrollY < 10 ? $header.removeClass("header-fixed") : $header.addClass("header-fixed");
};

$window.on("scroll", throttle(handleScroll, 0));

/* ---------------------------
   Throttle
--------------------------- */

function throttle(callback, delay = 250) {
    let isThrottled = false;

    return function (...args) {
        if (isThrottled) return;

        callback.apply(this, args);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
        }, delay);
    };
}

/* ---------------------------
   Form Validation
--------------------------- */

$(".form-control").on(
    "input change",
    throttle(function () {
        $(this)
            .closest(".form-group")
            .toggleClass("valid", this.value.trim() !== "");
    })
);

/* ---------------------------
   Owl Carousel Helper
--------------------------- */

function initCarousel(selector, options) {
    const $el = $(selector);
    if ($el.length) {
        $el.owlCarousel(options);
    }
}

/* ---------------------------
   Carousels
--------------------------- */

initCarousel(".bannerHomeSlide", {
    loop: true,
    margin: 0,
    autoplay: true,
    smartSpeed: 1200,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive: {
        0: { items: 1, nav: false }
    }
});

const navIcons = [
    '<img src="assets/icons/prevServ.png" />',
    '<img src="assets/icons/nextServ.png" />'
];

initCarousel(".clientTestSlid", {
    loop: true,
    dots: false,
    margin: 0,
    smartSpeed: 1200,
    navText: navIcons,
    responsive: {
        0: { items: 1.1, nav: false },
        675: { items: 1, stagePadding: 50, nav: false },
        768: { items: 2, nav: true },
        1000: { items: 3, nav: true, loop: false }
    }
});

initCarousel(".moreProdSlid", {
    loop: true,
    dots: false,
    margin: 0,
    smartSpeed: 1200,
    navText: navIcons,
    responsive: {
        0: { items: 1.1, nav: false },
        520: { items: 2, nav: true },
        1000: { items: 3, nav: true }
    }
});

initCarousel(".listPartners", {
    items: 8,
    loop: true,
    margin: 20,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: { items: 3 },
        520: { items: 3 },
        768: { items: 4 },
        1000: { items: 8 }
    }
});

/* ---------------------------
   Modal / Menu
--------------------------- */

$body.on("click", ".humburger", (e) => {
    e.preventDefault();
    $(".overlay").addClass("open");
    $(".humbuger_navigation").toggleClass("is-open");
});

$body.on("click", ".enqModel", (e) => {
    e.preventDefault();
    $(".overlay").addClass("open");
    $(".modelEnquiry").toggleClass("is-open");
});

$body.on("click", ".closeModel", () => {
    $(".overlay").removeClass("open");
    $(".model").removeClass("is-open");
});

/* ---------------------------
   Scroll To Banner
--------------------------- */

$body.on("click", ".scrolTO", () => {
    const scrollTarget =
        $(".banner").outerHeight() - $header.outerHeight();

    $htmlBody.animate({ scrollTop: scrollTarget }, 1000);
});

/* ---------------------------
   Dropdown Navigation
--------------------------- */

$body.on(
    "click",
    ".top_service .dropdown > a, .sub-nav-trigger",
    function (e) {
        e.preventDefault();

        const $parent = $(this).parent("li");

        $parent
            .siblings(".dropdown")
            .removeClass("active")
            .children(".sub-nav")
            .slideUp();

        $parent.toggleClass("active");
        $(this).siblings(".sub-nav").slideToggle();
    }
);

/* ---------------------------
   Anchor Scroll
--------------------------- */

$body.on("click", ".scrollyPy li a", function (e) {
    e.preventDefault();

    const target = $(this).attr("href");
    const offset = $(target).offset().top - 100;

    $htmlBody.animate({ scrollTop: offset }, 800);
});

/* ---------------------------
   Download PDF Dropdown
--------------------------- */

$body.on("click", ".selectDrop .selected", () => {
    $(".selectDrop").toggleClass("active");
    $(".selectDrop ul").slideToggle();
});

$body.on("click", ".selectDrop ul li", function () {
    const file = $(this).data("link");

    $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

    if (file) {
        $(".selectDrop ul").slideUp();
        $(".selectDrop").removeClass("active err");

        $(".selectDrop .selected").text($(this).text());
        $("a.downpdf").attr("href", file);
    }
});

$body.on("click", "a.downpdf", function (e) {
    const file = $(this).attr("href");

    if (!file || file === "javascript:void(0)") {
        e.preventDefault();
        $(".selectDrop").addClass("err");
    }
});

/* ---------------------------
   AOS Animation
--------------------------- */

if ($("[data-aos]").length) {
    AOS.init({ once: true });
}



