var selected = null;

$(function(){
	$('#addcolors').click(addboxes);
	$('#boxes').on('hover','.box',hover);
	$('#boxes').on('click','.box',select);
	$('#boxes').on('click','.border',deselect);
	$('#boxes').on('dblclick','.box',remove);
	$('#back').click(moveback);
	$('#fwd').click(movefwd);

});

function remove () {
	$(this).detach();
}

function moveback () {
	var x = selected.prev();
	x.before(selected);
	}

function movefwd () {
	var x = selected.next();
	x.after(selected);
	}


function select() {
	if (selected==null) {
		$(this).addClass('border');
		// $(this).css('color','yellow');
		selected = $(this);
		console.log('case 1');
	}

	else if ( $(this) != selected ) {
		// $('.box').css('color','');
		$('.box').removeClass('border');
		$(this).addClass('border');
		// $(this).css('color','yellow');
		selected = $(this);
		console.log('case 2');
	};
}

function deselect () {
	$('.box').removeClass('border');
	selected=null;
}

function hover () {
	$('#input').css('background-color',$(this).css('background-color'));
}

function addboxes () {
	var add = $('#input').val();
	add = add.split(' ');
	for(i=0;i<add.length;i++){
		var a = $('<span>');
		a.addClass('box');
		a.css('background-color',add[i]);
		$('#boxes').append(a);
	}
}
