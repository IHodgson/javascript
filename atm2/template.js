var bal1 = 850;
var bal2 = 1000;
var max = bal1 + bal2;


$(function(){
	$('#d1').click(dep1);
	$('#w1').click(wd1);
	$('#d2').click(dep2);
	$('#w2').click(wd2);
});

function wd1 () {
	var amt = $('#amt1').val();
	amt = parseInt(amt);
	if(amt>max)
		alert('error, excessive withdrawal');
	else if(amt<=bal1){
		bal1 = bal1 - amt;
		$('#bal1').text('$' + bal1);
	}
	else {
		bal2 = bal2 - (amt - bal1);
		bal1 = 0;
		$('#bal1').text('$' + bal1);
		$('#bal2').text('$' + bal2);
	}
	max = bal1 + bal2;
}
function wd2 () {
	var amt = $('#amt2').val();
	amt = parseInt(amt);
	if(amt>bal2)
		alert('error, excessive withdrawal');
	else if(amt<=bal2){
		bal2 = bal2 - amt;
		$('#bal2').text('$' + bal2);
	}
	max = bal1 + bal2;
}
function dep1 () {
	var amt = $('#amt1').val();
	amt = parseInt(amt);
	bal1 = bal1 + amt;
	$('#bal1').text('$' + bal1);
	max = bal1 + bal2;
}
function dep2 () {
	var amt = $('#amt2').val();
	amt = parseInt(amt);
	bal2 = bal2 + amt;
	$('#bal2').text('$' + bal2);
	max = bal1 + bal2;
}