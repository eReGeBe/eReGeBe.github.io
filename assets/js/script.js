$(function () {
  // focus on search input with '/' key.
  $("body").on("keyup", function (e) {
    e.stopPropagation();
    var slashKeys = [47, 111, 191];
    if (slashKeys.some(function (value) { return e.keyCode == value })) {
      $("#search").focus();
    }
  });

  // stick aside.
  var topSpacing = $(".site-aside").css("padding-top").replace(/px/, "");
  $(".site-aside .sticky").sticky({
    topSpacing: parseInt(topSpacing)
  });
});
