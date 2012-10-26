selected = null;
z=0;
$(function(){
	$('#small').click(small);
	$('#board').on('click','.box', pick);
});

function small () {
	letters = ["a","b","c","d","e","a","b","c","d","e"];
	shuffle(letters);
	for (i=0;i<letters.length;i++){
		card = $('<span>');
		card.addClass('box');
		card.addClass('hide');
		card.attr('id',i);
		$('#board').append(card);
	}
	solved=0;
}

function pick () {
	sel = $(selected).attr('id');
	console.log('sel ' + sel);
	console.log(letters[sel]);
	id = $(this).attr('id');
	console.log('id ' +id);
	console.log(letters[id]);
	prev = selected;
	selected = this;


	if (letters[sel]!=letters[id] ){									//doesn't match
		$('.box').removeClass('selected');
		if(z!=1) $(prev).text('');
		$(this).addClass('selected');
		$(this).text(letters[id]);
		z=0;
	}
	else if(letters[sel]==letters[id] && id != sel){  //matches
		$(this).addClass('matched');
		$(this).text(letters[id]);
		$(prev).addClass('matched');
		$(prev).text(letters[sel]);
		z=1;
		solved++;
			if (solved >= (letters.length/2)) {
				$('.box').addClass('win');
				$('.box').removeClass('selected');
		}
	}
}

function shuffle (myArray) {
  var i = myArray.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = myArray[i];
     var tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
}