"use strict";

$(function () {
  $("body").autoPadding({
    source: $(".js-header")
  }); //removeIf(production)

  console.log("document ready"); //endRemoveIf(production)

  $(".main:not(.home)").css("margin-top", $(".main-header").height());
  $(window).on("scroll", function () {
    var $nav = $(".main-header"),
        $main = $(".main:not(.home)");

    if ($(this).scrollTop() > $nav.height()) {
      $main.css("margin-top", 0);
      $nav.addClass("scrolled shadow");
    } else {
      $nav.removeClass("scrolled shadow");
      $main.css("margin-top", $nav.height());
    } // $nav.toggleClass("scrolled shadow", $(this).scrollTop() > $nav.height());

  });
  var pageSection = $(".bg-image");
  pageSection.each(function () {
    if ($(this).attr("data-background")) {
      $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
  });
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    patterns: {
      youtube: {
        index: "youtube.com",
        id: "v=",
        src: "https://www.youtube.com/embed/%id%?rel=0&autoplay=1"
      }
    }
  });
  $('[data-toggle="tooltip"]').tooltip();
  $(".properties").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".properties-wrapper .swiper-button-prev",
    nextArrow: ".properties-wrapper .swiper-button-next",
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(".testimonials").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow: ".testimonials-area .slick-button-prev",
    nextArrow: ".testimonials-area .slick-button-next",
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(".partners").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000
  });
  var swiper = new Swiper(".property-thumb-gallery", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: true
  });
  var swiper2 = new Swiper(".property-main-gallery", {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: swiper
    }
  });
  var sidebar = new StickySidebar("#agent-sidebar", {
    containerSelector: "#agent-wrapper",
    innerWrapperSelector: ".sidebar__inner",
    topSpacing: 120,
    bottomSpacing: 120
  }); // var swiper = new Swiper(".properties", {
  //   // speed: 600,
  //   speed: 1000,
  //   slidesPerView: 2,
  //   spaceBetween: 30,
  //   freeMode: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
});