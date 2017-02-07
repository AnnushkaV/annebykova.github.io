$(function() {
    $('#videos-without-poster').lightGallery();
    $(".content-slider").lightSlider({
        loop:true,
        keyPress:true,
        item: 4,
        slideMove: 1,
        speed: 400, //ms'
        auto: true,
        loop: true,
        pauseOnHover: true,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                }
            }
        ]
    });
});
