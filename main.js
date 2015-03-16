$( document ).ready(function() {
	console.log("yo");

$( ".details img").mouseenter(function() {
	console.log("hey");
	var src = $( this ).attr("src");
	var old = $( this ).parent().parent().find("> img").attr("src");
	$( this ).parent().parent().find("> img").attr("src", src);

	$( this ).mouseleave(function() {
		$( this ).parent().parent().find("> img").attr("src", old);
	});


});

});
