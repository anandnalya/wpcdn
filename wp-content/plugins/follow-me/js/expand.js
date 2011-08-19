$(document).ready(function(){
	$("#Email").click(function(){
		$('#url').val('mailto:name@example.com');
	});	
	$(".newd_body").hide();
	$(".newd").click(function(){
		$(this).next(".newd_body").slideToggle(600);
	});	
	$(".custom_body").hide();
	$(".custom").click(function(){
		$(this).next(".custom_body").slideToggle(600);
	});
	$(".oldd_body").hide();
	$(".oldd").click(function(){
		$(this).next(".oldd_body").slideToggle(600);
	});
});

