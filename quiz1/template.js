$(function(){
	$('#add').click(add);
});

function add () {
	a = $('#a').val();
	b = $('#b').val();
	a = parseFloat(a);
	b = parseFloat(b);
	c = a+b;
	$('#sum').text(c);
}