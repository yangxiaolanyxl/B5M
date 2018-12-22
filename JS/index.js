//导航定位
window.onload = function(){
	var cover = document.getElementsByClassName('cover_bg')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = 'fixed';		 				
		}else{
			cover.style.position = 'static';
		}
	}
}



//话费充值
document.getElementsByClassName('select1')[0].onchange = function(){
	var select1 = document.getElementsByClassName('select1')[0];
	var money = document.getElementById('money');
	money.innerHTML = select1.value;
}



//轮播图
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	animate(left,{opacity:100})
	animate(right,{opacity:100})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<oNavlist.length; i++ ){
	(function(i){
		oNavlist[i].onclick = function(){
			index = i+1;
			navmove();
			animate(slider,{left:-800*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);

// 无缝衔接
var r_m = document.getElementById('r_m');
var notice = document.getElementById('notice');
var tag;
r_m.onmouseover = function(){
	clearInterval(tag)
}
r_m.onmouseout = function(){
	move();
}
function move(){
	roll(notice,{top:-377},function(){
			notice.style.top = '0px';
	});
}
move();
function roll(obj,json,callback){
	tag = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = parseInt(getStyle(obj,attr));
			var cur = now - 1;
			obj.style[attr] = cur + 'px';
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			callback&&callback();
		}
	}, 30)
}
//移上滑出
var rightbox1 = document.getElementsByClassName("rightbox1")[0];
var rightbox2 = document.getElementsByClassName("rightbox2")[0];
var rightbox3 = document.getElementsByClassName("rightbox3")[0];
var rightbox4 = document.getElementsByClassName("rightbox4")[0];
var img2 = document.getElementsByClassName("img2")[0];
var img3 = document.getElementsByClassName("img3")[0];


rightbox1.onmouseover = function(){
	animate(rightbox1,{right:-10});
}
rightbox1.onmouseout = function(){	
	animate(rightbox1,{right:-87});
}
rightbox2.onmouseover = function(){
	animate(rightbox2,{right:-10});
}
rightbox2.onmouseout = function(){	
	animate(rightbox2,{right:-80});
}
rightbox3.onmouseover = function(){
	animate(rightbox3,{right:-10});
	if (rightbox3.style.right = -10) {
		img2.style.display = "none";
		img3.style.display = "block";
	}
}
rightbox3.onmouseout = function(){	
	animate(rightbox3,{right:-80});
	if (rightbox3.style.right = -80) {
		img2.style.display = "block";
		img3.style.display = "none";
	}
}
rightbox4.onmouseover = function(){
	animate(rightbox4,{right:-10});
}
rightbox4.onmouseout = function(){	
	animate(rightbox4,{right:-80});
}