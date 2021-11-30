

$(function(){
    $('.test').click(function(){
        $('.main_menu').slideToggle();
        $('.test').hide();
        $('.clo').show(), css("backgroundColor", "white");
    })

    $('.clo').click(function(){
        $('.main_menu').slideToggle();
        $('.test').show();
        $('.clo').hide();
    })
});

$(window).resize(function(){
    if(window.innerWidth>=1000){
        $('.main_menu').show();
    }
});

