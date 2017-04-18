$(document).on("scroll",function(){

	var scrolltop = $(window).scrollTop();
	if( scrolltop>0 && scrolltop< 490) {
		$(".iphone").css("margin-top", (-338+scrolltop/490*200) +'px');
	}
	if( scrolltop >400) {
		$(".menu-background").css({position: "fixed",top: "0px", "background": "#EDEDED"});
		if( scrolltop >450) {
		
			$(".BODY").css({position: "fixed",top: "150px" ,"margin-left":"50px"});
		}
	}else {
		$(".menu-background").css({position: "absolute",
						"top": "400px",
						"background": "none"
		});
	}
	
	
})


$(document).on("scroll",function(){
	var scrolltop2 = $(window).scrollTop();
     if(scrolltop2<450){
     	$(".BODY").css({"position": "static", top: "initial"})
        $(".BODY>div").css("display","none");
     	$("#body1").css("display","block");
     	
     }
	 if ( scrolltop2 >650 && scrolltop2<= 800){
	 	
		$("#body1").css("display","none");
		$("#body2").css("display", "block");
		setTimeout(function(){
			$("#iphone-img2").css("transform", "scale(1)");
	    
			$("#ipad-img2").css("transform", "scale(1)");	
			$($("article")[1]).animate({"margin-left":"0", "opacity":"1"})
		}, 100)
		
	}
	else if(scrolltop2 >800&&scrolltop2<=1200){
		$("#body2").css("display","none");
		$("#body3").css("display", "block");
		setTimeout(function(){
			$("#iphone-img3").css("transform", "scale(1)");
			$("#ipad-img3").css("transform", "scale(1)");	
			$($("article")[2]).animate({"margin-left":"0", "opacity":"1"})
		}, 100)
		
	}
	else if(scrolltop2 >1400&&scrolltop2<=1600){
		$("#body3").css("display","none");
		$("#body4").css("display", "block");
		setTimeout(function(){
			$("#iphone-img4").css("transform", "scale(1)");
			$("#ipad-img4").css("transform", "scale(1)");	
			$($("article")[3]).animate({"margin-left":"0", "opacity":"1"})
		}, 100)
	}
	else if(scrolltop2 >1400&&scrolltop2<=2000){
		$("#body4").css("display","none");
		$("#body5").css("display", "block");
		setTimeout(function(){
			$("#iphone-img5").css("transform", "scale(1)");
			$("#ipad-img5").css("transform", "scale(1)");	
			$($("article")[4]).animate({"margin-left":"0", "opacity":"1"})
		}, 100)
	}
	else if(scrolltop2 >2000&&scrolltop2<2400){
		$("#body5").css("display","none");
		$("#body6").css("display", "block");
		setTimeout(function(){
			$("#iphone-img6").css("transform", "scale(1)");
			$("#ipad-img6").css("transform", "scale(1)");
			$($("article")[5]).animate({"margin-left":"0", "opacity":"1"})
		}, 100)
	}
})


