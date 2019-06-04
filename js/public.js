var lias = document.getElementsByClassName('lia')

for(var i=0;i<lias.length;i++) {
	lias[i].onmouseover = function() {
		for(var j=0;j<lias.length;j++) {
			lias[j].className = 'lia'
		}
		this.className = 'lia current'
	}
	lias[i].onmouseout = function() {
		this.className = 'lia'
	}
}

function ado() {
	var audio = document.querySelector("audio");
	document.onclick = function() {
		audio.play();
	} //audio标签在谷歌浏览器不能自动播放 设置一个点击事件
}
ado();

var data = [
	"欢迎大家",
	"来到我的",
	"个人主页"
];

function writer(text,i,callback) {
	if(i < text.length) {
		document.getElementById("text").innerHTML = text.substring(0, i + 1)
		setTimeout(function () {
            writer(text, i + 1, callback)
        }, 150);
	}
	else if (typeof callback == 'function') {
        setTimeout(callback, 1000);
    }
}

function startAnimation(i) {
	if (i < data[i].length) {
		writer(data[i],0,function() {
			startAnimation(i + 1)
		})
	}
}

startAnimation(0)
