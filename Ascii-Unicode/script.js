function detectChar () {

    const input = document.getElementById("charInput");
    const result = document.getElementById("result");

    const character = input.value;

    if(inASCII(character)){
        result.innerText = "The entered character is an ASCII character";
    }else{
        result.innerText = "The entered character is an UNICODE character";
    }
};


function inASCII (char) {
    return char.charCodeAt(0) <= 127;
};
