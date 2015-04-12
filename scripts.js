for (var i=0; i<MicData.length; i++) {
	var rowData = MicData[i];
	
	var $template = $('<div class="HeadlineBlocks">'+
					  '<div class="Section">'+rowData.Section+'</div>'+
					  '<div class="readMore">Read More</div>'+
					  '<div class= "moreInfo">'+
					  		'<div class="MainHeadline">'+rowData.MainHeadline+'</div>'+
					  		'<div class="Excerpt">'+rowData.Excerpt+'<div>'+
					  		'<div class="Author">'+rowData.Author+'<div>'+
							'<div class="UpdatedTime">'+rowData.UpdatedTime+'<div>'+
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
	
	
	$ ('#HeadlineInfo').append($template);
}
