jQuery(document).ready(function($) {
  "use strict";

  $(document).foundation();


  if($('form#contact_form').length > 0) {
    $('form#contact_form').validate({
      messages: { },
      submitHandler: function(form) {
        $.ajax({
          type: 'POST',
          url: 'send.php',
          data: $(form).serialize(),
          success: function(data) {
            if(data.match(/success/)) {
              $(form).trigger('reset');
              $('#thanks').show().fadeOut(5000);
            }
          }
        });
        return false;
      }
    });
  }

  new WOW().init();

  $(document).scroll(function(){
    if ( $(window).width() <= 1024 ) { return }

    if($(this).scrollTop() >= 100) {
      $('.big-nav').fadeOut();
    } else {
      $('.big-nav').fadeIn();
    }
  });

  // need this to fix for firefox
  $('#slides').on('init.slides', function() {
    var that = this;
    setTimeout(function() {
      $('.slides-container', that).children().eq(0).addClass('active');
    }, 300);
  });

  $('#slides').superslides({
    animation: 'fade',
    hashchange: false,
    // play: 6000
  });

  $('#slides').on('animated.slides', function() {
    $('.slides-container', this).children().removeClass('active');

    var index = $(this).superslides('current');
    var that = this;

    setTimeout(function() {
      $('.slides-container', that).children().eq(index).addClass('active');
    }, 300);

  });

  $('.boxed-slides').slick({
    autoplay: true,
    pauseOnHover: false,
    dots: true,
    speed: 1500,
    arrows: false
  });


  $('.title-area .logo-nav').hover(
    function() {
      $('.small-nav').addClass('active');
    },
    function() {
      $('.small-nav').removeClass('active');
    }
  );

  $('.touch .title-area .logo-nav > a').on('click', function(e) {
    e.preventDefault();
    $('.small-nav').addClass('active');
  });

  $('*').on('click', function(e) {
    var target = e.target;

    if ($.contains(target, $('.title-area .logo-nav > a')[0])) {
      $('.small-nav').removeClass('active');
    }
  });

  setTimeout(function() {
    $('.title-area .logo-nav').width($('.title-area .logo-nav a').width());
  }, 100);

  $('.fadeinleft, .fadeinright, .fadein, .popin, .moveup, .diamond-milestones-wrapper').appear(function() {
    var delay = $(this).data('delay');
    var that = this;

    setTimeout(function() {
      $(that).addClass('appear');
    }, delay)

  });

  $('.images').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
   variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});