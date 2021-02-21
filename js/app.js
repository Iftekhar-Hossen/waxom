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
  });
  new WOW().init();
});
