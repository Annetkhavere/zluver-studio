$(document).ready(function() {
// what we do section
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

// portfolio section
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

// form section
let form = document.getElementById('form');

form.addEventListener("submit", function(event) {
  event.preventDefault(); //cancel the default behavior for the event.
  popUp();
});
 
function popUp () {
  let nameInput = document.getElementById('name').value;
  let emailInput = document.getElementById('email').value;
  let messageInput = document.getElementById('message').value;

  if(nameInput == "") {
    alert("Please insert your name to proceed");
  } else if(emailInput == "") {
    alert("Please insert your email to proceed");
  } else if(messageInput == "") {
    alert("Please insert your message to submit");
  } else {
  alert("We have received your message "+ nameInput  + ". Thank you for reaching out to us");
  }
}

 });


