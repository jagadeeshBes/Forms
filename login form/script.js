const form = document.querySelector('#form');
const UserName = document.querySelector('.Username');
const EmailId = document.querySelector('.email');
const password = document.querySelector('.password');
const cpassword = document.querySelector('.cpassword');

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
})

function  checkInput(){
    UserNamevalue = UserName.value.trim();
    emailValue = EmailId.value.trim();
    passValue = password.value.trim();
    cpassValue = cpassword.value.trim();

    if(UserNamevalue === ''){
        setError(UserName,"user name cannot be blank");
    }
    else{
        setSuccess(UserName);
    }

    if(emailValue === ''){
        setError(EmailId,"Email connot be Blank")
    }
    else if(!isEmail(emailValue)){
        setError(email,"not a valid email")
    }
    else{
        setSuccess(email);
    }

    if(passValue === ''){
        setError(password,"password connot be blank");
    }

    else{
        setSuccess(password);
    }
    if(passValue === ''){
        setError(cpassword,"password connot be blank");
    }
    else if(passValue !== cpassValue ){
        setError(cpassword,"password does not Match")
    }
    else{
        setSuccess(cpassword);
    }
}

function setError(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'formControl error'
    small.innerText = message;
}

function setSuccess(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "formControl succes"
    small.innerText = message;
}


function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
