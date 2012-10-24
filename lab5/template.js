$(function(){
	$('#b4').on('click',toggle);
	$('#b6').on('click',toggle2);
	$('.box').click(math);
});

function toggle () {
	$('#b5').addClass('red');
	$('#b5').removeClass('blue');
}
function toggle2 () {
	$('#b5').addClass('blue');
	$('#b5').removeClass('red');
}

function math () {
	var x = parseInt($(this).text());
	var y = parseInt($('#b5').text());
	$('#b5').text(x+y);
}