$(function(){

var response = prompt('enter a color or quit');
var colors = [];

	while(response != 'q'){
		colors.push(response);
		console.log('response');
		response = prompt('color or quit');
	}

	console.log(colors);

});