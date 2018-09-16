window.onload=function(){
	
	
	// 小屏头部下拉
	let button=document.querySelector(".right button");
	let desc=document.querySelector(".box1");
	console.log(button);
	button.onclick=function(){
		desc.style.height=360+"px";
	}

	desc.onmouseleave=function(){
		desc.style.height=0;
	}


	// 返回顶部
	let back=document.querySelector(".back");
	back.onclick=function(){
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
	}


	// 资讯中心
	let line=document.querySelector(".news ul li .text h4:after");
	console.log(line);


}