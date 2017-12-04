(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {

    //点击办理类型
    var flag = 0,
        flag_1 = 0,
        flag_2 = 0;
    $('#bl_lx').on('click','li',function () {
        var $this = $(this),
            $index = $this.index();
        if($index == 1){
            flag = 1
            $('#last').hide();
            $('#tc_dw').show();
            $('#_128').show();
            $('#price').text('80');
            $('#dd').text('月');
            $('#tc_dw li:nth-child(1)').addClass('active').siblings('li').removeClass('active');
            $('#_88').show();
            $('#_58').text('58元档');
        }else if($index == 0){
            $('#last').show();
            $('#price').text('1080');
            $('#dd').text('年');
            flag = 0;
            $('#tc_dw').hide();
        }else if($index == 0){

        }
        $('#tc_lx li:nth-child(1)').addClass('active').siblings('li').removeClass('active');
        flag_1 = 0;
    });
    //点击套餐类型
    $('#tc_lx').on('click','li',function () {
        var $this = $(this),
            $index = $this.index();
        if ($index == 1 && flag == 0){
            $('#price').text('1600');
            flag_1 = 1;
        }else if($index == 0 && flag == 0){
            $('#price').text('1080');
            flag_1 = 0;
        }else if($index == 1 && flag == 1){
            $('#_128').hide();
            $('#_58').text('58元档');
            $('#_88').text('88元档及以上');
            $('#price').text('28');
            $('#dd').text('月');
            flag_1 = 1;
        }else if($index == 0 && flag == 1){
            $('#_128').show();
            $('#_58').text('58元档');
            $('#_88').text('88元档');
            $('#price').text('80');
            $('#dd').text('月');
            flag_1 = 0;
        }else if($index == 2){
            $('#price').text('2100');
            $('#dd').text('年');
        }else if($index == 2 && flag == 1){
            $('#last').hide();
        }
        $('#tc_dw li:nth-child(1)').addClass('active').siblings('li').removeClass('active');
    });
    //点击套餐档位
    $('#tc_dw').on('click','li',function () {
        var $this =$(this),
            $index = $this.index();
        if($index == 0 && flag_1 == 0){
            $('#price').text('80');
        }else if($index == 1 && flag_1 == 0){
            $('#price').text('60');
        }else if($index == 2 && flag_1 == 0){
            $('#price').text('30');
        }else if($index == 3 && flag_1 == 0){
            $('#price').text('0');
        }else if($index == 0 && flag_1 == 1){
            $('#price').text('28');
        }else if($index == 1 && flag_1 == 1){
            $('#price').text('18');
        }else if($index == 2 && flag_1 == 1){
            $('#price').text('0');
        }
    });

    //勾选上门联系人自动写入表单内容
    var $name_1 = $('#name_1'),
        $name_2 = $('#name_2'),
        $tel_1 = $('#tel_1'),
        $tel_2 = $('#tel_2');
    window.setInterval(function () {
        if($('#ck_1').is(':checked')){
            console.log(1);
            $name_2.val($name_1.val());
            $tel_2.val($tel_1.val());
        }
    },0);
    //判断是否勾选同意以点击立即办理按钮
    $('#btn').on('click',function () {
        alert('请先阅读产品介绍并勾选');
        return false;
    });
    $('#ck_2').on('click',function () {
        if($('#ck_2').is(':checked') == false){
            $('#btn').on('click',function () {
                alert('请先阅读产品介绍并勾选');
                return false;
            });
        }else if($('#ck_2').is(':checked')){
            $('#btn').unbind('click');
        }
    });
    //选项卡
    function tab($selector){
        var $lis = $selector.find('li');
        $lis.on('click',function (){
            var $index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active').end().parent().nextAll('div').eq($index).addClass('active').siblings('div').removeClass('active');
        });
    }
    $.each($('#bl_lx'),function (){
        tab($(this));
    });
    $.each($('#tc_dw'),function (){
        tab($(this));
    });
    $.each($('#tc_lx'),function (){
        tab($(this));
    });
    //去使用页底部"使用规则"、"祝福语" tab切换
    $.each($('#tab'),function (){
        tab($(this));
    });
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }
});
