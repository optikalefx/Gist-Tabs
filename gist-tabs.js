// each gist
$(".gist").each(function() {
	
	// reference to this
	var $gist = $(this);
	
	// hide all gist file but the first one
	$gist.find(".gist-file:not(:first)").hide();
	
	// create the gist header
	var $header = $("<header class='gist-header'><div style='float:right;padding:.5em .5em'>Gist Tabs by Sean Clark</div></header>");
	
	// loop through each of the gist-files
	$gist.find(".gist-file").each(function() {
		
		// get some variables
		var $block = $(this);
		var fname = $block.find(".gist-meta a:eq(1)").text();
		var $tab = $("<div class='gist-tab'>"+fname+"</div>");
		
		// create event for tab switching
		$tab.on("click",function() {
			$gist.find(".gist-file").hide();
			$block.show();
		});
		// add tab to header
		$header.append($tab);
		
	});
	// add header to the top of the gist
	$gist.prepend($header);
});
