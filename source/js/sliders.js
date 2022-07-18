
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
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                    this.autoplay.stop();
                });

                this.el.addEventListener('mouseleave', () => {
                    this.autoplay.start();
                });
            }
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            550: {
                slidesPerView: 1.5,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            991: {
                slidesPerView: 2.7,
                spaceBetween: 15
            },
            1650: {
                slidesPerView: 3,
                spaceBetween: 15
            }
        }
    });
}