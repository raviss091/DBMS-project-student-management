$(document).ready(function() {
	current_page = "" + $(".current-page").attr('id');

	{ /* Navbar menus animation */
		$("#navbar-"+ current_page).css({"opacity" : "100%"});	

		$(".navbar-menus").hover(function() {		
			$("#"+ this.id +"-border").stop();
			$("#"+ this.id +"-border").animate({width: '75%'},200,'swing');
			if(this.id != "navbar-" + current_page) {
				$(this).stop();
				$(this).animate({"opacity" : "100%"},200,'swing');
			}			
		},function() {		
			$("#"+ this.id +"-border").stop();
			$("#"+ this.id +"-border").animate({"width" : "0%"},200,'swing');
			if(this.id != "navbar-" + current_page) {
				$(this).stop();
				$(this).animate({"opacity" : "60%"},200,'swing');
			}		
		});
	}
	{
		$("#navbar-notify").hover(function() {
			$(this).stop();
			$(this).animate({opacity : "0.5"},200,'swing');
		}, function() {
			$(this).stop();
			$(this).animate({opacity : "1"},200,'swing');
		});
	}
	/*{
		$("#navbar-profile").hover(function() {
			$(this).stop();
			$(this).animate({backgroundColor : "#555555"},200,'swing');
		}, function() {
			$(this).stop();
			$(this).animate({backgroundColor : "transparent"},200,'swing');
		})
	}*/
	{
		$("#navbar-profile").hover(function() {
			$(this).stop();
			$(this).animate({opacity : "0.5"},200,'swing');
		}, function() {
			$(this).stop();
			$(this).animate({opacity : "1"},200,'swing');
		})
	}
})