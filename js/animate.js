function animate(obj,json,fn) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			var flag = true;
			for(var attr in json) {     //json遍历
				var current = 0;
				if(attr == "opacity") {
					current = parseInt(getstyle(obj,attr)*100);
				}
				else {
					current = parseInt(getstyle(obj,attr));
				}
				var step = 0;
				if(attr == "opacity") {
					step = (json[attr]*100 - current) / 10;
				}
				else {
					step = (json[attr] - current) / 10;
				}
				step = step>0 ? Math.ceil(step) : Math.floor(step);
				if(attr == "opacity") {
					obj.style[attr] = (current + step) / 100;
				}
				else if(attr == "zIndex") {					
					obj.style[attr] = json[attr];	
				}
				else {
					obj.style[attr] = current + step + "px";
				}
				//obj.style[attr] = current + step + "px";
				if(current != json[attr]) {
					flag = false;
				}
			}
			if(flag) {
				clearInterval(obj.timer);
				if(fn) {
					fn();
				}
			}
		},30);
		function getstyle(obj,attri) {
			if(obj.currentStyle) {
				return obj.currentStyle(attri);
			}
			else {
				return window.getComputedStyle(obj,null)[attri];
			}
		}
	}