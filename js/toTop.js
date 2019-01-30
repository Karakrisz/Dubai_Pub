$(document).ready(run);

function run() {
  var GOMBSZIN = "#cecece";
  $("body").append('<div id="toTop"><div></div></div>');
  $("#toTop div").css({
    "border-left": "solid 10px "+GOMBSZIN,
    "border-right": "solid 10px "+GOMBSZIN,
    "border-bottom": "solid 18px white",
    "width": 0
  });
  $("#toTop").css({
    "background-color": GOMBSZIN,
    "padding": "8px",
    "position": "fixed",
    "left": "50px",
    "bottom": "50px",
//    "border-radius": "50%",
    "cursor": "pointer",
    "display": "none"
  });
  
  toTopSetup();
  $(window).scroll(toTopSetup);
  $(window).resize(toTopSetup);
  $("#toTop").click(gotoTop);
  
  function toTopSetup() {
    $(window).scrollTop() > 100 ? $("#toTop").show() : $("#toTop").hide();
  }

  function gotoTop() {
    $("html, body").animate({"scrollTop": 0}, 1000);
  }
}
