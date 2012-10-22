$(function(){

var what = prompt('animal, color, people, or quit?');
while(what != 'q'){
	var num = prompt('how many?');
	num = parseInt(num);
	var animals=[];
	var colors=[];
	var people=[];
		while (what != 'q'){
			if(what == 'a'){
				for(i=0;i<num;i++){
					var add = prompt('type your #'+i);
					animals.push(add);
					console.log(animals);
				}
			}
			else if(what == 'c'){
				for(i=0;i<num;i++){
					var add = prompt('type your #'+i);
					colors.push(add);
					console.log(colors);
				}
			}
			else if(what == 'p'){
				for(i=0;i<num;i++){
					var add = prompt('type your #'+i);
					people.push(add);
					console.log(people);
				}
			}
			var what = prompt('animal, color, people, or quit?');
			if (what != 'q'){
				var num = prompt('how many?');
				num = parseInt(num);
			}
		}
		console.log('animals: ' + animals);
		console.log('colors: ' + colors);
		console.log('people: ' + people);
}
what = prompt('do you want to delete from your arrays? (y/n)');
while(what == 'y'){
	var fix = prompt('which array do you want to fix or quit? (a/c/p/q)');
	while(what=='y'){
		if (fix == 'a'){
			console.log('animals: ' + animals);
			var rm = prompt('what to delete?')
			var pos = animals.indexOf(rm);
			if ( ~pos ) animals.splice(pos, 1);
			console.log('animals: ' + animals);
		}
		else if (fix == 'c'){
			console.log('colors: ' + colors);
			var rm = prompt('what to delete?')
			var pos = colors.indexOf(rm);
			if ( ~pos ) colors.splice(pos, 1);
			console.log('colors: ' + colors);
		}
		else if (fix == 'a'){
			console.log('people: ' + people);
			var rm = prompt('what to delete?')
			var pos = people.indexOf(rm);
			if ( ~pos ) people.splice(pos, 1);
			console.log('people: ' + people);
		}
		what = prompt('do you want to delete from your arrays? (y/n)');
		if(what =='y'){
			var fix = prompt('which array do you want to fix or quit? (a/c/p/q)');
		}
	}
}

		console.log('animals: ' + animals);
		console.log('colors: ' + colors);
		console.log('people: ' + people);

});