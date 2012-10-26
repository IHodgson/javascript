var counter = 0;

$(function(){
	// setTimeout(display_text, 3000);
	setInterval(d_more, 10);
});

function display_text () {
	$('#test').text('hello world');
}

function d2h(d) {
	return d.toString(16);
}

function d_more () {
	var d = $('<div>');
	d.text(counter);
	counter+=1;
	var color = counter%(16581375);
	console.log('color:'+color);
	var hex_color = '#'+d2h(color);
	d.addClass('funky');

	// var color_string = 'rgb(' +color+ ',' +color+ ',' +color+ ')' ;
	d.css('background-color',hex_color);
	console.log(hex_color);
	// d.css('background',color_string);

	$('#test').prepend(d);
}