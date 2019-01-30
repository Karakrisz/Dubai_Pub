$(document).ready(run);

function run() {
  var MENU_HEIGHT = parseInt($("nav").css("height"));
  var SCROLL_TIME = 1000;

  $(".scroll").click(menuClick);
  
  function menuClick(event) {
    event.preventDefault();
    var id = $(this).attr("href");
    $("html, body").animate({"scrollTop": $(id).offset().top - MENU_HEIGHT}, SCROLL_TIME);
    if ($(".navbar-collapse").length > 0) {
      $(".navbar-collapse").collapse("hide");
    }
  }
}
