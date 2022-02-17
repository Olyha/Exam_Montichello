$(document).ready(function() {
    let news_slide = $('#news_slide');
    news_slide.slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots:true
    });
})