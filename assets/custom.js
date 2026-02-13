$(document).ready(function () {
  $(".btn-copy").click(function (e) {
    e.preventDefault();
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    alert("Copied");
  });
  // $(".custom-filter input").change(function(){
  //   console.log("hii");
  //   $(".custom-label-filter").each(function(){
  //     $(this).removeClass("active");
  //   });
  //   $(".custom-filter .filter-item__content").each(function(){
  //     $(this).removeClass("active");
  //   });
  //   $(this).next().addClass("active");
  //   $(this).parent().addClass("active");
  // });
  $(".drawer-menu__link").click(function () {
    if ($(this).hasClass("open-next")) {
      var next_div = $(this).next();
      $(next_div).removeClass("visible");
      $(this).removeClass("open-next");
    } else {
      $(this).addClass("open-next");
      var next_div = $(this).next();
      $(next_div).addClass("visible");
    }
  });

  let options = $(".product__details #variant-selector option");
  let t = "";
  let cnt = 0;
  let trashval = parseInt($("#trashhold").val());
  $(options).each(function () {
    t = $(this).data("title");
    cnt = parseInt($(this).data("inventory-count"));
    if (cnt < trashval) {
      $("[data-option-value='" + t + "']").addClass("dot-green");
    }
  });
  $(".product__chip").click(function (e) {
    let flag = 0;
    let v_title = $(this).data("option-value");
    $(options).each(function () {
      t = $(this).data("title");
      cnt = parseInt($(this).data("inventory-count"));
      if (cnt < trashval && t == v_title) {
        $(".label-inventory").addClass("active");
        flag = 1;
      }
      if (t == v_title) {
        if (cnt > 0) {
          console.log(cnt);
          $(".inventory-label").html("In Stock");
          $(".inventory-label").removeClass("out-of-stock");
          $(".inventory-label").addClass("in-stock");
        } else if (cnt < 1) {
          $(".inventory-label").html("Out Of Stock");
          $(".inventory-label").removeClass("in-stock");
          $(".inventory-label").addClass("out-of-stock");
        }
      }
    });
    if (flag == 0) {
      $(".label-inventory").removeClass("active");
    }
  });

  let v = $("#size-type").val();
  if (v == "EU" || v == "eu") {
    $(".us-size").each(function () {
      $(this).removeClass("active");
    });
    $(".eu-size").each(function () {
      $(this).addClass("active");
    });
  } else {
    $(".eu-size").each(function () {
      $(this).removeClass("active");
    });
    $(".us-size").each(function () {
      $(this).addClass("active");
    });
  }
  $("#size-type").change(function () {
    let k = $(this).val();
    if (k == "EU" || k == "eu") {
      $(".us-size").each(function () {
        $(this).removeClass("active");
      });
      $(".eu-size").each(function () {
        $(this).addClass("active");
      });
    } else {
      $(".eu-size").each(function () {
        $(this).removeClass("active");
      });
      $(".us-size").each(function () {
        $(this).addClass("active");
      });
    }
  });
  $(".footer_modal").on("click", function (e) {
    e.preventDefault();
    var data_img = $(this).data("img");
    console.log("data_img", data_img);
    $("body").addClass("footer_modal_body");
    $(".footer_modal_part img").attr("src", data_img);
  });
  $(".footer_modal_close").on("click", function (e) {
    e.preventDefault();
    $("#page-transition-overlay").removeClass("active");
    $("body").removeClass("footer_modal_body");
  });

  $(".custom-community-gallary .slider_wrapper")
    .slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerPadding: "0px",
      centerMode: true,

      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "0px",
            centerMode: true,
            infinite: true,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            centerPadding: "50px",
            centerMode: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            centerPadding: "50px",
            centerMode: true,
          },
        },
        {
          breakpoint: 361,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerPadding: "50px",
            centerMode: true,
            arrows: false,
          },
        },
      ],
    })
    .on("setPosition", function () {
      resizeSlider();
    });

  $(".Athletes.whoo .slider_wrapper")
    .slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: "50px",
      initialSlide: 1,
      centerMode: true,

      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "50px",
            centerMode: true,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerPadding: "50px",
            centerMode: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerPadding: "50px",
            centerMode: true,
          },
        },
        {
          breakpoint: 361,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerPadding: "50px",
            centerMode: true,
          },
        },
      ],
    })
    .on("setPosition", function () {
      resizeSlider();
    });

  $(window).on("resize", function (e) {
    resizeSlider();
  });

  var slickHeight = $(
    ".Athletes.whoo .slider_wrapper .slick-track"
  ).outerHeight();

  function resizeSlider() {
    $(".Athletes.whoo .slider_wrapper .slick-track")
      .find(".slick-slide .slide_padding")
      .css("height", slickHeight + "px");
  }

  $(".hp_events .slider_wrapper").slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".brand-slider-2").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding: "50px",
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "50px",
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "50px",
          centerMode: true,
        },
      },
    ],
  });

  $("ul.Previou-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".community-grid-slider")
    .slick({
      dots: true,
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            infinite: false,
            slidesToShow: 1.7,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 361,
          settings: {
            infinite: false,
            slidesToShow: 1.16,
            slidesToScroll: 1,
          },
        },
      ],
    })
    .on("setPosition", function () {
      resizeSliderGrid();
    });

  $(window).on("resize", function (e) {
    resizeSliderGrid();
  });

  var slickHeight1 = $(
    ".community_grid_section .community-grid-slider .slick-track"
  ).outerHeight();

  function resizeSliderGrid() {
    // $(".community_grid_section .community-grid-slider .slick-track")
    //   .find(".slick-slide .community-grid")
    //   .css("height", slickHeight1 + "px");
  }
  $(".community-grid-slider").on(
    "afterChange",
    function (event, slick, currentSlide) {
      var modall = $(
        ".popup_btnn[data-slick-index='" + currentSlide + "']"
      ).data("modall");
      $(modall).siblings(".modall").hide();
      $(modall).show();
    }
  );

  // $(".gallery-desktop").slick({
  //   dots: false,
  //   arrows: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: ".gallery-thumb",
  //   prevArrow:
  //     '<div class="slick-prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 20H13M13 20L19.125 14M13 20L19.125 26" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9999 36.6666C29.2046 36.6666 36.6666 29.2046 36.6666 19.9999C36.6666 10.7952 29.2046 3.33325 19.9999 3.33325C10.7952 3.33325 3.33325 10.7952 3.33325 19.9999C3.33325 29.2046 10.7952 36.6666 19.9999 36.6666Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
  //   nextArrow:
  //     '<div class="slick-next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 20H27M27 20L20.875 14M27 20L20.875 26" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9999 36.6666C29.2046 36.6666 36.6666 29.2046 36.6666 19.9999C36.6666 10.7952 29.2046 3.33325 19.9999 3.33325C10.7952 3.33325 3.33325 10.7952 3.33325 19.9999C3.33325 29.2046 10.7952 36.6666 19.9999 36.6666Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
  // });
  // $(".gallery-desktop").on(
  //   "afterChange",
  //   function (event, slick, currentSlide, nextSlide) {
  //     console.log(event);
  //     console.log(slick);
  //     $(".gallery-desktop .slick-current.slick-active")
  //       .find(".product__media-item")
  //       .removeClass("product__media-item--hide-on-load");
  //   }
  // );
  // $(".gallery-thumb").slick({
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   dots: false,
  //   arrows: true,
  //   asNavFor: ".gallery-desktop",
  //   prevArrow:
  //     '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path fill-rule="nonzero" d="M493.12 263.55c4.3 4.28 11.3 4.3 15.62.05 4.33-4.26 4.35-11.19.05-15.47L263.83 3.22c-4.3-4.27-11.3-4.3-15.63-.04L3.21 248.13c-4.3 4.28-4.28 11.21.05 15.47 4.32 4.25 11.32 4.23 15.62-.05L255.99 26.48l237.13 237.07z"/></svg></div>',
  //   nextArrow:
  //     '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="m32.66 5.71 220.49 241.11L479.35 0 512 29.87 253.12 312.36 0 35.58z"/></svg></div>',
  //   responsive: [
  //     {
  //       breakpoint: 99999,
  //       settings: {
  //         slidesToShow: 6,
  //         slidesToScroll: 1,
  //         vertical: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 6,
  //         slidesToScroll: 1,
  //         vertical: true,
  //       },
  //     },
  //     {
  //       breakpoint: 960,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 1,
  //         vertical: true,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         vertical: false,
  //         arrows: false,
  //       },
  //     },
  //     {
  //       breakpoint: 0,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         vertical: false,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });


    // Only initialize slick slider if gallery style is NOT 'grid'
  
  $(".gallery-desktop").each(function() {
    var $gallery = $(this);
    var $container = $gallery.closest('.product__media-container');
    var galleryStyle = $container.data('gallery-style');
    
    // Skip slick initialization if gallery style is 'grid'
    if (galleryStyle !== 'grid') {
      $gallery.slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".gallery-thumb",
        prevArrow:
          '<div class="slick-prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 20H13M13 20L19.125 14M13 20L19.125 26" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9999 36.6666C29.2046 36.6666 36.6666 29.2046 36.6666 19.9999C36.6666 10.7952 29.2046 3.33325 19.9999 3.33325C10.7952 3.33325 3.33325 10.7952 3.33325 19.9999C3.33325 29.2046 10.7952 36.6666 19.9999 36.6666Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
        nextArrow:
          '<div class="slick-next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 20H27M27 20L20.875 14M27 20L20.875 26" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9999 36.6666C29.2046 36.6666 36.6666 29.2046 36.6666 19.9999C36.6666 10.7952 29.2046 3.33325 19.9999 3.33325C10.7952 3.33325 3.33325 10.7952 3.33325 19.9999C3.33325 29.2046 10.7952 36.6666 19.9999 36.6666Z" stroke="#231F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>',
      });
      
      $gallery.on(
        "afterChange",
        function (event, slick, currentSlide, nextSlide) {
          console.log(event);
          console.log(slick);
          $(".gallery-desktop .slick-current.slick-active")
            .find(".product__media-item")
            .removeClass("product__media-item--hide-on-load");
        }
      );
    }
  });
  
  // Only initialize gallery-thumb slick if gallery style is NOT 'grid'
  $(".gallery-thumb").each(function() {
    var $thumb = $(this);
    var $container = $thumb.closest('.product__media-container');
    var galleryStyle = $container.data('gallery-style');
    
    // Skip slick initialization if gallery style is 'grid'
    if (galleryStyle !== 'grid') {
      $thumb.slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        asNavFor: ".gallery-desktop",
        prevArrow:
          '<div class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 266.77"><path fill-rule="nonzero" d="M493.12 263.55c4.3 4.28 11.3 4.3 15.62.05 4.33-4.26 4.35-11.19.05-15.47L263.83 3.22c-4.3-4.27-11.3-4.3-15.63-.04L3.21 248.13c-4.3 4.28-4.28 11.21.05 15.47 4.32 4.25 11.32 4.23 15.62-.05L255.99 26.48l237.13 237.07z"/></svg></div>',
        nextArrow:
          '<div class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 312.36"><path fill-rule="nonzero" d="m32.66 5.71 220.49 241.11L479.35 0 512 29.87 253.12 312.36 0 35.58z"/></svg></div>',
        responsive: [
          {
            breakpoint: 99999,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              vertical: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              vertical: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              vertical: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              vertical: false,
              arrows: false,
            },
          },
          {
            breakpoint: 0,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              vertical: false,
              arrows: false,
            },
          },
        ],
      });
    }
  });


  $(".product-thumbnails__item-1").click(function () {
    let index = $(this).data("index");
    $(".gallery-thumb").slick("slickGoTo", parseInt(index) - 1);
  });
  $(".coll_faq_questions").click(function () {
    $(this).toggleClass("active");
    $(this)
      .parent()
      .find(".coll-icon-span")
      .toggleClass("coll-faq-sign-active");
    $(this).parent().find(".coll_faq_answer").slideToggle();
  });
  $(".slide-1").click(function () {
    var l = $(this).hasClass("vid");
    if (l == false) {
      $(this).parent().find(".active").removeClass("active");
      $(this).addClass("active");
      var kn = "." + $(this).data("id");
      var img = $(kn).find("img");
      var newimg = $(this).data("img");
      $(img).attr("src", newimg);
      $(img).attr("srcset", newimg);
      $(kn).addClass("active");
      var kk = "." + $(this).data("vid-id");
      $(kk).removeClass("active");
      $("video").each(function () {
        $(this).trigger("pause");
      });
      // $(kk).find("video").trigger("pause");
    } else {
      $("video").each(function () {
        $(this).trigger("pause");
      });
      console.log("heey");
      var v = "." + $(this).data("id");
      $(v).addClass("active");
      $(v).find("video").trigger("play");
    }
  });

  $(".video-close-button").click(function () {
    $("video").each(function () {
      $(this).trigger("pause");
    });
    $(".vid-popup").each(function () {
      $(this).removeClass("active");
    });
  });
  $(".play-button-wrapper-product").click(function () {
    if ($(this).hasClass("paused")) {
      let vid = $(".vid-poster");
      $(vid).each(function () {
        $(this).get(0).play();
      });
      $(".play-button-wrapper-product").each(function () {
        $(this).addClass("play");
        $(this).removeClass("paused");
        $(this).css("opacity", "0");
      });
    } else {
      let vids = $(".vid-poster");
      $(vids).each(function () {
        $(this).get(0).pause();
      });
      $(".play-button-wrapper-product").each(function () {
        $(this).removeClass("play");
        $(this).addClass("paused");
        $(this).css("opacity", "1");
      });
    }
  });

  $(".out-of-stock-trigger").click(function () {
    $(".popup-overlay").addClass("active");
    $(".out-of-stock-popup").addClass("active");
  });
  $(".out-of-stock-popup .close-btn").click(function () {
    $(".popup-overlay").removeClass("active");
    $(".out-of-stock-popup").removeClass("active");
  });
  $("#size-type-stock").change(function () {
    let v = $(this).val();
    if (v == "EU") {
      $("#out-of-stock-id-us").removeClass("active");
      $("#out-of-stock-id-eu").addClass("active");
    } else {
      $("#out-of-stock-id-eu").removeClass("active");
      $("#out-of-stock-id-us").addClass("active");
    }
  });

  $("body").on("click", "#submit-btn-stock", function (e) {
    var email = $("#notify-email").val();
    var vid = 0;
    if ($("#size-type-stock").val() == "EU") {
      vid = parseInt($("#out-of-stock-id-eu").val());
    } else {
      vid = parseInt($("#out-of-stock-id-us").val());
    }

    $(".thank-msg").hide();

    if (email != "") {
      $.ajax({
        type: "POST",
        url: "https://a.klaviyo.com/onsite/components/back-in-stock/subscribe",
        data: {
          a: "R3QQkY",
          email: email,
          variant: vid,
          platform: "shopify",
        },
        success: function (response) {
          console.log(response);
        },
        error: function (response) {
          console.log(response);
        },
      });
      setTimeout(function () {
        $(".thank-msg").show();
      }, 1000);
    }
  });

  $(".featured-collection-slider__products.carousel__wrapper").slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerPadding: "0px",
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "50px",
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "50px",
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".coll-testimonial-detail").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<div class="slick-prev"><img src="https://www.azzafencing.com/cdn/shop/files/icon_e2881b38-1d03-47e8-922c-865e21b5e690.png?v=1717840646"></div>',
    nextArrow:
      '<div class="slick-next"><img src="https://www.azzafencing.com/cdn/shop/files/icon_1_542875cd-099e-4b91-902c-cafe6b85c2bc.png?v=1717841055"></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#filter-size").change(function () {
    let k = $(this).val();
    if (k == "EU") {
      $(".eu-filter").each(function () {
        $(this).addClass("active");
      });
      $(".us-filter").each(function () {
        $(this).removeClass("active");
      });
    } else {
      $(".eu-filter").each(function () {
        $(this).removeClass("active");
      });
      $(".us-filter").each(function () {
        $(this).addClass("active");
      });
    }
  });
  $(".filter-group__label").click(function () {
    $(".modal__wash_popup").addClass("active");
  });
  $(".filter-bar__button").click(function () {
    $(".modal__wash_popup").addClass("active");
    $("#filter-bar-sort").attr("aria-hidden", false);
  });
  $(".filter-close").click(function () {
    $(".modal__wash_popup").removeClass("active");
    $(".filter-group__values").each(function () {
      $(this).attr("aria-hidden", true);
    });
    $(".filter-group__label").each(function () {
      $(this).attr("aria-hidden", false);
    });
  });
  $(".modal__wash_popup").click(function () {
    $(".modal__wash_popup").removeClass("active");
    $(".filter-group__values").each(function () {
      $(this).attr("aria-hidden", true);
    });
    $(".filter-group__label").each(function () {
      $(this).attr("aria-hidden", false);
    });
  });
  $("#filter-bar-sort .filter-item").click(function () {
    $(".modal__wash_popup").removeClass("active");
    $(".filter-group__values").each(function () {
      $(this).attr("aria-hidden", true);
    });
    $(".filter-group__label").each(function () {
      $(this).attr("aria-hidden", false);
    });
  });

  $(".Athletes .slider_wrapper")
    .slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: "0px",
      centerMode: true,

      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            centerPadding: "50px",
            centerMode: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            centerPadding: "50px",
            centerMode: true,
          },
        },
        {
          breakpoint: 361,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerPadding: "50px",
            centerMode: true,
            arrows: false,
          },
        },
      ],
    })
    .on("setPosition", function () {
      resizeSlider();
    });

    
    // Hide pagination dots on mobile carousel and ensure proper spacing
    function updateMobileCarousel() {
      if (window.matchMedia("(max-width: 991px)").matches) {
        // Hide pagination dots
        $(".product__media-container.below-mobile .swiper-pagination, .product__media-container.below-mobile-1 .swiper-pagination").hide();
        
        // Update Swiper configuration to show peek of next image
        $(".product__media-container.below-mobile-1.carousel.swiper").each(function() {
          var $swiper = $(this);
          var swiperInstance = this.swiper || $swiper.data('swiper');
          
          if (swiperInstance && swiperInstance.params) {
            var needsUpdate = false;
            
            // Update slidesPerView to show peek (1.1 means 1 full slide + 10% of next)
            if (swiperInstance.params.slidesPerView !== 1.1) {
              swiperInstance.params.slidesPerView = 1.1;
              needsUpdate = true;
            }
            
            // Update spaceBetween for spacing between slides
            if (swiperInstance.params.spaceBetween !== 12) {
              swiperInstance.params.spaceBetween = 17;
              needsUpdate = true;
            }
            
            // Disable infinite loop
            if (swiperInstance.params.loop !== false) {
              swiperInstance.params.loop = false;
              needsUpdate = true;
            }
            
            if (needsUpdate) {
              swiperInstance.update();
            }
          }
        });
      }
    }
    
    // Run on load and resize
    updateMobileCarousel();
    $(window).on("resize", function() {
      updateMobileCarousel();
    });
    
    // Also run after delays to catch Swiper initialization at different stages
    setTimeout(function() {
      updateMobileCarousel();
    }, 500);
    
    setTimeout(function() {
      updateMobileCarousel();
    }, 1000);
    
    setTimeout(function() {
      updateMobileCarousel();
    }, 2000);
    
    // Custom Size Selector Functionality
    let sizeSelectorInitialized = false;
    function initCustomSizeSelector() {
      console.log("Initializing Custom Size Selector");
      const sizeSelectorBtn = document.querySelector('[data-size-selector-btn]');
      console.log("Size Selector Button:", sizeSelectorBtn);
      const sizeDropdown = document.querySelector('[data-size-dropdown]');
      console.log("Size Dropdown:", sizeDropdown);
         window.addEventListener('load', () => {
            const sizeOptions = document.querySelectorAll('[data-size-option]');
            const selectedSizeText = document.querySelector('[data-selected-size-text]');

            sizeOptions.forEach(opt => opt.classList.remove('size-option-selected'));

             // Set default button text
            if (selectedSizeText) {
              selectedSizeText.textContent = 'Select A Size';
            }

            console.log('Cleared size selection on window load');
          });

      
      if (!sizeSelectorBtn || !sizeDropdown) {
        return; // Elements not found yet
      }
      
      // Prevent multiple initializations
      if (sizeSelectorBtn.hasAttribute('data-initialized')) {
        return; // Already initialized
      }
      sizeSelectorBtn.setAttribute('data-initialized', 'true');
      
      const sizeDropdownClose = document.querySelector('[data-size-dropdown-close]');
      const sizeOptions = document.querySelectorAll('[data-size-option]');
      const selectedSizeText = document.querySelector('[data-selected-size-text]');
      console.log("Size Options:", sizeOptions);
      console.log("Selected Size Text:", selectedSizeText);
      const hiddenSelect = document.querySelector('.custom-size-selector-wrapper select');
      
      // Toggle dropdown - use event listener
      sizeSelectorBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        const isActive = sizeDropdown.classList.contains('active');
        if (isActive) {
          sizeDropdown.classList.remove('active');
          sizeSelectorBtn.classList.remove('active');
        } else {
          sizeDropdown.classList.add('active');
          sizeSelectorBtn.classList.add('active');
        }
      }, false);
      
      // Close dropdown
      if (sizeDropdownClose) {
        sizeDropdownClose.addEventListener('click', function(e) {
          e.stopPropagation();
          e.preventDefault();
          sizeDropdown.classList.remove('active');
          sizeSelectorBtn.classList.remove('active');
        }, false);
      }
      
      // Switch between EU and US sizes using dropdown
      const sizeTypeDropdown = document.querySelector('[data-size-type-dropdown]');
      if (sizeTypeDropdown) {
        // Initialize with EU
        if (!sizeTypeDropdown.value) {
          sizeTypeDropdown.value = 'EU';
        }
        
        sizeTypeDropdown.addEventListener('change', function() {
          const sizeType = this.value;
          
          // Show/hide appropriate size numbers
          sizeOptions.forEach(function(option) {
            const euDisplay = option.querySelector('.eu-size-display');
            const usDisplay = option.querySelector('.us-size-display');
            
            if (sizeType === 'EU') {
              if (euDisplay) euDisplay.style.display = 'inline';
              if (usDisplay) usDisplay.style.display = 'none';
            } else {
              if (euDisplay) euDisplay.style.display = 'none';
              if (usDisplay) usDisplay.style.display = 'inline';
            }
          });
        }, false);
        
        // Trigger initial change
        sizeTypeDropdown.dispatchEvent(new Event('change'));
      }

      // Handle size option selection
      sizeOptions.forEach(function(option) {
        
        option.addEventListener('click', function(e) {
          // Don't trigger if clicking on notify me button
          if (e.target.classList.contains('notify-me-btn') || e.target.closest('.notify-me-btn')) {
            return;
          }
          
          const optionValue = this.getAttribute('data-option-value');
          const isAvailable = this.getAttribute('data-is-available') === 'true';
          
          if (!isAvailable) {
            return; // Don't select unavailable sizes
          }
          
          e.stopPropagation();
          
          // Update selected state
          sizeOptions.forEach(opt => opt.classList.remove('size-option-selected'));
          this.classList.add('size-option-selected');
          
          // Update button text
          const activeSizeType = sizeTypeDropdown ? sizeTypeDropdown.value : 'EU';
          const sizeNumber = activeSizeType === 'EU' 
            ? this.getAttribute('data-eu-size') 
            : this.getAttribute('data-us-size');
          
          if (selectedSizeText) {
            selectedSizeText.textContent = sizeNumber;
          }
          
          // Update hidden select
          if (hiddenSelect) {
            hiddenSelect.value = optionValue;
            hiddenSelect.dispatchEvent(new Event('change', { bubbles: true }));
          }
          
          // Trigger variant change if ProductForm exists
          if (window.ProductForm && window.ProductForm.instances && window.ProductForm.instances.length > 0) {
            const productForm = window.ProductForm.instances[0];
            if (productForm && productForm.onOptionChange) {
              const optionHandle = this.getAttribute('data-option-handle');
              productForm.onOptionChange({ target: { value: optionValue, dataset: { optionHandle: optionHandle } } });
            }
          }
          
          // Close dropdown
          sizeDropdown.classList.remove('active');
          sizeSelectorBtn.classList.remove('active');
        }, false);
      });
      
      // Handle "Notify me" button clicks
      document.querySelectorAll('[data-notify-me]').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
          e.stopPropagation();
          e.preventDefault();
          const variantId = this.getAttribute('data-variant-id');
          
          // Open the existing out-of-stock popup
          $('.out-of-stock-popup').addClass('active');
          $('.popup-overlay').addClass('active');
          $('body').addClass('footer_modal_body');
          
          // Set the variant ID in the form if needed
          if (variantId && variantId !== '0') {
            const euSelect = document.getElementById('out-of-stock-id-eu');
            const usSelect = document.getElementById('out-of-stock-id-us');
            if (euSelect) {
              euSelect.value = variantId;
              $(euSelect).trigger('change');
            }
          }
        }, false);
      });
      
      // Set initial selected size if one is already selected
      if (hiddenSelect && hiddenSelect.value) {
        const selectedOption = Array.from(sizeOptions).find(opt => 
          opt.getAttribute('data-option-value') === hiddenSelect.value
        );
        if (selectedOption) {
          const activeSizeType = sizeTypeDropdown ? sizeTypeDropdown.value : 'EU';
          const sizeNumber = activeSizeType === 'EU' 
            ? selectedOption.getAttribute('data-eu-size') 
            : selectedOption.getAttribute('data-us-size');
          if (selectedSizeText) {
            selectedSizeText.textContent = sizeNumber;
          }
          selectedOption.classList.add('size-option-selected');
        }
      }
      
      // Handle Size Guide link click to open information popup
      const sizeGuideLink = document.querySelector('[data-size-guide-link]');
      if (sizeGuideLink && sizeGuideLink.classList.contains('product__information-popup')) {
        sizeGuideLink.addEventListener('click', function(e) {
          e.preventDefault();
          const modalId = this.getAttribute('data-modal-content-id');
          if (modalId) {
            // Trigger the modal using the existing modal system
            const modalTrigger = document.querySelector('[data-popup-trigger][data-modal-content-id="' + modalId + '"]');
            if (modalTrigger) {
              modalTrigger.click();
            }
          }
        }, false);
      }
      
    }
    
    // Close dropdown when clicking outside (single global listener)
    if (!window.sizeSelectorClickOutsideHandler) {
      window.sizeSelectorClickOutsideHandler = function(e) {
        const sizeDropdown = document.querySelector('[data-size-dropdown].active');
        const sizeSelectorBtn = document.querySelector('[data-size-selector-btn].active');
        if (sizeDropdown && sizeSelectorBtn) {
          if (!sizeDropdown.contains(e.target) && !sizeSelectorBtn.contains(e.target)) {
            sizeDropdown.classList.remove('active');
            sizeSelectorBtn.classList.remove('active');
          }
        }
      };
      document.addEventListener('click', window.sizeSelectorClickOutsideHandler);
    }
    
    // Initialize custom size selector when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCustomSizeSelector);
    } else {
      initCustomSizeSelector();
    }
    
    // Also initialize after delays to catch dynamic content
    setTimeout(initCustomSizeSelector, 500);
    setTimeout(initCustomSizeSelector, 1000);
    setTimeout(initCustomSizeSelector, 2000);
});

// Function to update accordion icons based on state
function updateAccordionIcons() {
  document.querySelectorAll('.accordion__label').forEach(function(label) {
    const isExpanded = label.getAttribute('aria-expanded') === 'true';
    const plusIcon = label.querySelector('.accordion-icon-plus');
    const minusIcon = label.querySelector('.accordion-icon-minus');
    
    if (plusIcon && minusIcon) {
      if (isExpanded) {
        plusIcon.style.display = 'none';
        minusIcon.style.display = 'block';
      } else {
        plusIcon.style.display = 'block';
        minusIcon.style.display = 'none';
      }
    }
  });
}

// Update icons on accordion toggle
document.addEventListener('click', function(e) {
  const label = e.target.closest('.accordion__label');
  if (label) {
    setTimeout(function() {
      // Keep only one accordion open in Product Details (mobile accordions)
      // Scope this behavior so other theme accordions are not affected.
      const isExpanded = label.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        const group =
          label.closest('.product-tabs__mobile-accordions') ||
          label.closest('.product__details');

        if (group) {
          group
            .querySelectorAll('.accordion__label[aria-expanded="true"]')
            .forEach(function(otherLabel) {
              if (otherLabel !== label) otherLabel.click();
            });
        }
      }

      updateAccordionIcons();
    }, 100);
  }
});

// Fix for size guide popup - handle clicks on SVG inside links
// This fixes the issue where clicking the SVG doesn't trigger the popup
(function() {
  function initSizeGuideFix() {
    // Use event delegation to handle clicks on size guide links
    document.addEventListener('click', function(e) {
      // Check if clicked element or its parent is a size guide link with popup trigger
      const sizeGuideLink = e.target.closest('[data-popup-trigger][data-modal-content-id]');
      if (sizeGuideLink) {
        e.preventDefault();
        e.stopPropagation();
        
        const modalContentId = sizeGuideLink.getAttribute('data-modal-content-id');
        if (modalContentId) {
          // Find the modal content element
          const content = document.querySelector('#' + modalContentId);
          if (content) {
            // Use theme's event system if available
            if (typeof window.flu !== 'undefined' && window.flu.events && typeof window.flu.events.trigger === 'function') {
              window.flu.events.trigger('modal:open', {
                modalContent: content
              });
            } else if (typeof document.dispatchEvent !== 'undefined') {
              // Fallback: dispatch custom event that theme listens to
              const event = new CustomEvent('modal:open', {
                detail: {
                  modalContent: content
                }
              });
              document.dispatchEvent(event);
            }
          }
        }
        return false;
      }
    }, true); // Use capture phase to ensure we catch it early
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSizeGuideFix);
  } else {
    initSizeGuideFix();
  }
})();
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.href.includes('/fr')) {
    const link = document.querySelector('li a[href="https://www.azzafencing.com/apps/track123"]');
    if (link) {
      link.href = 'https://www.azzafencing.com/fr/apps/track123';
      link.setAttribute('data-img', 'https://www.azzafencing.com/fr/apps/track123');
    }
  }
});


