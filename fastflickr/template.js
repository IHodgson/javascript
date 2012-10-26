var item = [];
var x = 0;
var p = 1;

var stop = setInterval(wait,1000);


$(function(){
	$('#add').click(search_flickr);
	if(x==4){
		clearInterval(stop)};
});

function search_flickr () {
	var search = $('#search').val();
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=99ac2d8b7d085534e98f6d7fc52155c5&tags='+search+'&format=json&jsoncallback=?',flickrResults);
}

function flickrResults (data) {
	for (var j=0;j<5;j++){
		item.push(data.photos.photo[j]);
	}
	setInterval(wait,1000);
}

function wait () {
		var src = "http://farm"+ item[x].farm +".static.flickr.com/"+ item[x].server +"/"+ item[x].id +"_"+ item[x].secret +"_m.jpg";
		var div = $('<div>');
		div.addClass('photo');
		var img = $('<img>');
		img.attr('src',src);
		div.append(img);
		$('#photos').prepend(div);
		x++;
}

function newPage () {
	var search = $('#search').val();
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=99ac2d8b7d085534e98f6d7fc52155c5&tags='+search+'&page='+p+'&format=json&jsoncallback=?',flickrResults);
	p++;
}