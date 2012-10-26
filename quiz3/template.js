$(function(){
	$('#make').click(make);
	$('#heaven').on({mouseenter:hover,mouseleave:out},'.box');
});

function make () {
	a = $('#colors').val();
	a = a.split(' ');
	for (i=0;i<a.length;i++){
		div = $('<div>');
		div.addClass('box');
		div.css('background',a[i]);
		$('#heaven').append(div);
	}
}

function hover () {
	z = $(this).css('background');
	$('#hell').css('background',z);
}

function out () {
	$('#hell').css('background','');
}