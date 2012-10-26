$(function(){
	$('#add_animal').click(add);
});

function add () {
	var animal = {};
	animal.name = $('#animal_name').val();
	animal.color = $('#animal_color').val();
	animal.image = $('#animal_image').val();
	insert_animal(animal);
}

function insert_animal (animal) {
	var d = $('<div>');
	d.addClass('animal');
	d.css('background-color',animal.color);
	d.text(animal.name);


	var i = $('<img>');
	i.attr('src', animal.image);
	d.append(i);
	$('#animals').prepend(d);
}