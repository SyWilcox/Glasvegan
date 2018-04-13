
// Scroll to Relevant Menu Item

$('#menu2').click(function() {
    $('html, body').animate({
        scrollTop: $('#glasethos').offset().top -20
    }, 500);
});

$('#menu3').click(function() {
    $('html, body').animate({
        scrollTop: $('#contact-header').offset().top -20
    }, 500);
});
