	$(document).ready(function(){
  $('.features-slider').slick({
  	prevArrow: '.arrow_prev',
    nextArrow: '.arrow_next',
  	infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});