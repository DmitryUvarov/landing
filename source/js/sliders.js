
if (document.querySelector('.main-slider')) {
    new Swiper('.main-slider', {
        observer: true,
        observerParents: true,
        watchOverflow: true,
        speed: 800,
        watchOverflow: true,

        navigation: {
            nextEl: '.slider .slider-next',
            prevEl: '.slider .slider-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1650: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }
    });
}