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

  $(".header__drop-menu").on("click", function () {
    $(".header__menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  $(".header__menu-wrap-top-close").on("click", function () {
    $(".header__menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  });

  $(window).on("resize", function (e) {
    checkScreenSize();
  });

  $(".card__order-count .btn-minus").addClass("btn-disabled");

  $(".card__order-count .input-number").on("change", function () {
    if ($(this).val() == 1) {
      $(this)
        .closest(".card__order-count")
        .find(".btn-minus")
        .addClass("btn-disabled");
    } else {
      $(this)
        .closest(".card__order-count")
        .find(".btn-minus")
        .removeClass("btn-disabled");
    }
  });

  $(".btn-minus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt(
        $(this).closest(".card__order-count").find(".input-number").val()
      ) - 1;
    $(this)
      .closest(".card__order-count")
      .find(".input-number")
      .val(number > 0 ? number : 1)
      .change();
  });

  $(".btn-plus").on("click", function (e) {
    e.preventDefault();
    var number =
      parseInt(
        $(this).closest(".card__order-count").find(".input-number").val()
      ) + 1;
    $(this)
      .closest(".card__order-count")
      .find(".input-number")
      .val(number)
      .change();
  });

  checkScreenSize();

  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    $(document).on("click", ".header__basket", function () {
      if (newWindowWidth < 1281) {
        $(".header__basket-info").toggleClass("open");
      }
    });
  }

  $(".select-wrap select").select2({
    minimumResultsForSearch: -1,
  });

  $(".phone-number-input").inputmask({
    mask: "+7 (999)-999-99-99",
  });
  $(".ordering__form").validate({
    rules: {
      phone: {
        required: true,
      },
    },
  });

  $(".ordering__form-receiving-tab-menu li a").on("click", function (e) {
    e.preventDefault();
    $(this)
      .closest(".ordering__form-receiving-tab-menu")
      .find("li")
      .removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });

  $(".tab-menu li a").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content2 .tab-content-item").removeClass("active");
    $(".tab-content2 .tab-content-item").eq(index).addClass("active");
  });
});
