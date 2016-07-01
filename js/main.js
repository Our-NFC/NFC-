
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

$(function(){
    var signhead=$(".g-signIndexHead .g-signChoose");
    var signheadshow=$(".g-stepMain .signheadshow");
    signhead.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("g-signChooseActive");
            $(this).siblings().removeClass("g-signChooseActive");
            signheadshow.eq(i).show();
            signheadshow.eq(i).siblings().hide();
        })
    })
});
/*倒计时*/
$(function(){
    var signCodesBtn=$("#g-signCodesBtn");
    var c=60;
    var t;
    signCodesBtn.on("click",function(){
        timer();
    });
    function timer()
    {
        signCodesBtn.attr("disabled","true");
        signCodesBtn.val(c+"s");
        c--;
        t=setTimeout(timer,1000);
        if(c<0){
            clearTimeout(t);
            signCodesBtn.val("重试");
            signCodesBtn.removeAttr("disabled");
            c=60;
        }
    }
});
/*倒计时*/

$(function(){
    /*登录验证*/
    $("#g-signIndexForm").validator({
        rules:{
            loginName: function(element) {
                return this.test(element, "mobile")===true ||
                    this.test(element, "email")===true ||
                    '请填写正确的电子邮箱或手机号！';
            },
        },
        fields:{
            loginName:"required;loginName",
            password:"required;password"
        },
    });
});
