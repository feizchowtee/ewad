$(document).ready(function(){
    $('.burger').click(function(){
        $(this).toggleClass('burger-open');
        $('.mobile-menu').toggleClass('mobile-menu-open');
    });
});

const reviewSlider = new Swiper('.swiper-container', {
    effect: 'cards',
    speed: 800,
    spaceBetween: 32,
    slidesPerView: 1,
    //watchOverflow: true,
    roundLengths:true,
    navigation: {
        nextEl: '.ph-caret-right',
        prevEl: '.ph-caret-left'
    }
});


