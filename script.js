var isDate = function (input) {
	if((typeof input === 'object')||(/^\d{4}-\d{2}-\d{2}$/.test(input))==true){
		return true;

		return false;
	}
		
  //   write your code here
};

// Do not change the code below.
// const input = prompt("Enter Date.");
alert(isDate(input));
