const form = document.getElementById('form')
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
    e.preventDefault();
    }
    
})
function validateInputs(){
    let success = true
const usernameVal = username.value.trim();
const passwordVal = password.value.trim();



if(usernameVal===''){
    success=false;
    setError(username,'username is required')
}
else{
    setSuccess(username)
}


 if(passwordVal ===''){
    success=false;
    setError(password,'password is required')
 }
 else if(passwordVal.length < 8){
    success=false;
    setError(password,'password must be be atleast 8 character')
 }
 else{
    setSuccess(password)
 }

 
 return success;
}
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
