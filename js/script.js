$(document).ready(function() {
  $("#designimg").click(function() {
    $("#designimg").hide();
    $(".p-design").show();
  });
  $(".p-design").click(function() {
    $(".p-design").hide();
    $("#designimg").show();
  });
  $("#devtimg").click(function() {
    $("#devtimg").hide();
    $(".p-devt").show();
  });
  $(".p-devt").click(function() {
    $(".p-devt").hide();
    $("#devtimg").show();
  });
  $("#productimg").click(function() {
    $("#productimg").hide();
    $(".p-product").show();
  });
  $(".p-product").click(function() {
    $(".p-product").hide();
    $("#productimg").show();
  });

});