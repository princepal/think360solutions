// Section background color change on top
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".light-mode");
  const header = document.querySelector("header");

  const headerHeight = header ? header.offsetHeight : 0;

  document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY + headerHeight;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        section.classList.add("bg-light");
      } else {
        section.classList.remove("bg-light");
      }
    });
  });
});

// header fixed script
let didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".header-wrapper").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 150);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

// video section script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("id-8KnjgM4cK8A", {
    width: "100%",
    videoId: "8KnjgM4cK8A",
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      loop: 1,
      autohide: 0,
      mute: 1,
      playsinline: 1,
      playlist: "8KnjgM4cK8A",
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}
function onPlayerReady(event) {
  event.target.setVolume(50);
  event.target.playVideo();
}

// client logo section slider
$(".client-branding").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

// They Love Us section hover effect
let gridLayer = document.getElementById("grid-layer");
if (gridLayer) {
  gridLayer.onmousemove = (e) => {
    for (const card of document.getElementsByClassName("user_Grid")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
}
