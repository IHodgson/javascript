$(function(){
	var balance = 1000;
	var action = prompt('Deposit or Withdraw or Quit?');
	var amount;

while(action != 'q'){
	if (action == 'd')
		{
			amount = prompt('Amount?');
			amount = parseInt(amount);
			balance = balance + amount;
			console.log('you deposited $'+ amount + ' and have a balance of $' + balance);
			var action = prompt('Deposit or Withdraw or Quit?');
		}
		else if (action == 'w'){
			amount = prompt('Amount?');
			amount = parseInt(amount);
			balance = balance - amount;
			console.log('you deposited $'+ amount + ' and have a balance of $' + balance);
			var action = prompt('Deposit or Withdraw or Quit?');
		}
}
});