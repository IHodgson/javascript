var Dog;

$(function(){
	Parse.initialize("9gHjuLoyVwbhopcpI5zbOIF8ukX7h9PUDGuROQmp", "YbcuQeot7CDuAhH3b1MH1QOkyH7NWBuFokHwfzxw");
	Dog = Parse.Object.extend("Dog");
	$('#b1').click(save_data);
	$('#b2').click(get_data);
});

function save_data () {
	var d1 = new Dog();
	var name = $('#t1').val();
	var age = $('#t2').val();
	d1.save({dog_name: name, dog_age: age}, { success: show_success });
}

function show_success () {
	console.log('data saved to parse!');
}

function get_data () {
	var query = new Parse.Query(Dog);
	query.ascending("dog_name");
	query.find({
		// success: console.log(results)
		success: function(results) {
			for(var i=0;i<results.length;i++){
				var p = $('<p>');
				var name = results[i].get('dog_name');
				p.text(name);
				$('#data').prepend(p);
			}
		}
		,
		error: function(error){}
	});
}