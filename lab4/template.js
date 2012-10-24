$(function(){
	$('#color_button').click(bam);
	$('#colors').on('hover','.color',hovering);

});

function bam () {
	var d = $('<div>');
	var color = $('#color_text').val();
	d.addClass('color');
	d.css('background',color);
	d.appendTo('#colors');
}

function hovering () {
	$(this).toggleClass('hover');
}