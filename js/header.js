

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