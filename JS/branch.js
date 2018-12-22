// //导航定位
// window.onload = function(){
// 	var cover = document.getElementsByClassName('cover_bg')[0];
// 	window.onscroll = function(){
// 		var st = document.documentElement.scrollTop || document.body.scrollTop;
// 		if(st>180){
// 			cover.style.position = 'fixed';		 				
// 		}else{
// 			cover.style.position = 'static';
// 		}
// 	}
// }





//放大镜
		//1.获取元素
  		var box = document.getElementById("box");
  		var img1 = document.getElementById("img1");
  		var slider = document.getElementById("slider");
  		var img2 = document.getElementById("img2");
  		var Bimg = document.getElementById("Bimg");
  		var sp0 = document.getElementsByClassName("sp0")[0];
  		var sp1 = document.getElementsByClassName("sp1")[0];
  		var ssp1 = document.getElementsByClassName("ssp1")[0];
  		var mmp0 = document.getElementsByClassName("mmp0")[0];
  		//2.给左小图绑定移入移出移动事件
  		img1.onmouseover = function(){
  			slider.style.display = "block";
  			img2.style.display = "block";
  		}
  		img1.onmouseout = function(){
  			slider.style.display = "none";
  			img2.style.display = "none";
  		}
  		img1.onmousemove = function(ev){
  			var st2 = document.documentElement.scrollTop || document.body.scrollTop;
  			var ev = ev||window.event;
  			//（1）根据鼠标的位置计算放大镜的位置
  			var left = ev.clientX - box.offsetLeft - slider.offsetWidth/2;
  			var top = ev.clientY - box.offsetTop - slider.offsetHeight/2 + st2;
  			var maxLeft = img1.offsetWidth - slider.offsetWidth;
  			var maxTop = img1.offsetHeight - slider.offsetHeight;

  			left = left>maxLeft?maxLeft:left<0?0:left;
  			top = top>maxTop?maxTop:top<0?0:top;
  			//（2）设置放大镜的位置
  			slider.style.left = left + "px";
  			slider.style.top = top + "px";
  			//根据左侧放大镜的位置，计算右侧大图移动比例
  			var w = left/maxLeft;
  			var h = top/maxTop;
  			//计算大图的最大移动范围
  			var BimgLeft = img2.offsetWidth - Bimg.offsetWidth;
  			var BimgTop = img2.offsetHeight - Bimg.offsetHeight;
  			//计算大图的移动距离，设置位置
  			Bimg.style.left = w*BimgLeft + "px";
  			Bimg.style.top = h*BimgTop + "px";
  		}


  		sp0.style.border = "2px solid #ff9003";
  		sp0.style.marginTop = "1px";
  		sp0.style.marginLeft = "0px";
  		sp1.style.marginLeft = "2px";

  		sp1.style.border = "0px solid #ff9003";
  		sp1.style.marginTop = "3px";
  		sp1.style.marginLeft = "2px";
  		sp0.onclick = function(){
  			sp0.style.border = "2px solid #ff9003";
  			sp0.style.marginTop = "1px";
  			sp0.style.marginLeft = "0px";
  			sp1.style.marginLeft = "2px";

  			sp1.style.border = "0px solid #ff9003";
  			sp1.style.marginTop = "3px";
  			mmp0.src = "../img/pp0.jpeg";
  			ssp1.src = "../img/pp0.jpeg";

  		}
  		
  		sp1.onclick = function(){
  			sp1.style.border = "2px solid #ff9003";
  			sp1.style.marginTop = "1px";
  			sp1.style.marginLeft = "2px";

  			sp0.style.border = "0px solid #ff9003";
  			sp0.style.marginTop = "3px";
  			sp0.style.marginLeft = "2px";
  			// sp1.style.marginLeft = "0px";

  			mmp0.src = "../img/pp1.jpeg";
  			ssp1.src = "../img/pp1.jpeg";
  		}
  		
//毫升选择
var one = document.getElementsByClassName("one")[0];
var two = document.getElementsByClassName("two")[0];
var ml = document.getElementsByClassName("ml")[0];
one.onclick = function(){
	one.style.border = "1px solid #fe0d4a";
	two.style.border = "1px solid #ffffff";
	one.style.background = "url(../img/duigou.png)no-repeat 48px 15px";
	two.style.background = "unset";
	ml.innerHTML = '"150ml"';
}
two.onclick = function(){
	two.style.border = "1px solid #fe0d4a";
	one.style.border = "1px solid #ffffff";
	two.style.background = "url(../img/duigou.png)no-repeat 48px 15px";
	one.style.background = "unset";
	ml.innerHTML = '"200ml"';

}
//改变数量
var bu1 = document.getElementsByClassName("bu1")[0]; 
var bu2 = document.getElementsByClassName("bu2")[0]; 
var bu3 = document.getElementsByClassName("bu3")[0]; 
var num;
bu1.onmouseover = function(){
	if(bu2.innerHTML <= 1){
		bu1.style.cursor  = "not-allowed";
	}else{
		bu1.style.cursor  = "pointer";
	}
}
bu3.onmouseover = function(){
	if(bu2.innerHTML >= 5){
		bu3.style.cursor  = "not-allowed";
	}else{
		bu3.style.cursor  = "pointer";
	}
}
bu1.onclick = function(){
	if(bu2.innerHTML <= 1){
		bu1.style.cursor  = "not-allowed";
	}else{
		num = bu2.innerHTML-1;
		bu2.innerHTML = num;
	}
}
bu3.onclick = function(){

	if(bu2.innerHTML >= 5){
		bu3.style.cursor  = "not-allowed";
	}else{
		num = bu2.innerHTML;
		num++;
		bu2.innerHTML = num;
	}
}
//加购物车

var gou = document.getElementById("gou"); 
var go1 = document.getElementsByClassName("go1")[0]; 
var x = document.getElementsByClassName("x")[0]; 
var tankuang = document.getElementsByClassName("tankuang")[0]; 
var tk = document.getElementsByClassName("tk")[0]; 

gou.onclick = function(){
	tankuang.style.display = "block";
	tk.style.display = "block";
}
go1.onclick = function(){
	tankuang.style.display = "none";
	tk.style.display = "none";
}
x.onclick = function(){
	tankuang.style.display = "none";
	tk.style.display = "none";
}
