

$(function(){
    $('.test').click(function(){
        $('.main_menu').slideToggle();
    })
});

$(window).resize(function(){
    if(window.innerWidth>=1000){
        $('.main_menu').show();
    }
});

$(function(){
    $('.menu_icon').on('click', function(){
        $('header').css("backgroundColor", "white");
        $('.menu_icon').css("filter", "invert", "0.5")
    })
});