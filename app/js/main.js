$(function () {
  $('.gallery__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  
});

