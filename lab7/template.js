$(function(){
	$('.a').hover(color_the_box,back);
	$('#add').click(add_node);
	$('#addcolors').click(add_colors);
	$('#boxes').on('hover','.box',make_pretty);
});

function color_the_box () {
	$(this).css('background',$(this).text());
}

function back () {
	$(this).css('background','');
}

function add_node () {
	var element = $('#element').val();
	var node = $('<'+element+'>');
	console.log(node);
	var css = $('#css').val();
	var text = $('#text').val();
	node.addClass(css);
	console.log(node);
	node.text(text);
	console.log(node);
	$('#elements').prepend(node);
}

function add_colors () {
	var count = $('#count').val();
	count = parseInt(count);
	for (var i = 0; i<count; i++) {
		var box =$('<div>');
		box.text(i+1);
		box.addClass('box');
		$('#boxes').append(box);
	}
}

function make_pretty () {
	$(this).toggleClass('red');
}