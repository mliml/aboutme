$("a[href^=#]").click(function(e){
    $("html").animate({
        "scroll-top":$($(this).attr("href")).offset().top
    });
    $("body").animate({
        "scroll-top":$($(this).attr("href")).offset().top
    });
    e.preventDefault();
});

var old_state=true;
$(window).on("scroll",function(){
    var state=($("html").scrollTop() || $("body").scrollTop())<100;
    if(state!=old_state){
        if(state){
            $(".more").removeClass("hide");
        }else{
            $(".more").addClass("hide");
        }
        old_state=state;
    }
});

var list=$("#team ul").get(0);
var scroll_timer=-1;

$("#team .scroll-left").on("mouseenter",function(){
    (function callee(){
        list.scrollLeft-=5;
        scroll_timer=setTimeout(callee,16);
    })();
}).on("mouseleave",function(){
    clearTimeout(scroll_timer);
    scroll_timer=-1;
});

$("#team .scroll-right").on("mouseenter",function(){
    (function callee(){
        list.scrollLeft+=5;
        scroll_timer=setTimeout(callee,16);
    })();
}).on("mouseleave",function(){
    clearTimeout(scroll_timer);
    scroll_timer=-1;
});