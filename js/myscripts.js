// Toggle Off-Screen Menu

$(document).ready(function() {
  $('.menu-icon').click(function() {
    $('#off-screen').animate({
      marginTop : "0px"
    }, 500, 'swing');
    $('.menu-icon').css("display", "none");
    $('.menu-icon-close').css("display", "block");
  });

  $('.menu-icon-close').click(function() {
    $('#off-screen').animate({
      marginTop : "-200px"
    }, 500, 'swing');
    $('.menu-icon').css("display", "block");
    $('.menu-icon-close').css("display", "none");
  });
});

// Scroll to Relevant Menu Item

$('#menu1').click(function() {
    $('html, body').animate({
        scrollTop: $('#current').offset().top -20
    }, 500);
});

$('#menu2').click(function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top -20
    }, 500);
});

$('#menu3').click(function() {
    $('html, body').animate({
        scrollTop: $('#say').offset().top -20
    }, 500);
});

// Flicker Letter
function flicker() {
  $('.flicker').animate({opacity: "0.1"}, 10, function() {
    $('.flicker').delay(100).animate({opacity: "0.8"}, 10, function() {
      $('.flicker').animate({opacity: "0.2"}, 100, function() {
        $('.flicker').animate({opacity: "0.9"}, 20);
      })
    })
})
}

function flicker2() {
  $('.flicker2').animate({opacity: "0.1"}, 10, function() {
    $('.flicker2').delay(1000).animate({opacity: "0.8"}, 10, function() {
      $('.flicker2').animate({opacity: "0.2"}, 100, function() {
        $('.flicker2').animate({opacity: "0.9"}, 20, function() {
          $('.flicker2').animate({opacity: "0.2"}, 300), function() {
            $('.flicker2').delay(1000).animate({opacity: "1"}, 500);
          };
        });
      })
    })
})
}

$(document).ready(function() {
  setInterval(function(){
    flicker();
  }, 4000);
  setInterval(function(){
    flicker2();
  }, 4000);
})

// Hexagons Menu Hover

$('#menu1').hover(function() {
  $('#hex1').css("opacity", "1");
  $('.r1').animate({left: "9px"}, 200);
}, function()  {
  $('#hex1').animate({opacity: 0}, 600);
  $('.r1').animate({left: "0px"}, 400);
})

$('#menu2').hover(function() {
  $('#hex2').css("opacity", "1");
  $('.b1').animate({left: "9px"}, 200);
}, function()  {
  $('#hex2').animate({opacity: 0}, 600);
  $('.b1').animate({left: "0px"}, 400);
})

$('#menu3').hover(function() {
  $('#hex3').css("opacity", "1");
  $('.o1').animate({left: "9px"}, 200);
}, function()  {
  $('#hex3').animate({opacity: 0}, 600);
  $('.o1').animate({left: "0px"}, 400);
})

// Easter Egg
let count = 0;

$('#easter').click(function() {
  count++;
  if (count > 4) {
    count = 0;
     window.open("http://www.pacman1.net/");
  }
});
