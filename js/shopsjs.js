/**
 * Created by yxm on 2016/6/29.
 * 商户管理
 */
!(function(){
    $(function(){
        //商家名称
        $("#inputshopsname").keyup(function(){
           $(".card_name").html($(this).val());
        });
        //卡券名称
        $("#cardname").keyup(function () {
            $(".card_type").html($(this).val());
        });
        //有效期
        $('.form_datetime').change(function(){
            $(".card_data span").html($(this).val());
        });
        //卡券详情
        $("#cardxqing").keyup(function(){
           $(".card_xqinginfo").html($(this).val());
        });
        //本月发卡统计、消费统计图表切换
        $(".chart_list p").click(function(){
            var indexs=$(this).index();
            $(".chart_list p").removeClass("hover");
            $(this).addClass("hover");
            $(".chart_tongjipic").hide();
            $(".chart_tongjipic").eq(indexs).show();
        });


    })
})();

