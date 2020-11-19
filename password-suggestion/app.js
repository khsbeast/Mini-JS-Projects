let password = document.getElementById('password');
let randomPassword = document.querySelector('.random');
let passwordLength = 15;
let passwordVal = "";

window.onload = function loadPassword(){
    let randomGenerateChars = "0123456789qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM@!#$%^&*";

    for(var i=0; i<passwordLength; i++)
    {
        let randomNumber = Math.floor(Math.random()*randomGenerateChars.length);
        passwordVal += randomGenerateChars.substring(randomNumber, randomNumber+1);
    }
    randomPassword.innerHTML = passwordVal;
}

password.addEventListener('focus', function(){
    if(password.value==''){
        randomPassword.style = 'display:block';
    }
})

randomPassword.addEventListener('click', function(){
    password.value = passwordVal;
    randomPassword.style='display:none';
})

function toggle() {
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }

function myFunction(show){
    show.classList.toggle("fa-eye-slash");
}