var data = [
	"大家好",
	"欢迎来到我的个人主页",
	"我是一名热爱前端的大学生",
	"同时非常爱交朋友",
	"你们可以通过下方的qq联系到我",
	"Welcome You"
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