var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function () {
    li_elements.forEach(function (li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function (item) {
      item.style.display = "none";
    });
    if (li_value == "year2") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "year3") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "year4") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "year5") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "year6") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "year7") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "year8") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "year9") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "year10") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "year11") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "year12") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}

$(".carousel-d-blog-1").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
    1200: {
      items: 4,
      nav: false,
    },
  },
});
$(".carousel-d-blog").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
    1200: {
      items: 4,
      nav: false,
    },
  },
});
$(".carousel-d-blog-1-2").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
    },
  },
});
/**/
var div_elements = document.querySelectorAll(
  ".container .wrappe-bottom .div-card-4 .card-items div"
);
var items1_elements = document.querySelectorAll(
  ".container .wrappe-top .items1"
);
for (var i = 0; i < div_elements.length; i++) {
  div_elements[i].addEventListener("click", function () {
    div_elements.forEach(function (div) {
      div.classList.remove("active");
    });
    this.classList.add("active");
    var div_value = this.getAttribute("data-div");
    items1_elements.forEach(function (items1) {
      items1.style.display = "none";
    });
    if (div_value == "card1") {
      document.querySelector("." + div_value).style.display = "block";
    } else if (div_value == "card2") {
      document.querySelector("." + div_value).style.display = "block";
    } else if (div_value == "card3") {
      document.querySelector("." + div_value).style.display = "block";
    } else if (div_value == "card4") {
      document.querySelector("." + div_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}
