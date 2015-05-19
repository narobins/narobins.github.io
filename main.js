$( document ).ready(function() {

	$( ".details img").mouseenter(function() {
		console.log("hey");
		var src = $( this ).attr("src");
		var old = $( this ).parent().parent().find("> img").attr("src");
		$( this ).parent().parent().find("> img").attr("src", src);

		$( this ).mouseleave(function() {
			$( this ).parent().parent().find("> img").attr("src", old);
		});
	});

	$(".comic .next").click(function() {
		next_page($(this));
	});

	$(".comic img").click(function() {
		next_page($(this));
	});

	var next_page = function(el) {
		var imgs = el.parent(".comic").children("img");
		var idx = imgs.index(el.parent(".comic").children(".current"));
		if (idx < imgs.length - 1) {
			imgs.eq(idx + 1).addClass("current");
			imgs.eq(idx).removeClass("current");
			el.parents(".project").find(".text .page-count .page").html(idx + 2);
		}
	};

	$(".comic .prev").click(function() {
		var imgs = $(this).parent(".comic").children("img");
		var idx = imgs.index($(this).parent(".comic").children(".current"));
		if (idx > 0) {
			imgs.eq(idx - 1).addClass("current");
			imgs.eq(idx).removeClass("current");
			$(this).parents(".project").find(".text .page-count .page").html(idx);
		}
	});

});
