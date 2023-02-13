var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000
    },
    speed: 1000
});

var clientswiper = new Swiper(".clientSwiper", {
    navigation: {
        nextEl: ".say-next",
        prevEl: ".say-prev",
    },
    loop: true,
    autoplay: {
        delay: 2000
    },
    speed: 2000
});


let btn = document.querySelector('.fast__info-btn')
let exp = document.querySelector('.explore')
let close = document.querySelector('.explore__popup-close')

btn.addEventListener('click', () => {
    exp.style.display = 'flex'
})

close.addEventListener('click', () => {
    exp.style.display = 'none'
})


$(function() {

    $('ul.category__list').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});


let btnRegister = document.querySelector('.header__btn')
let overlay = document.querySelector('.overlay')
let popupClose = document.querySelector('.popup__close')

btnRegister.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

popupClose.addEventListener('click', () => {
    overlay.style.display = 'none'
})
