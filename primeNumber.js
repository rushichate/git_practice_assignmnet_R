
let num = 12;
let count = 0;
	for(let i=2; i<=num**(1/2); i++){
		if(num%i==0){
		count++;
			}
		}
	if(count==0){
		console.log(num, "is a prime number");
        else{
		console.log(number, "is not a prime number");
  }