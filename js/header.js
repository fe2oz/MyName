

$(function(){
    $('.test').click(function(){
        $('.main_menu').slideToggle();
        $('.test').hide();
        $('.clo').show();
        $('.menu_icon').css("backgroundColor", "black");
    })

    $('.clo').click(function(){
        $('.main_menu').slideToggle();
        $('.test').show();
        $('.clo').hide();
        $('.menu_icon').css("background", "transparent");
    })
});

$(window).resize(function(){
    if(window.innerWidth>=1000){
        $('.main_menu').show();
    }
});

