function animate(obj,target) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var speed = obj.offsetLeft<target ? 10 : -10;
		var result = target - obj.offsetLeft;
		obj.style.left = obj.offsetLeft + speed +"px";
		if(Math.abs(result)<=10) {
			clearInterval(obj.timer);
			obj.style.left = target + "px";//10像素差距
		}
	},20);
}

window.onload = function() {
	var img = document.getElementById("img");
	var ul2 = document.getElementById("ul2");
	var lis = ul2.children;
	ul2.appendChild(ul2.children[0].cloneNode(true));//克隆第一张图片
	var timer = null;
	var key = 0;
	timer = setInterval(autoplay,2500);
	function autoplay() {
		key++;
		if(key>=lis.length) {
			ul2.style.left = 0;
			key = 1;
		}
		animate(ul2,-key*480)
	}
	var sec = document.getElementById("sectionBottom");
	var childrens = sec.children;
	var s = 0,m = 0,h = 0;
	setInterval(function() {
		var date = new Date();
		var ms = date.getMilliseconds();
		var second = date.getSeconds();
		var minute = date.getMinutes();
		var hour = date.getHours();
		s = second + ms / 1000;
		m = minute + s / 60;
		h = hour + m / 60;//获取走过的时分秒数
		childrens[2].style.transform = "rotate("+s*6+"deg)";
		childrens[1].style.transform = "rotate("+m*6+"deg)";
		childrens[0].style.transform = "rotate("+h*30+"deg)";
	},1000);
}