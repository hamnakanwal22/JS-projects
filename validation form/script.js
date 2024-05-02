var nameError=document.getElementById("name-error");
var phoneError=document.getElementById("phone-error");
var emailError=document.getElementById("email-error");
var msgError=document.getElementById("msg-error");
var submitError=document.getElementById("submit-error");
function validateName(){
    var name=document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML='Name is requried';
        return false;
    }
    if(!name.match(/^[A-Za-z]*/s{1}[A-Za]*$\)){
nameError.innerHTML='Write full name';
return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone(){
    var phone=document.getElementById("contact-phone").value;
 if(phoneError.length == 0){
    phoneError.innerHTML='Phone no is requried';
    return false;
 }   
 if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML='only digits ';
    return false;
 }
 nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
 return true;

}