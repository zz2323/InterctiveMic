for (var i=0; i<MicData.length; i++) {
	var rowData = MicData[i];
	
	var $template = $('<div class="HeadlineBlocks">'+
					  '<div class="Section">'+rowData.Section+'</div>'+
					  '<div class="readMore">Read More</div>'+
					  'div class= "moreInfo">'+
					  		'<div class="mainHeadline">'+rowData.mainHeadline+'</div>'+
					  		'<div class="Excerpt">'+rowData.Excerpt+'<div>'+
					  		'<div class="Author">'+rowData.Author+'<div>'+
							'<div class="UpdatedTime">'+rowData.UpdatedTIme+'<div>'+
							'</div>'+
					   '<div>');
					   
	$template.find (".readMore").on ("click", toggleContent);
	
	function toggleContent(e) {
		$HeadlineBlocks = $(this).parent();
		
		if ($HeadlineBlocks.hasClass("expanded")) {
			$HeadlineBlocks.removeClass("expanded");
		} else {
			$HeadlineBlocks.addClass("expanded");
		}//end of else
	}//end of function
	
	
}

for (var i=0; i<guardianHeroinData.length; i++) {
	var rowData = guardianHeroinData[i];
	
	var $template = $('<div class="quoteContainer">'+
					'<div class="mainQuote">'+rowData.mainQuote+'</div>'+
					'<div class="readMore">Read More</div>'+
					'<div class="moreInfo">'+
						'<div class="wholeQuote">'+rowData.wholeQuote+'</div>'+
						'<div class="source">'+rowData.source+'</div>'+
						'<div class="yearsClean">'+rowData.yearsClean+'</div>'+
						'<div class="location">'+rowData.location+'</div>'+
						'</div>'+
					'</div>');
					
	$template.find(".readMore").on("click", toggleContent);
	
	function toggleContent(e) {
		$quoteContainer = $(this).parent();
		
		
		if ($quoteContainer.hasClass("expanded")) { //quoteContaine rhas class . expanded so you can see contant, but we want to hide it.
			$quoteContainer.removeClass ("expanded");
		} else { //quote Container does not have class expanded, no content
			$quoteContainer.addClass ("expanded");
		}
	}
	
	
	$ ('#dataContainer').append($template);
	
	
}