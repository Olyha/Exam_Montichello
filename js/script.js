$('#jsMenuMobile').on('click',function() {
    $('header').toggleClass('menu__open')
})

$(document).ready(function (){
    $("#sections").on("click","a", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1300);
    });
})

// $(function(){
//     $('#scroll').click(function(e){
//         e.preventDefault();
//         $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 1600);
//         return false;
//     });
// });

$(document).ready(function (){
    $("#scroll").on('click', "a", function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('html, body').animate({scrollTop: top}, 700, 'linear');
    });
});
