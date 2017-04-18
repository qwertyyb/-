$(document).ready(function() {
	$("#header2").hide();

});

$(document).on("scroll", function() {
	var scrollTop = $(window).scrollTop();
	if (scrollTop > 400) {
		$(".header2").slideDown(200);
	} else {
		$("#header2").slideUp(200);
	}
});
$(".synopsis>.synopsis-example").on("click", function(e){
	var target = e.currentTarget; 
	var index = $(".synopsis>.synopsis-example").index(target);
	$(target).fadeOut(80, function(){
		$("#synopsis-example" + (index+1)).fadeIn(80);
	});
	index = (index+1)%4;
})
