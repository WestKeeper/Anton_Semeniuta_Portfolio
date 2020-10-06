$(document).ready(function(){
  $('.slider__customer').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left-cust'),
    nextArrow: $('.arrows__right-cust'),
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

});