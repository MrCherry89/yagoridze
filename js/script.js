$(document).ready(function () {
  $(".delivery-restaurant__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    variableWidth: true,
    prevArrow: $(
      ".delivery-restaurant__slider-wrap .delivery-restaurant__slider-navigation .slick-prev"
    ),
    nextArrow: $(
      ".delivery-restaurant__slider-wrap .delivery-restaurant__slider-navigation .slick-next"
    ),
  });

  $(".order__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    dots: false,
    responsive: [
      {
        breakpoint: 961,
        settings: {
          variableWidth: true,
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".basket-info-item-product-count .btn-minus").addClass("btn-disabled");

  $(".basket-info-item-product-count .input-number").on("change", function () {
    if ($(this).val() == 1) {
      $(this)
        .closest(".basket-info-item-product-count")
        .find(".btn-minus")
        .addClass("btn-disabled");
    } else {
      $(this)
        .closest(".basket-info-item-product-count")
        .find(".btn-minus")
        .removeClass("btn-disabled");
    }
  });

  $(".btn-minus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt(
        $(this)
          .closest(".basket-info-item-product-count")
          .find(".input-number")
          .val()
      ) - 1;
    $(this)
      .closest(".basket-info-item-product-count")
      .find(".input-number")
      .val(number > 0 ? number : 1)
      .change();
  });

  $(".btn-plus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt(
        $(this)
          .closest(".basket-info-item-product-count")
          .find(".input-number")
          .val()
      ) + 1;
    $(this)
      .closest(".basket-info-item-product-count")
      .find(".input-number")
      .val(number)
      .change();
  });

  $(".header__drop-menu").on("click", function () {
    $(".header__menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".header__menu-wrap-top-close").on("click", function () {
    $(".header__menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  });

  $(".header__basket").on("click", function () {
    $(".header__basket-info").toggleClass("open");
  });
});
