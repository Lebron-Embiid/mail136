/**
 * Created by Administrator on 2016/11/6.
 */
window.onload= function () {
    //免登陆提示
    var p1 = document.getElementById("p1");
    var prompt = document.getElementById("prompt");
    var flag = 0;
    p1.onmouseover = function(){
        prompt.style.display= "block";
    };
    p1.onmouseout = function () {
        prompt.style.display = "none";
    };
    p1.onclick = function () {
        if(flag == 0) {
            this.style.background = "url('bg_v3.png') -40px -178px no-repeat";
            flag = 1;
        }
        else{
            this.style.background = "url('bg_v3.png') -40px -158px no-repeat";
            flag = 0;
        }
    };
    //登录切换
    var two = document.getElementById("two");
    var email = document.getElementById("email");
    var content = document.getElementById("content-right");
    var login = document.getElementById("login");
    var logintwo = document.getElementById("login-two");
    two.onmouseover=function(){
        content.style.background = "url('login_v5.png') -12px -15px no-repeat";
        login.style.display = "none";
        logintwo.style.display = "block";
    };
    email.onmouseover = function () {
        content.style.background = "url('login_v5.png') -335px -15px no-repeat";
        login.style.display = "block";
        logintwo.style.display = "none";
    };

    //图片切换
    var next = document.getElementById("next");
    var last = document.getElementById("last");
    var same = document.getElementById("same");
    var pics = ['promPic1','promPic2','promPic3','promPic4','promPic5','promPic6'];
    var colors = ['#FF5140','#F8FAF9','#000000','#E81A1C','#E5F3F4','#DDDDDF'];
    var num = 0;
    var num1 = pics.length;
    last.onclick = function () {
        num ++;
        if(num == pics.length){
            num = 0;
        }
        same.style.background = "url("+pics[num]+".jpg) left top no-repeat";
        document.body.style.background=""+colors[num-1]+"";
    };
    next.onclick = function () {
        num1 --;
        if(num1 == 0){
            num1 = pics.length;
        }
        same.style.background = "url("+pics[num1-1]+".jpg) left top no-repeat";
        document.body.style.background=""+colors[num1-2]+"";
    };

    //二维码
    var left = document.getElementById("two-left");
    var right = document.getElementById("two-right");
    left.onmouseover = function () {
        this.style.webkitTransform = "translateX(-60px)";
        this.style.transition = "transform 0.3s linear 0s";
        right.style.display = "block";
        right.transition = "display 1s linear 0.1s";
    };
    left.onmouseout = function () {
        this.style.webkitTransform = "translateX(0px)";
        this.style.transition = "transform 0.3s linear 0s";
        right.style.display = "none";
        right.transition = "display 0.5s";
    };

    //正则
    var id = document.getElementById("input-id");
    var pwd = document.getElementById("input-pwd");
    var d1 = document.getElementById("d1");
    id.value = "";
    pwd.value = "";
    d1.onclick = function(){
        var reg = /^[a-zA-Z]{1}([a-zA-Z0-9]| [._]){4,19}$/;
        var reg1 = /^([a-zA-Z-0-9]|[._]){6,18}/;
        var result =  reg.test(id.value);
        var result1 = reg1.test(pwd.value);
        if(id.value == ""){
            alert("请输入帐号！");
            return;
        }
        if(result != true){
            alert("帐号必须英文字母开头，请重新输入！");
            return;
        }
        if(pwd.value == ""){
            alert("请输入密码！");
            return;
        }
        if(result1 != true){
            alert("请输入6-18位的密码！");
            return;
        }
    };



    //版本切换
    var mr = document.getElementById("btn-mr");
    var box = document.getElementById("btn-bb");
    var show = document.getElementById("show-bb");
    var ul = document.getElementById("ul");
    var lis = ul.getElementsByTagName("li");
    mr.onclick = function () {
        box.style.display = "block";
    };
    for(var i=0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onmouseover = function () {
            this.className = "active";
        };
        lis[i].onclick = function () {
            mr.innerHTML = this.innerHTML;
            box.style.display = "none";
            if(i == 0){
                show.style.background = "url('bg_v3.png') -160px -115px no-repeat";
            }
        };
        lis[i].onmouseout = function () {
            this.className = "";
            lis[0].className = "active";
        };


    }
};
