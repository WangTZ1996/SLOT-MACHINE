window.onload = function (){
	var img1=document.getElementById('1');
	var img2=document.getElementById('2');
	var img3=document.getElementById('3');
	var timer;
	function changeImg(){
		var i= Math.ceil(Math.random()*10);
		img1.src='image/'+i+'.jpg';
		var j= Math.round(Math.random()*10);
		img2.src='image/'+j+'.jpg';
		var k= Math.floor(Math.random()*10);
		img3.src='image/'+k+'.jpg'
	}
	function run(){
		timer = setInterval(changeImg,100);
	}
	var btn1 = document.getElementById('start');

	btn1.addEventListener('click',run,false);
	var btn2 = document.getElementById('stop');
	btn2.addEventListener('click',function(){
		clearInterval(timer);
	},false);
}