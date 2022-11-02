let str="naman";
let bag="";
	for(let i =str.length-1; i>=0; i--){
        bag+=str[i];
    }
	if(bag==str){
		console.log(str, "is a pelindrome ");
	}
    else{
		console.log(str, "is not a pelindrome ");
	}