document.getElementById("popup-form").addEventListener(
  "submit",
  function(evt) {
    var http = new XMLHttpRequest(),
      f = this;
    evt.preventDefault();
    http.open("POST", "contacts.php", true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.send(
      "name=" +
        f.name.value +
        "&mail=" +
        f.mail.value +
        "&phone=" +
        f.phone.value +
        "&message=" +
        f.message.value
    );
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        alert(
          http.responseText +
            ", Ваше сообщение получено.\nЯ отвечу Вам в течении 2-х дней.\nБлагодарю за доверие!"
        );
        f.message.removeAttribute("value"); // очистить поле сообщения (две строки)
        f.message.value = "";
      }
    };
    http.onerror = function() {
      alert("Извините, данные не были переданы");
    };
  },
  false
);
$(() => {
  $(".popup-link").click(() => {
    $(".popup-wrapper").css("display", "flex");
    return false;
  });
  $(".popup-wrapper").click(function(e) {
    if (this === e.target) {
      $(".popup-wrapper").css("display", "none");
    }
  });
  // начало кода слайдер Slick
  $(".slider-nav").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: "<div class='left-arrow'></div>",
    nextArrow: "<div class='right-arrow'></div>",
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 897,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          mobileFirst: true
        }
      }
    ]
  });
  // конец кода слайдер Slick
  // код меню при 320px
  const toggleMenu = document.querySelector(".header__toogle-menu");
  const headerNav = document.querySelector(".header__nav");
  toggleMenu.addEventListener("click", e => {
    if (headerNav.style.display === "none") {
      headerNav.style.display = "block";
      e.target.classList.remove("icon-menu");
      e.target.classList.add("icon-cancel-1");
    } else {
      headerNav.style.display = "none";
      e.target.classList.remove("icon-cancel-1");
      e.target.classList.add("icon-menu");
    }
  });
  $(window).resize(() => {
    var windowWidth = $(window).width();
    if (windowWidth > 704) {
      var bgPositionEllipse = windowWidth - windowWidth / 1.7;
    } else if (windowWidth >= 337 && windowWidth <= 704) {
      var bgPositionEllipse = windowWidth - 397;
    } else if (windowWidth < 337) {
      var bgPositionEllipse = -60;
    }
    $(".about-me").css("background-position-x", bgPositionEllipse + "px");

    if ($(".header__toogle-menu").css("display") == "none") {
      $(".header__nav").show();
      $(".header__toogle-menu").removeClass("icon-menu");
      $(".header__toogle-menu").addClass("icon-cancel-1");
    } else {
      $(".header__nav").hide();
      $(".header__toogle-menu").removeClass("icon-cancel-1");
      $(".header__toogle-menu").addClass("icon-menu");
    }
  });
});
