//get the reference to full name with id cultestName
let fn = document.getElementById("cultestName");

//get the reference to email with id email
let em =  document.getElementById("email");

//get the reference to message with id message
let msg =  document.getElementById("message");

//get the reference to validate form with id validate-form
let btn =  document.getElementById("validate-form");



//create event handler that will take care of the action following button click

function formValidator(){



	//create object that will save user inputs (empty bucket)
	let feedback = {};
	//create array that will save error messages (empty bucket)
	let errors =  [];

	//check if full name has a value
	if (fn.value !== ""){
		//if it does, save it
		feedback.cultestName = fn.value;
	}else{
		//if it does not, create the error message, and save that too
		errors.push("Please inform us of the name of the person.")
	}
	
	//check if email has a value
	if (em.value !== ""){
		//if it does, save it
		feedback.email = em.value;
	}else{
		//if it does not, create the error message, and save that too
		errors.push("Please provide the contact information.")
	}

	//check if message has a value
	if (msg.value !== ""){
	//if it does, save it
		feedback.messgae = msg.value;
	}else{
		//if it does not, create the error message and save that too
		errors.push("Please write down your mad ramblings.")
	}


	//create either feedback, or display all errors

	if (errors.length === 0){
		console.log(feedback);
	}else{
		console.log(errors);
	}

}//close your event handler

//register your button for click event
btn.addEventListener("click", formValidator);