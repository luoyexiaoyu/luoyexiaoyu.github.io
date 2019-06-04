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
