/**
 * Created by zh on 2017/8/10.
 */
/**
 * Created by zh on 2017/8/10.
 */
$(function(){
    /*回到顶部按钮出现的条件*/
    $(window).on("scroll",function(){
        var $scrollTop=$(document).scrollTop();// 页面部分滚动后的获取滚动高度

        if($scrollTop>=900){
            $(".toTop").show();
        }else{
            $(".toTop").hide();
        }
    });
    /*回到顶部*/
    $(".toTop").click(function () {
        if(!$('html,body').is(":animated")) {
            $('html,body').animate({scrollTop: -($(this).offset().top)}, 1000);
        }
    });

    /*展示更多*/
    $(".showMore").on("click",function(){
        if(!$(".chuNone").is(":animated")){
            $(".chuNone").stop(true).slideDown();
            $(this).hide();
        }
       /* if(!$(".chuNone").is(":animated")) {
            //$(".chuNone").stop(true).slideToggle(1000);
            $(".chuNone").slideToggle(1000);
        }
        $(this).toggleClass("rotate180");*/
    })
});