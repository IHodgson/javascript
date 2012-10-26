$(function(){
	$('#make').click(make);
});

function make () {
	a = $('#number').val();
	a = parseFloat(a);
	for (i=0;i<a;i++){
		div = $('<div>');
		div.addClass('box');
		div.text(i+1);
		$('#heaven').prepend(div);
	}
}