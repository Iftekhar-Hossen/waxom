$(function () {
  $(window).on("load", function () {
    $(".preloader").delay(100).fadeOut(500);
  });

  $(".back-to-top").hide();
  $(".back-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      10
    );
  });
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("header .navbar").addClass("sticky");
    } else {
      $("header .navbar").removeClass("sticky");
    }
    if (scroll > 200) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });

  var mix = document.querySelector(".mixer");
  var mixer = mixitup(mix);

  $(".venobox").venobox();

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  $(".slide").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prevArrow",
    nextArrow: ".nextArrow",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  
$('.center').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,
  centerMode:true,
  centerPadding:false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '180px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

  new WOW().init();
});

