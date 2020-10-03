$(document).ready(function () {
  $(document).foundation();

  $(".faq").click(function () {
    $(".faq").css("height", "auto");
    $(".info").hide();
    $(".arrow").attr("src", "img/arrow.png");
    $(this).css("height", "auto");
    $(".info", this).show();
    $(".arrow", this).attr("src", "img/arrow_down.png");
  });

  $(".testimonials").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });


  // CSS function
  function menuScrolledOnMobile () {
    $("#menu-fixed-container a").css({ display: "none" });
    $("#logo-fix-mobile").css({ display: "initial" });
    $("#logo-fix-desktop").css({ display: "none" });
    $("#hero .input-group").css({ marginTop: "26px" });
  };

  function menuTopOnMobile () {
    $(".menu-fixed").css({ position: "initial" });
    $("#menu-fixed-container a").css({ display: "none" });
    $("#logo-fix-mobile").css({ display: "none" });
  };

  function menuScrolledOnDesktop () {
    $("#menu-fixed-container a").css({ display: "initial" });
    $("#logo-fix-mobile").css({ display: "none" });
    $("#logo-fix-desktop").css({ display: "initial" });
    $("#hero .input-group").css({ marginTop: "15px" });
    $("#menu-fixed-container .input-group>:first-child").css({ minWidth: "20rem" });


  };

  function menuTopOnDesktop () {
    $(".menu-fixed").css({ position: "initial" });
    $(".menu-fixed").css({ height: "auto" });
    $("#menu-fixed-container a").css({ display: "none" });
    $("#logo-fix-mobile").css({ display: "none" });
    $("#logo-fix-desktop").css({ display: "none" });
    $("#hero .input-group").css({ marginTop: "56px" });
    $("#menu-fixed-container .input-group>:first-child").css({ display: "initial" });
  };


  // function for the sticky Nav of the Home page
  function sticktothetop() {
    var window_top = $(window).scrollTop();
    var top = $("#hero").offset().top;
    if (window_top > top + 500) {
      $(".menu-fixed").css({ position: "fixed" });
      if (window.innerWidth < 1024) {
        menuScrolledOnMobile();
      } else if (window.innerWidth >= 1024) {
        menuScrolledOnDesktop();
      }
    } else if (window_top < top + 500 && window.innerWidth < 1024) {
      menuTopOnMobile();
    } else if (window_top < top + 500 && window.innerWidth >= 1024) {
      menuTopOnDesktop();
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 270) {
      $(".menu-fixed").css({ display: "none" });
    }else 
      $(".menu-fixed").css({ display: "flex" });
  }

  $(function () {
    $(window).scroll(sticktothetop);
    sticktothetop();
  });
});
