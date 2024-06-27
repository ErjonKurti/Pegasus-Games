
import $ from 'jquery';

$(document).ready(function() {
    // Your jQuery code here
	$('.set-background').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});
});