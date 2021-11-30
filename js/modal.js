$(function(){
    // 사진첩 부분
    $('.src1').click(function(){
        $('.modal').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.modal_content').click(function(){
        $('.modal').fadeOut();
        $('body').css("overflow", "scroll");
    });

    $('.src2').click(function(){
        $('.modal1').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.modal_content1').click(function(){
        $('.modal1').fadeOut();
        $('body').css("overflow", "scroll");
    });

    $('.src3').click(function(){
        $('.modal2').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.modal_content2').click(function(){
        $('.modal2').fadeOut();
        $('body').css("overflow", "scroll");
    });

    $('.src4').click(function(){
        $('.modal3').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.modal_content3').click(function(){
        $('.modal3').fadeOut();
        $('body').css("overflow", "scroll");
    });

    $('.src5').click(function(){
        $('.modal4').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.modal_content4').click(function(){
        $('.modal4').fadeOut();
        $('body').css("overflow", "scroll");
    });

    $('.src6').click(function(){
        $('.modal5').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.modal_content5').click(function(){
        $('.modal5').fadeOut();
        $('body').css("overflow", "scroll");
    });

    $('.src7').click(function(){
        $('.modal6').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.modal_content6').click(function(){
        $('.modal6').fadeOut();
        $('body').css("overflow", "scroll");
    });

    $('.src8').click(function(){
        $('.modal7').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.modal_content7').click(function(){
        $('.modal7').fadeOut();
        $('body').css("overflow", "scroll");
    });

    $('.src9').click(function(){
        $('.modal8').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.modal_content8').click(function(){
        $('.modal8').fadeOut();
        $('body').css("overflow", "scroll");
    });


    // 예고편 부분
    $('.notice1').click(function(){
        $('.notice1_modal').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.notice1_modal_content').click(function(){
        $('.notice1_modal').fadeOut();
        $('body').css("overflow", "scroll");
    });

    $('.notice2').click(function(){
        $('.notice2_modal').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.notice2_modal_content').click(function(){
        $('.notice2_modal').fadeOut();
        $('body').css("overflow", "scroll");
    });

    
    // 예고편 플레이 버튼
    $('.notice1').mouseover(function(){
        $('.playbutton').fadeIn();
    });

    $('.notice1').mouseleave(function(){
        $('.playbutton').fadeOut();
    });

    $('.notice2').mouseover(function(){
        $('.playbutton1').fadeIn();
    });

    $('.notice2').mouseleave(function(){
        $('.playbutton1').fadeOut();
    });

    
    // 회차 정보 모달
    $('.all_1').click(function(){
        $('.again_video_modal').fadeIn();
        $('body').css("overflow", "hidden");
    });

    $('.close').click(function(){
        $('.again_video_modal').fadeOut();
        $('body').css("overflow", "scroll");
    });


    // 회차 정보 플레이 버튼
    $('.again4_text_modal').mouseover(function(){
        $('.again4play').fadeIn();
        $('.again4_image').css("opacity", "0.5")
    });

    $('.again4_text_modal').mouseleave(function(){
        $('.again4play').fadeOut();
        $('.again4_image').css("opacity", "1")
    });

    $('.again5_text_modal').mouseover(function(){
        $('.again5play').fadeIn();
        $('.again5_image').css("opacity", "0.5")
    });

    $('.again5_text_modal').mouseleave(function(){
        $('.again5play').fadeOut();
        $('.again5_image').css("opacity", "1")
    });

    $('.again6_text_modal').mouseover(function(){
        $('.again6play').fadeIn();
        $('.again6_image').css("opacity", "0.5")
    });

    $('.again6_text_modal').mouseleave(function(){
        $('.again6play').fadeOut();
        $('.again6_image').css("opacity", "1")
    });

    $('.again7_text_modal').mouseover(function(){
        $('.again7play').fadeIn();
        $('.again7_image').css("opacity", "0.5")
    });

    $('.again7_text_modal').mouseleave(function(){
        $('.again7play').fadeOut();
        $('.again7_image').css("opacity", "1")
    });

    $('.again8_text_modal').mouseover(function(){
        $('.again8play').fadeIn();
        $('.again8_image').css("opacity", "0.5")
    });

    $('.again8_text_modal').mouseleave(function(){
        $('.again8play').fadeOut();
        $('.again8_image').css("opacity", "1")
    });

    $('.again9_text_modal').mouseover(function(){
        $('.again9play').fadeIn();
        $('.again9_image').css("opacity", "0.5")
    });

    $('.again9_text_modal').mouseleave(function(){
        $('.again9play').fadeOut();
        $('.again9_image').css("opacity", "1")
    });

    $('.again10_text_modal').mouseover(function(){
        $('.again10play').fadeIn();
        $('.again10_image').css("opacity", "0.5")
    });

    $('.again10_text_modal').mouseleave(function(){
        $('.again10play').fadeOut();
        $('.again10_image').css("opacity", "1")
    });

    $('.again11_text_modal').mouseover(function(){
        $('.again11play').fadeIn();
        $('.again11_image').css("opacity", "0.5")
    });

    $('.again11_text_modal').mouseleave(function(){
        $('.again11play').fadeOut();
        $('.again11_image').css("opacity", "1")
    });

    
});





