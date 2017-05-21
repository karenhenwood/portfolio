window.onload = function(){
//Define an array to hold users as they're added in the new registration page
var userArray = [];

//On first load, skip this step (null check)
//But when returning to the main page after adding users, get all the added users
//out of the array passed between the pages and into the working userArray
if(JSON.parse(sessionStorage.getItem('passingArray')) != null){
	for(i=0;i<JSON.parse(sessionStorage.getItem('passingArray')).length;i++){
	 	userArray.push(JSON.parse(sessionStorage.getItem('passingArray'))[i]);
	};
};
//log the list of users for convenience and troubleshooting
console.log(userArray);

document.getElementById('enternew').onclick = function() {verifyNew()};
//Verify new user function
function verifyNew(){

	var un = document.getElementById('unnew').value;

    //once users have been added to the user array,
	//check the new usernames against the known
	//if there's a match kick them back
	//if you get to the end of the array of known users
	//i will have incremented all the way to the array's length
	//this tells you there was no match and calls verifySecure
	//to ensure their password is long enough
	if(userArray.length>0){
		for(i=0; i<userArray.length; i++){
			if(un == userArray[i].un){
				alert("Username exists, please create a new username");
				document.getElementById('unnew').value = "";
				break;
			};
		};
		if(i==userArray.length){
			verifySecure();
		};
	}else{
		verifySecure();
	};
};

function verifySecure(){

	var pw = document.getElementById('pwnew').value;

	//check that the password entered is 8 characters or more
	if(pw.length>=8){
		addUser();
	}else{
		alert("Please enter a password of 8 characters or more");
		document.getElementById('pwnew').value = "";
	};
	
};

function addUser(){
	
	var newUser = {
		un: document.getElementById('unnew').value,
		pw: document.getElementById('pwnew').value,
	};

	//add the user to the array, put the array into the shared array, clear the inputs
	userArray.push(newUser);
	sessionStorage.setItem('passingArray', JSON.stringify(userArray));
	document.getElementById('unnew').value = "";
	document.getElementById('pwnew').value = "";

	alert("Your username and password have been successfully added! Please click the Return to Login link to log in");
};
};	


