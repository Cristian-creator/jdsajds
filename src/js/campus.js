const campus = () => {
    $('.campus > .slick-container > .slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 800,
        prevArrow: $('.campus > .slick-container .buttons .prev'),
        nextArrow: $('.campus > .slick-container .buttons .next'),
        responsive: [
            {
              breakpoint: 1775,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 624,
                settings: {
                  slidesToShow: 1,
                  centerMode: true
                }
            },
            {
                breakpoint: 520,
                settings: {
                  slidesToShow: 1
                }
            }
          ]
    });
};

export default campus;
