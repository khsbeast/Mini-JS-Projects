const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
const showError =(input,message)=>{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//Show success outline
const showSuccess = (input)=>{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Checking email

const checkEmail= (input)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(input.value.trim()).toLowerCase())){
        showSuccess(input);
    }
    else{
        showError(input,"Email is not valid");
    }

}

// Generating name for error

const getName = (input)=>{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check Required field
const checkRequired = (inputArr)=>{
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getName(input)} is required`);
        }
        else{
            showSuccess(input);
        }
    });
} 

// Check length

const checkLength=(input,min,max)=>{
    if(input.value.length<min){
        showError(input,`${getName(input)} must be atleast ${min} characters`);
    }
    else if(input.value.length>max){
        showError(input,`${getName(input)} must not be more than ${max} characters`);
    }
    else{
        showSuccess(input);
    }
}

// Check password match

const passwordMatch = (input1,input2)=>{
    if(input1.value != input2.value)
    {
        showError(input2,"Passwords do not match")
    }
    else{
        showSuccess(input2);
    }
}

//Event listeners

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,20);
    checkEmail(email);
    passwordMatch(password,password2);
    
});