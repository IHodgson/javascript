$(function(){
	var z =prompt('enter a number');
	z = parseInt(z);
	var y = square(z);
	console.log(z);
	console.log(y);

	var a = volume(3,5,7);

	var b = volume(2,9,8);

	var c = volume(1,8,2);

	console.log(a);
	console.log(b);
	console.log(c);

});


function square(x){
  var s = x*x;
  return s;
}

function volume (l,w,h) {
	return l*w*h;
}