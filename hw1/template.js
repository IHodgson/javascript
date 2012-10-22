$(function(){
var what = prompt('animal, color, people, or quit?');
var num = prompt('how many?');
num = parseInt(num);
var list = [];
	while (what != 'q'){
		if(what == 'a'){
			for(i=0;i<num;i++){
				var add = prompt('type your #'+i);
				array(add);
				console.log(array);
			}

		}

	var what = prompt('animal, color, people, or quit?');
	}


});

function array(x){
	list.push(x);
	console.log(x);
	return x;
}