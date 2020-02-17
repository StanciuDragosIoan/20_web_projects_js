const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


function showError(input, msg) {  
   const formControl = input.parentElement;
   formControl.className = "form-control error";
   const small = formControl.querySelector("small");
   small.innerText = msg;
}

function showSuccess(input, msg)  {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isValidEmail(email)    {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required...`);
        } else {
            showSuccess(input);
        }
    });
}


 

//check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} Length must be more than ${min}...`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} Length must be less than ${max}...`);
    } else {
        showSuccess(input);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function(e) {

    e.preventDefault();

    checkRequired([username,  email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);





    //initial implementation (not scalable)

    // if(username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // }


    // if(email.value === '') {
    //     showError(email, 'Email is required');
    // } else if(!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');
    // }else {
    //     showSuccess(email);
    // }


    // if(password.value === '') {
    //     showError(password, 'Password is required');
    // } else {
    //     showSuccess(password);
    // }


    // if(password2.value === '') {
    //     showError(password2, 'Password is required');
    // } else {
    //     showSuccess(password2);
    // }
});