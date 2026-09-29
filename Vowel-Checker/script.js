const isVowel = (char)=> {
    const vowels = ['a','e','i','o','u'];
    if(vowels.includes(char)) return true;
    return false;
};

function checkVowels () {
    let text = document.getElementById("inputtext").value;
    let vowelCount = 0;
    //converting whole text to lower case
    text = text.toLowerCase();

    for(let i = 0  ; i < text.length; i++) {
        if(isVowel(text.charAt(i))) vowelCount++;   
    }

    let result = document.getElementById('result');
    result.textContent = 'Total Vowels: ' + vowelCount;

}
