$(function(){
	$('#b3').hover(large_green);
  $("#b4").hover(small_red);
	$("#b5").hover(rev1,nor1);
	$('#b1').click(clear);
	$('#b2').dblclick(normal);
	$('#b6').click(black);
	$('#b7').click(yellow);
});


function large_green()
{
	var d = $('#output');
	d.toggleClass("big_hover");
	
}

function small_red()
{
	var d = $('#output');
	d.toggleClass("small_hover");
	
}

function rev1(){
	var input = $('#input').val();
	var d = $('#output');
	d.toggleClass("blue_italic");
	var reverse = input.split("").reverse().join("");
	$('#output').text(reverse);
}

function nor1(){
	var input = $('#input').val();
	var reverse = input.split("").reverse().join("");
	var d = $('#output');
	d.toggleClass("blue_italic");
	var normal = reverse.split("").reverse().join("");
	$('#output').text(normal)
}



function clear () {
	$('#output').text('');
	$('#input').val('');
}

function normal () {
	$('#output').text($('#input').val());
}
function black () {
	$('body').css('background','#000');
}
function yellow () {
	$('body').css('background','yellow');
}
