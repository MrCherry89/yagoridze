$(document).ready(function () {
  $("#form").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
  });

  $(".sub-menu-item button").on("click", function (e) {
    e.stopPropagation();
    $(".sub-menu").toggleClass("open");
    $(this).find("img").toggleClass("rotate");

    // $(".header .header-info-wrap .wrap")[0].scroll({
    //   top: 0,
    //   behavior: "smooth",
    // });

    // console.log(1111, $(".header .header-info-wrap .wrap"));

    // setTimeout(function () {
    //   // $(".header .header-info-wrap .wrap").scrollTop(0);
    //   console.log($("#header-menu-wrap").scrollTop());
    //   $("#header-menu-wrap").animate({
    //     scrollTop: $("#header-menu-wrap").offset().top,
    //   });
    // }, 500);

    // $(this)[0].scrollIntoView(true);
  });

  $(".drop-icon").on("click", function () {
    $(".header-info-wrap").addClass("open");
    $("html, body").addClass("overflow");
  });

  $(".close").on("click", function () {
    $(".header-info-wrap").removeClass("open");
    $("html, body").removeClass("overflow");
  });

  $(".review-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: false,
    prevArrow: $(".review-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".review-slider-wrap .slider-navigation .slick-next"),
  });

  $(".variants-top").on("click", function () {
    $(this).closest(".variants").find(".variants-list").toggleClass("open");
  });

  $(".variants-list .variants-list-item").on("click", function () {
    var text = $(this).find("span").text();
    $(".variants-top span").text(text);
    $(".variants-list").removeClass("open");
  });

  $(function () {
    //for slick slider
    $(".slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      autoplaySpeed: 5000,
      autoplay: true,
    });

    var time = 5;
    var $bar, isPause, tick, percentTime;

    $bar = $(".slider-progress .progress");

    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
    }

    function interval() {
      if ($(".slick-dots .animated-dot").hasClass("play")) {
        isPause = true;
      }
      if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        $bar.css({
          width: percentTime + "%",
        });
        if (percentTime >= 100) {
          $(".slider").slick("slickNext");
          startProgressbar();
        }
      }
    }

    function resetProgressbar() {
      $bar.css({
        width: 0 + "%",
      });
      clearTimeout(tick);
    }

    startProgressbar();

    $(".slider").on("beforeChange", function () {
      resetProgressbar();
      startProgressbar();
      $bar.css({
        width: 100 + "%",
      });
    });
  });

  $(".click-btn").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".anchore-wrap").find(".list").addClass("open");
  });

  $(".anchore-wrap .close-btn").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".anchore-wrap").find(".list").removeClass("open");
  });

  $(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });
});
