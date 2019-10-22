// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
       classmate = {
	firstName : ,
	lastName : ,
	age : ,
	height : ,
       }


//     -create a factory function.
	function factory (n){
  	if (n === 0 || n === 1){
   	return n;
	}else {
       	for(var i = 1; i <= n ; i++){
	n = n * i;
	}
	}
	return n;
	}

//     -create an array to hold the classmates that you created and what you created to it . 
	mate = [
	firstName,
	lastName,
	age,
	height,
	genre
	];
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
	function displayFriend (mate){
	for(var i = 0; i < mate.length;i++){
	return "Mate first name is  :"+firstName+" and his last name is : "+lastName+" and his age is : "+age+" and his height is : "+height;
	}
	}
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
	function addFriend (mate){
	var arr = [];
	var j = 0;
	for(var i = 0;i < mate.length;i++){
	arr[j] = mate[i];
	j++;
	}
	}
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
	function calc (mate){
        var count = 0;
	for(var i = 0 ; i < mate.length ; i++){
	if(mate[i] === "male"){
	count++;
	}
	}
	}
//     -Write a function searchMates that, given a query and an array of Mates,
	function searchmate(mate,query){
	for(var i = 0 ; i<mate.length;i++){
	if(mate[i] === query){
	return mate[i];
	}
	}
	}
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
	function search (mate,query){
	for(var i = 0;i< mate.length;i++){
	if(mate[i]===query){
	console.log("is this your friends ? : is yes press *"+mate[i]);
	if(onkeypress==="*"){ //i don't know if this is correct to use onkeypress here 
	return mate[i];
	}
 	}
	}
