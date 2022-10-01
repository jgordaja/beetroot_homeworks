$(document).ready(function() { 
    $('#first_screen').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        accessibility: true,
        arrows: false,
        dots: true,
        swipe: true, 
        mobileFirst: true, 
    });

    $('.prodacts__cards').slick({
        lazyLoad: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        accessibility: true,
        arrows: true, 
        swipe: true, 
        mobileFirst: true,
        // не вдалося змінити колір при наведенні, переробила на icomoon
        // prevArrow: `<button class='arrow prev_arrow'>
        //                 <svg class="prev">
        //                     <use xlink:href="./src/img/base/sprite.svg#prev"></use>
        //                 </svg>
        //             </button>`,
        // nextArrow: `<button class='arrow next_arrow'>
        //                 <svg class="next">
        //                     <use xlink:href="./src/img/base/sprite.svg#next"></use>
        //                 </svg>
        //             </button>`,
        prevArrow: `<button class='arrow prev_arrow'>
                        <span class="prev icon-prev"></span>
                    </button>`,
        nextArrow: `<button class='arrow next_arrow'>
                        <span class="next icon-next"></span>
                    </button>`,
        responsive: [
            { 
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5, 
                } 
            },
            { 
                breakpoint: 1284,
                settings: {
                    slidesToShow: 4, 
                } 
            },
            { 
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, 
                } 
            },
            { 
                breakpoint: 500,
                settings: {
                    slidesToShow: 2, 
                    dots: true,
                    arrows: false,
                } 
            }, 
            { 
                breakpoint: 320,
                settings: {
                    slidesToShow: 1, 
                    dots: true,
                    arrows: false,
                } 
            }
        ]
    });

    $('.partners__block').slick({ 
        infinite: true,
        slidesToShow: 9,
        slidesToScroll: 3,
        adaptiveHeight: true,
        accessibility: true,
        arrows: true, 
        swipe: true, 
        mobileFirst: true, 
        prevArrow: `<button class='arrow prev_arrow'>
                        <span class="prev icon-prev"></span>
                    </button>`,
        nextArrow: `<button class='arrow next_arrow'>
                        <span class="next icon-next"></span>
                    </button>`,
        responsive: [
            { 
                breakpoint: 1400,
                settings: {
                    slidesToShow: 9, 
                } 
            },
            { 
                breakpoint: 1284,
                settings: {
                    slidesToShow: 7, 
                } 
            },
            { 
                breakpoint: 768,
                settings: {
                    slidesToShow: 5, 
                } 
            },
            { 
                breakpoint: 500,
                settings: {
                    slidesToShow: 4, 
                    dots: true,
                    arrows: false,
                } 
            }, 
            { 
                breakpoint: 320,
                settings: {
                    slidesToShow: 2, 
                    dots: true,
                    arrows: false,
                } 
            }
        ]
    });
});