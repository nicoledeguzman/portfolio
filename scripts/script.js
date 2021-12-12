$(document).ready(function(){
    $('.gallery').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        cssEase: 'ease-out',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 7
              }
            },
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 6,
              }
            },
            {
              breakpoint: 875,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 725,
              settings: {
                slidesToShow: 4,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 175,
                settings: {
                  slidesToShow: 1,
                }
            }
          ]
    });
  });