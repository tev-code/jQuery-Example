$(document).ready(function() {
    alert("This page has loaded!");
});

$(document).ready(function() {
	$("#greenbtn").click(function() {
		$("body").removeClass();
		$("body").addClass("green");
	});

});

$(document).ready(function() {
	$("#navybtn").click(function() {
		$("body").removeClass();
		$("body").addClass("navy");
	});

});

$(document).ready(function() {
   $("#fadeout").click(function() {
   	$("#text").fadeOut()
   });
});

$(document).ready(function() {
   $("#fadein").click(function() {
   	$("#text").fadeIn()
   });
});

$(document).ready(function() {
	$(".card-header").click(function() {
		$(".card .card-body").slideUp()
		$(this).next(".card-body").slideDown()
	});
});

$(document).ready(function() {
   $("#fade-out").click(function() {
   	$("#footy").fadeOut(3000)
   });
});

$(document).ready(function() {
   $("#fade-in").click(function() {
   	$("#footy").fadeIn(3000)
   });
});

$(document).ready(function() {
	$("#stop").click(function() {
		$("#footy").stop()
	});
});









