// to create error messages display for required fields 
var emailError=document.getElementById("errorEmail");
var messageError=document.getElementById("errorMsg");
function requiredChecker(){

var Email=document.getElementById("email").value;
var Message=document.getElementById("messageBox").value;
isValid=true;
// to create error messages display when message is not filed 
if(Message==""){
   errorMsg.innerHTML="Please enter your message";
   isValid=false;
}
// to create error messages display when email is not filed or written incorrectly
if(Email==""){
   errorEmail.innerHTML="Please enter your email";
   isValid=false;
  
}
 else if(!Email.includes("@")){  

    errorEmail.innerHTML="Please enter a vaild email";
   isValid=false;
}
//to create submiting alert
if(isValid){
    alert("Your message has been received successfully, Thank you for contacting us")
}
 return isValid;
}


//to create self-correcting quiz
 function checkAnswers(){
    var correct = 0;
    
if(document.querySelector('input[name="Q1Answer"]:checked')?.value== "Press once on the cover"){
    correct++;
}
if(document.querySelector('input[name="Q2Answer"]:checked')?.value== "It appears 8 times"){
    correct++;
}
if(document.querySelector('input[name="Q3Answer"]:checked')?.value== "Overnight"){
    correct++;
}
//to make it reqired to answe the qustions before checking answers
if(!document.querySelector('input[name="Q1Answer"]:checked') ||
    !document.querySelector('input[name="Q2Answer"]:checked') ||
!document.querySelector('input[name="Q3Answer"]:checked')){
    alert("Please answer the questions before checking answers");
    return;
}
//to write the correct answer with the score
document.getElementById("Q1A").innerHTML="The correct answes is: Press once on the cover ";
document.getElementById("Q2A").innerHTML="The correct answes is: It appears 8 times ";
document.getElementById("Q3A").innerHTML="The correct answes is: Overnight ";
document.getElementById("score").innerHTML="Your score is " + correct + " out of 3";

//to show the element that contain the answer, as it dispaly:none
document.getElementById("Q1A").style.display="flex";
document.getElementById("Q2A").style.display="flex";
document.getElementById("Q3A").style.display="flex";
document.getElementById("score").style.display="flex";
 }

 