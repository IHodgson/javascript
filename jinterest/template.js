$(function(){
	Parse.initialize("MK7lhVosEa6ikqOrPZRV9Ja7Ub7uUH2aUjeAmTLJ", "RaGiYWQATPb56U8v5Zr4gi0mxEool5rSrq1k4zxA");
	var Photo = Parse.Object.extend("Photo");
	var src,
		note;
	$('div#inputs input[type="button"]').click(searchFlickr);
	$('div#flickr_photos').on('click','div.flickr_photo',bringUpNoteBox);
	$('body').on('click','.note_box_button',saveData);

	function searchFlickr () {
		$('div#flickr_photos').empty(); //empties container
		var search = $('input#search_terms').val();
		$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=907ad94705c77673e0df733db7014624&text='+search+'&format=json&jsoncallback=?', getPhoto);
	}

	function getPhoto (data) {
		for(var i = 0; i <data.photos.photo.length; i++){
			var itemFarm = data.photos.photo[i].farm,
				itemServer = data.photos.photo[i].server,
				itemId = data.photos.photo[i].id,
				itemSecret = data.photos.photo[i].secret;
				src = "http://farm"+ itemFarm +".static.flickr.com/"+ itemServer +"/"+ itemId +"_"+ itemSecret +"_m.jpg";
			var div = $('<div>').addClass('flickr_photo'); //end loop
			var img = $('<img>');
			$(img).attr('src', src);
			$(div).append($(img));
			$('div#flickr_photos').prepend(div);}
	}

	function bringUpNoteBox () {
		$('div.note_box').remove();
		var childImage = $(this).children('img')[0];
		src = $(childImage).attr('src');
		var textBox = $('<input>').attr('type','text').attr('id','note-text-box');
		var submitButton = $('<input>').attr('type','button').val("Add Note").addClass('note_box_button');
		var combinedInputs = $(textBox).after(submitButton);
		var noteBox = $('<div>').addClass('note_box').append(combinedInputs).prepend("Add Note: ");
		$(this).after(noteBox);
		$('#note-text-box').focus();
	}

	function saveData () {
			var photo = new Photo();
			note = $('.note_box input[type="text"]').val();
			photo.save(
				{imageSrc: src, note: note},
				{success: showSuccess}
				);
				setTimeout(getData,100);
	}

	function getData () {
		var query = new Parse.Query(Photo);
		query.ascending("createdAt");
		query.find(
		{success: function(results){
			$('#stored_photos').empty();
			for(var i = 0; i < results.length; i++){
					var imageSrc = results[i].get('imageSrc');
					var title = results[i].get('note');
					var img = $('<img>').addClass('stored_photo').attr('src',imageSrc);
					$(img).attr('title',title);
					$('div#stored_photos').prepend(img);
			}},
		error: console.log("Nothing")
		});
	};
	getData();

	function showSuccess () {
		console.log("data saved to Parse");
	}
});

