var hamburgerIcon = $(".fa-bars");

var closeIcon = $(".fa-times");

var hambMenu = $(".hamburger-menu");

hamburgerIcon.click(
  function() {
    hambMenu.fadeIn(600);
  }
);

closeIcon.click(
  function() {
    hambMenu.fadeOut(600);
  }
);
