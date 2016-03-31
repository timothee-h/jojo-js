$( document ).ready(function() {
  // user section
    $('.header--nav--user').hide();
    $( "#user" ).hover(function() {
      $('.header--nav--user').fadeIn();
    });
    $("div:not(#user, .header--nav--user),section:not(#user, .header--nav--user)").hover(function() {
      $('.header--nav--user').fadeOut();
    });
  // scroll to
    $('.scrollTo').click( function() {
			var page = $(this).attr('href');
			var speed = 750;
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
			return false;
		});
  // menu
  $('#btn-nav').click(function(){
    if ($('.header').hasClass('show')) {
      $('.header').animate({ marginTop: '0px'}, 400);
      $('.header--nav--btn--line').removeAttr('id', 'close');
      setTimeout(function(){
        $('.header').removeClass('show');
      }, 400);
    }
    else {
      $('.header').animate({ marginTop: '255px'}, 400).addClass('show');
      $('.header--nav--btn--line').attr('id', 'close');
    }
  });
  //cover
  function HeightBackground(){
  	var height = $(window).height();
  	$("#cover").css({
  		'height': height
  	});
  }
  HeightBackground();
  $(window).resize(function(){
  	HeightBackground();
  });
  //card
  $( ".exo--item--1--content--btn" ).click(function() {
    $('.exo--card--1').fadeIn();
  });
  $( ".exo--item--2--content--btn" ).click(function() {
    $('.exo--card--2').fadeIn();
  });
  $( ".exo--item--3--content--btn" ).click(function() {
    $('.exo--card--3').fadeIn();
  });
  $(".exo--card--1--close").click(function() {
    $('.exo--card--1').fadeOut();
  });
  $(".exo--card--2--close").click(function() {
    $('.exo--card--2').fadeOut();
  });
  $(".exo--card--3--close").click(function() {
    $('.exo--card--3').fadeOut();
  });
  //parallax
  $('.banner--primary').parallax("50%", 0.2);
});
