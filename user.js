$(function () {
	$('a').hover(function(){
		var href = $(this).attr('href');
		if(href)
		{
			$(this).qrcode({
				width: 128,
				height: 128,
				text	: href
			});	
		}
	});
});