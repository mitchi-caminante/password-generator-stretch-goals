const letterChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()-=_+[]{}|;:,.<>?/';

let generatePasswordBtn = document.getElementById("generate-pass")
let passwordOneOutput = document.getElementById("output-1")
let passwordTwoOutput = document.getElementById("output-2")
let passwordOutputs = document.getElementById("outputs")
let copyMsg = document.getElementById("copy-msg");
let slider = document.getElementById("myRange");
let sliderValueDisplay = document.getElementById("value-display");
let resetBtn = document.getElementById("reset-btn")

//functions for generating characters//

function getRandomCharacter(includeNumbers, includeSymbols) {
    let validChars = letterChars;
    if (includeNumbers){
        validChars += numberChars
    }
    
    if (includeSymbols){
        validChars += symbolChars
    }

    let randomChar = Math.floor(Math.random() * validChars.length)
    return validChars[randomChar]
}

function generateRandomPassword(length, includeNumbers, includeSymbols) {  
    let randomPassword = ""
    for (let i = 0; i < length; i++) {
        randomPassword += getRandomCharacter(includeNumbers, includeSymbols)         
    }
    return randomPassword
}


//event listeners for buttons//

generatePasswordBtn.addEventListener("click", function() {
    const passwordLength = parseInt(slider.value);
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    passwordOneOutput.textContent = generateRandomPassword(passwordLength, includeNumbers, includeSymbols)
    passwordTwoOutput.textContent = generateRandomPassword(passwordLength, includeNumbers, includeSymbols)
    passwordOneOutput.classList.add("hasContent");
    passwordTwoOutput.classList.add("hasContent");
    copyMsg.style.display = "none"
})

resetBtn.addEventListener("click", () => {
    passwordOneOutput.textContent = "";
    passwordTwoOutput.textContent = "";
    passwordOneOutput.classList.remove("hasContent");
    passwordTwoOutput.classList.remove("hasContent");
    copyMsg.style.display = "none"
})

slider.addEventListener('input', function(event) {
  sliderValueDisplay.textContent = event.target.value;
});


// this copy on click event doesn't work in Scrimba because of the security protocols but it works when it's deployed on Netlify. I used a span element for my output boxes and I didn't want to change everything to an input element, because it's not really an input element. I've commented out the line that doesn't work so that the animations that are rendered on click still work//

passwordOutputs.addEventListener("click", function(event) {
    if (event.target.dataset.password && event.target.classList.contains("hasContent")) {
        let password = event.target.textContent;
        // navigator.clipboard.writeText(password);
        copyMsg.style.display = "inline";
    }
})



