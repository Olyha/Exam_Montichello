$(document).ready(function (){
    $("#sections").on("click","a", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1300);
    });

    $("#scroll").on('click', "a", function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 700, 'linear');
    });

    $('#jsMenuMobile').on('click',function() {
        $('header').toggleClass('menu__open')
    })
})

