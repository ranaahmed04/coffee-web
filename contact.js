

var firstName_error = document.getElementById('first-error');
var lastName_error = document.getElementById('last-error');
var mail_error = document.getElementById('email-error');
var phone_error =document.getElementById('phone-error');
var question_error= document.getElementById('text-error');
var submit_error = document.getElementById('submit-error');
var regName =  /^[a-zA-Z]{2,20}$/;
var regphone= /^[0-9]{11}$/;
var regmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function Validate_fname(){

    var firstName = document.getElementById('firstName').value;
   

    if (firstName == 0){
        firstName_error.innerHTML=' Name is required';
        return false;
    }
    if(!regName.test(firstName)){
        firstName_error.innerHTML='Please enter a valid name';
        return false;
    }
    firstName_error.innerHTML="<img class=\"check\"src=\"images/check.png\">";
    return true;

}
function Validate_lname(){

    var lastName = document.getElementById('lastName').value;
   

    if (lastName == 0){
        lastName_error.innerHTML='name is required';
        return false;
    }
    if(!regName.test(lastName)){
        lastName_error.innerHTML='Please enter a valid name';
        return false;
    }
    lastName_error.innerHTML="<img class=\"check\"src=\"images/check.png\">";
    return true;

}
function Validate_phone(){
    var tephone = document.getElementById('phone').value;
    
    
    if(tephone.length ==0){
        phone_error.innerHTML=' Phone is required';
        return false; 
    }
    if(tephone.length !== 11){
        phone_error.innerHTML='Phone should be of 11 digits';
        return false; 
    }
    if (!regphone.test(tephone)){
        phone_error.innerHTML=' Digits only';
        return false; 
    }

    phone_error.innerHTML="<img class=\"check\"src=\"images/check.png\">";
    return true;
}
function Validate_mail(){
    var mail= document.getElementById('email').value;

    if (mail.length==0){
        mail_error.innerHTML='Email is required';
        return false;
    }
    if (!regmail.test(mail)){
        mail_error.innerHTML='Email invalid';
        return false;
    }

    mail_error.innerHTML="<img class=\"check\"src=\"images/check.png\">";
    return true;

}
function Validate_message(){
    var message= document.getElementById('question').value;
    var required =30;
    var left = required- message.length;

    if (left>0){
        question_error.innerHTML = left + 'More characters required';
        return false;
    }
    question_error.innerHTML="<img class=\"check\"src=\"images/check.png\">";
    return true;
}
function validateform(){
    if(!Validate_fname()|| !Validate_lname()|| !Validate_mail()|| !Validate_phone()|| !Validate_message()){
        submit_error.style.display='block';
        submit_error.innerHTML='Please fix errors';
        setTimeout(function(){submit_error.style.display='none';},3000);
        alert("error");
        return false
    }
    else{
        alert("Thank you form sents succesivly");
        return true;
    }
}
