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


  $("#work4").hover(
    function() {
      $(".overlay4").css("display", "block");
    },
    function() {
      $(".overlay4").css("display", "none");
    });

  $("#work3").hover(
    function() {
       $(".overlay3").css("display", "block");
      },
    function() {
       $(".overlay3").css("display", "none");
      });

  $("#work2").hover(
    function() {
      $(".overlay2").css("display", "block");
        },
    function() {
      $(".overlay2").css("display", "none");
     });

  $("#work1").hover(
    function() {
      $(".overlay1").css("display", "block");
       },
    function() {
      $(".overlay1").css("display", "none");
       });
  
  $("#work5").hover(
    function() {
      $(".overlay5").css("display", "block");
         },
    function() {
      $(".overlay5").css("display", "none");
        });
  $("#work6").hover(
    function() {
      $(".overlay6").css("display", "block");
          },
    function() {
      $(".overlay6").css("display", "none");
       });

  $("#work7").hover(
    function() {
      $(".overlay7").css("display", "block");
        },
    function() {
      $(".overlay7").css("display", "none");
       });
  
  $("#work8").hover(
    function() {
      $(".overlay8").css("display", "block");
       },
    function() {
      $(".overlay8").css("display", "none");
        });

 });


