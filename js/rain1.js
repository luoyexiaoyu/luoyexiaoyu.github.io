var can = document.getElementById("canvas");
var ctx = can.getContext("2d");//设置绘图环境
var w = can.width = 1035;//把窗口的宽度赋值给画布1300
var h = can.height = 887;//把窗口的高度赋值给画布700
var count = 30;//雨滴的个数
var drops = [];//定义一个空数组来保存雨滴个数
function Drop(){}//定义雨滴对象
//添加原型对象方法
Drop.prototype = {
	init : function(){//初始化
		this.x = random(0,w);
		this.y = 0;
		this.r = 1;//初始半径
		this.vy = random(4,5);//竖直方向的加速度
		this.vr = 1;//半径的加速度
		this.a = 1;//初始透明度
		this.va = 0.96;//透明度的变化系数
		this.l = random(h*0.8,h*0.9);//雨滴下落的高度
	},
	draw : function(){
		if (this.y > this.l)
		{
			ctx.beginPath();
			ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
			ctx.strokeStyle = "rgba(0,255,255,"+this.a+")";
			ctx.stroke();
		}else{
			ctx.fillStyle = color(this.a);
			ctx.fillRect(this.x,this.y,2,10);
		}
		this.update();
	},
	//更新坐标
	update : function(){
		if (this.y < this.l)
		{
			this.y += this.vy;
		}else{
			if (this.a > 0.03)
			{
				this.r += this.vr;
				if (this.r > 50)
				{
					this.a *= this.va;
				}
			}else{
				this.init();
			}
		}
	}
}
//不断的更新雨滴位置
function move(){
	ctx.fillStyle = "rgba(0,0,0,.1)";
	ctx.fillRect(0,0,w,h);  //这个在先绘制
	for (var i=0;i<drops.length;i++ )
	{
		drops[i].draw();
	}
	//调用经动画
	requestAnimationFrame(move);
}
//创建一个雨滴实例对象
//var drop = new Drop();
//drop.init();
//drop.draw();
//延迟产生每个雨滴
function setup(){
	for (var i=0;i < count ;i++ )
	{
		(function(j){
			setTimeout(function(){
				var drop = new Drop();
				drop.init();
				drops.push(drop);
			},j*200);
		}(i))
	}
}
setup();
move();
//封装一个产生随机数的方法
function random(min,max){
	return Math.random()*(max-min) + min;
}
//封装一个随机颜色
function color(a){
	//rgba
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	return "rgba("+r+","+g+","+b+","+a+")"
}