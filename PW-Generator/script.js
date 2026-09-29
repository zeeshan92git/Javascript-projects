const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-[]{}|\\':\",./<>?";

const lengthEl = document.getElementById('length');
const lowerCaseEl = document.getElementById('lowercase');
const upperCaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

const generateBtn = document.getElementById('generate');
const passwordEl = document.getElementById('password');
const resetBtn = document.getElementById('reset');


generateBtn.addEventListener('click',function() {
    const length = lengthEl.value;
    let characters = "";
    let password = "";

    if(lowerCaseEl.checked){
        characters += lowerCase;
    }

    if(upperCaseEl.checked){
        characters += upperCase;
    }

    if(numbersEl.checked){
        characters += numbers;
    }

    if(symbolsEl.checked){
        characters += symbols;
    }

    for(let i=0; i<length ; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordEl.value = password;
});

resetBtn.addEventListener('click',()=>{
    passwordEl.value = '';
});

