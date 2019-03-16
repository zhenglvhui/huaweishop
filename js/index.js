//顶部关闭动画
var yuan = document.querySelector('.advertising .yuan');
var advertising = document.getElementsByClassName('advertising')[0];
yuan.onclick= function () {
    advertising.style.display = 'none';
}
//导航栏左边颜色变化
var liArr = document.querySelectorAll('.daohang .ul1 li:nth-child(odd)');
for (var i = 0; i < liArr.length; i++) {
    liArr[i].onmouseover = function(){
        this.style.color='#CF0A2C';
    }
    liArr[i].onmouseout = function(){
        this.style.color = '#A4A4A4';
    }
}
//导航栏右边三角的改变,颜色的变化
var li6Arr = document.querySelectorAll('.daohang .ul2 li:nth-child(6),.daohang .ul2 li:nth-child(7),.daohang .ul2 li:nth-child(8)');
var lastFourLiArr = document.querySelectorAll('.daohang .ul2 li:nth-last-child(-n+4)');//最后的四个li
var lastFourNavDivArr = document.querySelectorAll('.daohang .xiala');//获取导航栏获取焦点是是生成后面的4个div
var liSJArr = document.querySelectorAll('.daohang .ul2 li:nth-child(6) .sanjiao,.daohang .ul2 li:nth-child(7) .sanjiao,.daohang .ul2 li:nth-child(8) .sanjiao');
var liTextArr = document.querySelectorAll('.daohang .ul2 li:nth-child(6) .text,.daohang .ul2 li:nth-child(7) .text,.daohang .ul2 li:nth-child(8) .text');
var li9 = document.querySelector('.daohang .ul2 li:nth-child(9) ');
var li9Text = document.querySelector('.daohang .ul2 li:nth-child(9) .text');
var fuwuxia = document.querySelector('.daohang .fuwuxia');
for (var i = 0; i < li6Arr.length; i++) {
    li6Arr[i].index = i;
    li6Arr[i].onmouseover = function(){
        liSJArr[this.index].style.borderBottom = '4px solid #CF0A2C';
        liSJArr[this.index].style.borderTop = 'none';
        liTextArr[this.index].style.color='#CF0A2C';
    }
    li6Arr[i].onmouseout= function(){
        liSJArr[this.index].style.borderTop = '4px solid #777';
        liSJArr[this.index].style.borderBottom = 'none';
        liTextArr[this.index].style.color='#A4A4A4';
    }
}
li9.onmouseover = function(){
    li9Text.style.color='#CF0A2C';
}
li9.onmouseout = function(){
    li9Text.style.color='#A4A4A4';
}
// 导航栏获取焦点时出现新的导航的实现
// 当鼠标放到导航栏是出现的下拉div
var timerul2 = null;
for (var i = 0; i < lastFourLiArr.length; i++) {
    lastFourLiArr[i].index = i;
    lastFourLiArr[i].onmouseenter = function(){
        lastFourNavDivArr[this.index].style.display = 'block';
    }
}
// 当鼠标移除导航栏时隐藏div
for (var i = 0; i < lastFourLiArr.length; i++) {
    lastFourLiArr[i].index = i;
    lastFourLiArr[i].onmouseleave = function(){
        clearInterval(timerul2);
        var num = 0;
        var that = this;
        timerul2= setInterval(function(){
            num++;
            if(num > 2){
                lastFourNavDivArr[that.index].style.display = 'none';
                clearInterval(timerul2);
            }
        },100)
        
    }
}
// 当鼠标放到下拉div是继续有下拉div
for (var i = 0; i < lastFourNavDivArr.length; i++) {
    lastFourNavDivArr[i].index = i;
    lastFourNavDivArr[i].onmouseenter = function(){
        clearInterval(timerul2);
        this.style.display = 'block';
        // li6Arr[index].style.backgroundColor = '#ccc';
        li6Arr[this.index].style.backgroundColor = 'white'
    }
}
// 当鼠标移出下拉div隐藏div
for (var i = 0; i < lastFourNavDivArr.length; i++) {
    lastFourNavDivArr[i].index = i;
    lastFourNavDivArr[i].onmouseleave = function(){
        this.style.display = 'none';
        li6Arr[this.index].style.backgroundColor = '#F9F9F9';
    }
}
//搜索栏前面的导航部分，鼠标放上出现下拉列表的实现
var searchNavLiArr = document.querySelectorAll('.search .ul1 li:nth-child(-n+5)');
var nextArr = document.querySelectorAll('.search .next:nth-last-child(-n+5)');
//放入移出导航栏部分的实现
for (var i = 0; i < searchNavLiArr.length; i++) {
    searchNavLiArr[i].index = i;
    searchNavLiArr[i].onmouseenter = function(){
    nextArr[this.index].style.display = 'block';
    }
}
for (var i = 0; i < searchNavLiArr.length; i++) {
    searchNavLiArr[i].index = i;
    jiNum = i;
    searchNavLiArr[i].onmouseleave = function(){
        clearInterval(nextArr[this.index].timer);
        var num = 0;
        var jiNum = this.index;
        nextArr[this.index].timer = setInterval(function(){
            num++;
            if(num >= 2){
                nextArr[jiNum].style.display = 'none';
                clearInterval(nextArr[jiNum].timer);
            }			
        },100);	
    }
}
for (var i = 0; i < nextArr.length; i++) {
    nextArr[i].onmouseenter = function(){
        clearInterval(this.timer);
        this.style.display = 'block';
    }
}
for (var i = 0; i < nextArr.length; i++) {
    nextArr[i].onmouseleave = function(){
        this.style.display = 'none';
    }
}

//实现轮播图特效
var lunBoLiArr = document.querySelectorAll('.lunbotu .ul1 li');
var yuanLiArr = document.querySelectorAll('.lunbotu .ul2 li');
var clearTime = null;
var clearOpacity = null;
var num = 0;
//调用动画
clearTime = lunBoAminate(num,lunBoLiArr,yuanLiArr);
//点击下面小圆点后跳转到当前页面，并且开始从这个原点对应的图片开始轮播
for (var i = 0; i < yuanLiArr.length; i++) {
    yuanLiArr[i].index = i;
    num = i;
    yuanLiArr[i].addEventListener('click',function(){
        clearInterval(clearTime);
        for (var i = 0; i < lunBoLiArr.length; i++) {
            lunBoLiArr[i].style.display = 'none';
            lunBoLiArr[i].style.opacity = 0.2;
            yuanLiArr[i].style.backgroundColor = 'transparent';
        }
        lunBoLiArr[this.index].style.display = 'block';
        yuanLiArr[this.index].style.backgroundColor = 'white';	
        fadeIn(lunBoLiArr[this.index],200);
        clearTime = lunBoAminate(this.index,lunBoLiArr,yuanLiArr);
    });
    yuanLiArr[i].addEventListener('mouseenter',function(){
        clearInterval(clearTime);
        for (var i = 0; i < lunBoLiArr.length; i++) {
            lunBoLiArr[i].style.display = 'none';
            lunBoLiArr[i].style.opacity = 0.2;
            yuanLiArr[i].style.backgroundColor = 'transparent';
        }
        lunBoLiArr[this.index].style.display = 'block';
        yuanLiArr[this.index].style.backgroundColor = 'white';	
        fadeIn(lunBoLiArr[this.index],200);
        clearTime = lunBoAminate(this.index,lunBoLiArr,yuanLiArr);
    });
}
//封装轮播图的动画,num是指当前是第（num-1)的值，lunBoLiArr是指轮播数组，yuanLiArr是指轮播图上小圆圈的数组
function lunBoAminate(num,lunBoLiArr,yuanLiArr){
    clearTime = setInterval(function(){
        if (num < lunBoLiArr.length-1) {
            num++;
            for (var i = 0; i < lunBoLiArr.length; i++) {
                lunBoLiArr[i].style.display = 'none';
                lunBoLiArr[i].style.opacity = 0.2;
                yuanLiArr[i].style.backgroundColor = 'transparent';
            }
            lunBoLiArr[num].style.display = 'block';
            yuanLiArr[num].style.backgroundColor = 'white';	
            fadeIn(lunBoLiArr[num],200);
        }else{
            num = 0;
            for (var i = 0; i < lunBoLiArr.length; i++) {
                lunBoLiArr[i].style.display = 'none';
                yuanLiArr[i].style.backgroundColor = 'transparent';
            }
            lunBoLiArr[num].style.display = 'block';
            yuanLiArr[num].style.backgroundColor = 'white';	
            fadeIn(lunBoLiArr[num],200);
        }
    },2000)
    return clearTime;
}
// 封装淡入
function fadeIn(element,speed){
    var speed = speed || 30 ;
    var num = 0;
    var st = setInterval(function(){
    num+=2;
    element.style.opacity = num/5;
    if(num>=8)  {  clearInterval(st);  }
    },speed);
}

//中间手机栏的轮播图实现
var moveLeft = document.querySelector('.phone .morePhone .left');
var moveRight = document.querySelector('.phone .morePhone .right');
var phoneUl = document.querySelector('.phone .morePhone ul');
var morePhone = document.querySelector('.phone .morePhone');
var width = phoneUl.offsetWidth - morePhone.offsetWidth;
//设置左键的放入和离开操作
moveLeft.onmouseenter=function(){
    if(phoneUl.offsetLeft >= 0){
       moveLeft.style.cursor='not-allowed';
       moveLeft.style.backgroundColor='rgba(204,204,204,0.6)';
       }else{
           moveLeft.style.backgroundColor='rgba(204,204,204,0.9)';
       }
}
moveLeft.onmouseleave = function(){
    moveLeft.style.backgroundColor='rgba(204,204,204,0.6)';
    moveLeft.style.cursor='pointer';
}
//设置右边div的放入和移除操作
   moveRight.onmouseenter=function(){
    if(phoneUl.offsetLeft <= -width){
       moveRight.style.cursor='not-allowed';
       moveRight.style.backgroundColor='rgba(204,204,204,0.6)';
       }else{
           moveRight.style.backgroundColor='rgba(204,204,204,0.9)';
       }
}
moveRight.onmouseleave = function(){
    moveRight.style.backgroundColor='rgba(204,204,204,0.6)';
    moveRight.style.cursor='pointer';
}
//调用moveWidth
 moveWidth(moveLeft,moveRight,phoneUl,width);
//封装左右div点击事件,eleLeft是左按钮，eleRight是右按钮，eleUL是整个ul
function moveWidth(eleLeft,eleRight,eleUL,width){
    //设置左边点击事件
    eleLeft.addEventListener('click',function(){
        if(eleUL.offsetLeft >= 0){
            eleUL.style.left = '0';
        }else{
            eleUL.style.left = '0';
        }
    })
    //设置右边点击事件
    eleRight.addEventListener('click',function(){
        if(eleUL.offsetLeft<=-width){
            eleUL.style.left =  -width + 'px';	    		
        }else{
        huanDongAnimate(eleUL,-width,10)
        // eleUL.style.left = -width + 'px';
        }	
    })
}
//封装减速缓动动画,ele是要让其移动的ele,target指要去的位置，sleep指定时器的多久执行一次
function huanDongAnimate(ele,target,sleep){
    var speed = 0;
        var step = 0;
        clearInterval(ele.timer);
        ele.timer = setInterval(function(){
            step = (target-speed)/10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            speed += step;
            ele.style.left = speed + 'px';
            if (Math.abs(target - speed) <= Math.abs(step)) {
            ele.style.left =  target + 'px';
            clearInterval(ele.timer);
        }
    },sleep);
}

//scroll封装
function scroll() {  // 开始封装自己的scrollTop
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
//左侧返回顶部的实现
var returnTop = document.querySelector('.returnTop .return');
var eventFloat = document.querySelector('.event-float');
var eventFloatArr = document.querySelectorAll('.event-float ul li');
var eventFloatOuArr = document.querySelectorAll('.event-float ul li:nth-child(2n+1)');
    returnTop.onclick = function(){
    animationTop(this,0,10);
}
//封装缓动框架
function animationTop(ele,target,sleep){
    sleep = sleep || 10;
    clearInterval(ele.timer);
    ele.timer = setInterval(
         function(){
              var scrolltop= document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
              var step = (scrolltop-target)/5;
              step = step > 0?Math.ceil(step) : 	Math.floor(step);	
            document.documentElement.scrollTop=document.body.scrollTop=scrolltop-step;
            if(step > 0){
                if ((scrolltop - step) <= target) {
                clearInterval(ele.timer);
                }
            }else{
                if ((scrolltop - step) >= target) {
                clearInterval(ele.timer);
                }
            }
            
         }
    ,sleep);
}
window.onscroll = function(){
    if(scroll().top>=1800){
        returnTop.style.display="block";
    }else{
        returnTop.style.display="none";
    };
    if(scroll().top>=500){
        eventFloat.style.display="block";
    }else{
        eventFloat.style.display="none";
    };	
    if(500<=scroll().top && scroll().top<=1200){
        eventFloatArr[0].style.color = '#CA151D';
        eventFloatArr[1].style.animation = ' 1s xiandong';
        eventFloatArr[1].style.width = '100%';
        // if(eventFloatArr[1].style.animation != ''){
        eventFloatArr[2].style.color = '#BABABA';
        eventFloatArr[3].style.animation = ' 1s xianmei';
        eventFloatArr[3].style.width = '0';
        eventFloatArr[4].style.color = '#BABABA';
        eventFloatArr[5].style.animation = ' 1s xianmei';
        eventFloatArr[5].style.width = '0';
        // }	
    }else if (1200<=scroll().top && scroll().top <=2200){
        eventFloatArr[2].style.color = '#CA151D';
        eventFloatArr[3].style.animation = '1s xiandong';
        eventFloatArr[3].style.width = '100%';
        eventFloatArr[0].style.color = '#BABABA';
        eventFloatArr[1].style.animation = '1s xianmei';
        eventFloatArr[1].style.width = '0';
        eventFloatArr[4].style.color = '#BABABA';
        eventFloatArr[5].style.animation = '1s xianmei';
        eventFloatArr[5].style.width = '0';
    }else if(scroll().top >=2200){
        eventFloatArr[4].style.color = '#CA151D';
        eventFloatArr[5].style.animation = '1s xiandong';
        eventFloatArr[5].style.width = '100%';
        eventFloatArr[0].style.color = '#BABABA';
        eventFloatArr[1].style.animation = '1s xianmei';
        eventFloatArr[1].style.width = '0';
        eventFloatArr[2].style.color = '#BABABA';
        eventFloatArr[3].style.animation = '1s xianmei';
        eventFloatArr[3].style.width = '0';
    };
}
eventFloatOuArr[0].onclick = function(){
    animationTop(this,500,10);
}
eventFloatOuArr[1].onclick = function(){
    animationTop(this,1300,10);	
}
eventFloatOuArr[2].onclick = function(){
    animationTop(this,2300,10);
}
