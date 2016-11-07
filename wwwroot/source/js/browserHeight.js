function fillSpace(obj,offsetHeight) {
  if (typeof offsetHeight == "undefined") {
		offsetHeight = 130;
	}

	console.log("main height is " + $(window).height());
	var height = $(window).height() - offsetHeight;
	$(obj).height(height);
	$(window).resize(function(){ $(height).height($(window).height() - offsetHeight);  })
	console.log("fillspace height "+height);
}
