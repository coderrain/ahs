/**
 * Created by Administrator on 2018/11/26.
 */
var oTi = document.getElementById('oTi');
var ali = oTi.getElementsByTagName('li');
for(var i = 0;i<ali.length;i++){
    ali[i].onmouseover = function () {
        for(var j =0;j<ali.length;j++){
            ali[j].className = '';
        }
        this.className = 'active';
    }
    ali[i].onmouseout = function () {
        for(var j =0;j<ali.length;j++){
            ali[j].className = '';
        }
        ali[0].className = 'active';
    }
}
/*二维码显示*/
$('#erweima1').mouseenter(function () {
    $('.erweima2').addClass('active');
}).mouseleave(function () {
    $('.erweima2').removeClass('active');
})
/*手机tab切换*/
var oMobile = document.getElementById('mobile');
var aPinpai = oMobile.getElementsByTagName('li');
var oRight = document.getElementById('mright');
var aRu = oRight.getElementsByTagName('ul');
for(var y = 0;y<aPinpai.length;y++){
    aPinpai[y].index = y;
    aPinpai[y].onmouseover = function () {
        oRight.className = 'right active';

        for(var j =0;j<aPinpai.length;j++){
            aPinpai[j].className = 'h40';
            aRu[j].className = 'sa'
        }
        this.className = 'h40 active';
        aRu[this.index].className = 'sa active1';
    }
    //鼠标进入右边对应ul是不让他消失
    /*for(var x=0;x<aRu.length;x++){
        aRu[x].onmouseover = function () {
            this.className = 'sa active1';
        }
        aRu[x].onmouseout = function () {
            this.className = 'sa';
        }
    }*/
    aRu[y].onmouseover = function () {
        oRight.className = 'right active';
        this.className = 'sa active1';
    }
    aRu[y].onmouseout = function () {
        oRight.className = 'right';
        this.className = 'sa';
    }
    aPinpai[y].onmouseout = function () {
        oRight.className = 'right';
        aRu[this.index].className = 'sa';
        for(var j =0;j<aPinpai.length;j++){
            aPinpai[j].className = 'h40';
        }
        // aPinpai[0].className = 'active';
    }
}

/* 设备回收tab切换*/
$('#shebei>li').each(function (index,item) {
    $(this).click(function () {
        $(this).addClass('active');
        $(this).siblings("li").removeClass('active');
        console.log(index);
        $('.shebei-container .shebei-content').eq(index).addClass("active");
        $('.shebei-container .shebei-content').eq(index).siblings('div').removeClass("active");
    });
});
//退出登录
$('.logut').click(function () {
    $.ajax({
        url:"/user/logut",
        type:"get",
        data:{},
        success:function (res) {
            if(res.code==1){
                alert("退出成功")
                window.location.href='/';
            }else{
                alert('退出失败')
            }
        }
    })
})
//video播放
$('#play').click(function () {
    if($('#video')[0].paused){
        $('#video')[0].play()
    }else{
        $('#video')[0].pause();
    }
    $(this).hide()
})