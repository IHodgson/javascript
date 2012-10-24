$(function(){
	$('#b1').click(popup);

});

function popup(){
	// alert('you just pressed me!' +x);
	
	var x = $('#t1').val();
	// alert(x);

	var n = parseInt(x);
	var z = cube(n);

	$('#i2').text(z);

	if(z>100)
		$('#i2').css('color','red');
	else
		$('#i2').css('color','blue');
}

function cube(x){
	return x*x*x;
}