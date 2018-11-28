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
        console.log(this.index);
        aRu[this.index].className = 'sa active1';
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
