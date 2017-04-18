

function zanting()
{
	alert();
	document.getElementById("video").pause();
	
}


function a(){
	document.getElementById("videdfdfdo").pause();
	
}
function b(){
	document.getElementById('videdfdfdo').play();
	
}
function scrollWindow()
{
	window.scrollTo(100,770);
}
$(document).ready(function(){
	
	$(document).on('scroll', function(){
		var dingjuli=window.pageYOffset -100;
		if(dingjuli>0)
		{
			a();
			$("#guding").fadeOut();
		}
		else if(dingjuli <= 0)
		{
			b();
			
			$("#guding").fadeIn();
		}
	});
	$("#tiaozhuan").click(function(){
		scrollWindow();
	});
});

$(document).ready(function(){
	$("#gudingwenzi-2").click(function(){
		
		$("#yincang").fadeIn();
	});
})


$(document).ready(function(){
	$("#exit").click(function(){
		
		$("#yincang").fadeOut();
	});
})


$(document).ready(function(){
	$("#transfer-3").click(function(){
		
		$("#yincang").fadeIn();
	});
})








$(document).ready(function(){
	
	$(document).on('scroll', function(){
		var dingjuli=window.pageYOffset -950;
		if(dingjuli>0)
			{
				$(document).ready(function(){
					
	  				$("#picture").animate({top:"0px",opacity:'1',zIndex: 1000},1200);
	    
				});				
			}
	});
});




$(document).ready(function(){
	
	$(document).on('scroll', function(){
		var dingjuli=window.pageYOffset -300;
		if(dingjuli>0)
			{
				$(document).ready(function(){
					
	  				$("#section11").animate({top:"20px",opacity:'1',zIndex: 1000},1200);
	  				$("#section12").animate({top:"20px",opacity:'1',zIndex: 1000},1200);
	  				$("#section13").animate({top:"20px",opacity:'1',zIndex: 1000},1200);
	    
				});				
			}
	});
});

$(window).on("scroll", function(){
	var stop = $(window).scrollTop()
	if(stop>600&&stop<850)
	{
		
			$(".pics .pic-min").css("left", (1-(stop-660)/300)*400+'px')
			//$(".pics .pic-min").css("transform", 'scale('+(stop-600)/400*1+')')
			$(".left-template-1").css("left", (1-(stop-620)/300)*350+'px')
			//$(".left-template-1").css("transform", 'scale('+(stop-600)/400*1+')')
			$(".left-icon-chat").css("left", (1-(stop-500)/400)*500+'px')
			//$(".left-icon-chat").css("transform", 'scale('+(stop-600)/400*1+')')
			$(".left-template-3").css("left", (1-(stop-540)/250)*650+'px')
			//$(".left-template-3").css("transform", 'scale('+(stop-600)/400*1+')')
			$(".left-icon-spreadsheets").css("left", (1-(stop-480)/400)*500+'px')
			
			$(".right-template-1").css("right", (1-(stop-660)/300)*400+'px')
			$(".right-template-2").css("right", (1-(stop-600)/300)*400+'px')
			$(".right-icon-drive").css("right", (1-(stop-660)/400)*500+'px')
			$(".right-icon-slides").css("right", (1-(stop-500)/400)*500+'px')
			$(".right-template-3").css("right", (1-(stop-540)/250)*650+'px')
			
			
			
			
	}
})


$(document).ready(function(){
	var strs = ["Start tying to search", "party.hus","pizza.club","example.xyz","john's coffee shop"]
	var interval;
	var texts;
	var index = 0;
	var input = false
	$(".shuru").on("click", function(){
		input = true;
	})
	$(".shuru").on("focusout", function(){
		input = false;
		start()
	})
	function start(){
		new AnimateText(".rrr", {onAnimated: function(){
			setTimeout(animated,200)
			}});
	}
	start()
	function animated(){
		texts = $(".rrr").text()
		if( texts.length<=0 ) {
			if( input===false){
				index = (index+1)%5
				$(".rrr").text(strs[index])
				start()
			}
		}else{
			$('.rrr').text(texts.slice(0, texts.length-1))
			setTimeout(animated, 200)
		}
		
		
	}
	
	
	

})



	














	

