
$(function(){
    var tab=$("#g-bannerLast .g-lastBtn");
    var contentShow=$("#g-content .g-contentMain");
    tab.each(function(i){
        $(this).on("mouseover",function(){
            $(this).addClass("g-active");
            $(this).siblings().removeClass("g-active");
            contentShow.eq(i).show();
            contentShow.eq(i).siblings().hide();
        })
    })
});