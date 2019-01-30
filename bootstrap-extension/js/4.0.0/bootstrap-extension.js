/***************************************************
 * Copyright (c) 2018 Peter Joiner — AKK IT, Inc. *
 ***************************************************/

$(document).ready(run);

function run() {

    var MENU_HEIGHT = $(".navbar").first().innerHeight() + parseInt($(".navbar").first().css("margin-top")) + parseInt($(".navbar").first().css("margin-bottom"));
    var SCROLL_TIME = 1000;
    var TOTOP_BGCOLOR = $("#toTop").css("background-color");
    var TOTOP_COLOR = $("#toTop").css("color");
    var carousel = $("#alpha-slider");
    var carouselImages = $("#alpha-slider img");
    var carouselTitle = $("#alpha-slider #alpha-slider-title");
    var aktCarouselImage = 0;
    var aktCarouselZIndex = -100000;
    var dataInterval = typeof $(carousel).attr("data-interval") !== 'undefined' ? $(carousel).attr("data-interval") : 5000;
    var carouselTimer = setTimeout(carouselValt, dataInterval);
    

    /* ---------
     *  rolling
     * --------- */

    $(".rolling").click(menuClick);

    function menuClick(event) {
        event.preventDefault();
        var id = $(this).attr("href");
        $("html, body").animate({"scrollTop": $(id).offset().top - MENU_HEIGHT}, SCROLL_TIME);
        $(".navbar .collapse").collapse('hide');
    }

    /* -------
     *  toTop
     * ------- */

    $("#toTop").append('<div>');
    $("#toTop div").css({
        "border-left": "solid 8px " + TOTOP_BGCOLOR,
        "border-right": "solid 8px " + TOTOP_BGCOLOR,
        "border-bottom": "solid 15px " + TOTOP_COLOR,
        "width": 0
    });
    $("#toTop").css({
        "background-color": TOTOP_BGCOLOR,
        "padding": "13px",
        "position": "fixed",
        "right": "50px",
        "bottom": "50px",
        "cursor": "pointer",
        "display": "none"
    });

    toTopSetup();
    $(window).scroll(toTopSetup);
    $(window).resize(toTopSetup);
    $("#toTop").click(gotoTop);

    function toTopSetup() {
        $(window).scrollTop() > 100 ? $("#toTop").fadeIn() : $("#toTop").fadeOut();
    }

    function gotoTop() {
        $("html, body").animate({"scrollTop": 0}, SCROLL_TIME);
    }

    /* ------------
     *  hover-zoom
     * ------------ */

    $('.hover-zoom img').css({
        'float': 'left',
        'transition': 'all 0.5s'
    });
    $('head').append('<style>.hover-zoom img:hover {transform: scale(1.2)}');
    $('.hover-zoom img').wrap('<div class="hover-zoom-box">');
    $('.hover-zoom-box').css('overflow', 'hidden');

    /* --------------
     *  Alpha Slider
     * -------------- */

    carouselImages.css({
        "position": "absolute",
        "left": 0,
        "width": "100%",
        "z-index": -100000
    });

    carouselTitle.css({
        "position": "absolute",
        "width": "100%"
    });
    
    // indikátor gombok
    for (i=0; i<carouselImages.length; i++) {
        carousel.append('<div>');
        $("#alpha-slider div").last().prop("azon", i);
    }
    $("#alpha-slider div").wrapAll('<div id="carouselIndicator">');
    
    var carouselIndicator = $("#carouselIndicator");
    
    carouselIndicator.css({
        "position": "relative",
        "float": "left"
    });
    
    $("#carouselIndicator div").css({
        "width": 20,
        "height": 20,
        "background-color": "black",
        "float": "left",
        "margin": "0 5px",
        "border-radius": "50%",
        "cursor": "pointer"
    });
    
    $("#carouselIndicator div").first().css({
        "background-color": "white"
    });
    
    // nyilak
    carousel.append('<div id="carouselLeftBtn">');
    carousel.append('<div id="carouselRightBtn">');
    var carouselLeftBtn = $("#carouselLeftBtn");
    var carouselRightBtn = $("#carouselRightBtn");
    
    $("#carouselLeftBtn, #carouselRightBtn").css({
        "cursor": "pointer",
        "position": "relative",
        "width": 0,
        "border-top": "solid 10px transparent",
        "border-bottom": "solid 10px transparent"
    });
    
    carouselLeftBtn.css({
        "border-right": "solid 18px black"
    });

    carouselRightBtn.css({
        "border-left": "solid 18px black"
    });

    carouselImages.not(carouselImages.first()).hide(); // csak az első kép látszódik

    atmeretez();
    $(window).on("resize", atmeretez);
    
    carouselLeftBtn.on("click", function() {
        aktCarouselImage -= 2;
        carouselValt();
    });
    
    carouselRightBtn.on("click", function() {
        carouselValt();
    });
    
    $("#carouselIndicator div").on("click", function() {
        aktCarouselImage = $(this).prop("azon") - 1;
        carouselValt();
    });
    
    function atmeretez() {
        carousel.css("height", carouselImages.css("height"));
        carouselTitle.css({
            "margin-top": (parseInt(carousel.css("height")) - parseInt($(carouselTitle).css("height"))) / 2
        });
        carouselLeftBtn.css({
            "left": 20,
            "top": (parseInt(carousel.css("height")) - parseInt(carouselLeftBtn.css("height"))) / 2
        });
        carouselRightBtn.css({
            "left": parseInt(carousel.css("width")) - 40,
            "top": (parseInt(carousel.css("height")) - parseInt(carouselRightBtn.css("height"))) / 2 - 20
        });
        carouselIndicator.css({
            "left": (parseInt(carousel.css("width")) - parseInt(carouselIndicator.css("width"))) / 2,
            "top": parseInt(carousel.css("height")) - 50
        });
    }
    
    function carouselValt() {
        clearTimeout(carouselTimer);
        aktCarouselImage++;
        aktCarouselZIndex++;
        if (aktCarouselImage === carouselImages.length) {
            aktCarouselImage = 0;
        } else
        if (aktCarouselImage < 0) {
            aktCarouselImage = carouselImages.length - 1;
        }
        $("#carouselIndicator div").css("background-color", "black");
        $("#carouselIndicator div").eq(aktCarouselImage).css("background-color", "white");
        carouselImages.eq(aktCarouselImage).css("z-index", aktCarouselZIndex);
        carouselImages.eq(aktCarouselImage).hide().fadeIn(1000);
        carouselTimer = setTimeout(carouselValt, dataInterval);
    }

}
