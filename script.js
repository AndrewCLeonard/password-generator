// Assignment code here
function generatePassword() {}
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
	const password = generatePassword();
	const passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const slider = document.getElementById("passwordSlider");

// span where slider value will appear
const sliderValueText = document.getElementById("slider-value");
sliderValueText.innerHTML = slider.value;

slider.oninput = function () {
	sliderValueText.innerHTML = this.value;
};

// create array of lowercase letters A-Z
// https://betterprogramming.pub/how-to-generate-an-alphabet-javascript-array-eae6940ea646
const lowercaseLetterArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
console.log(lowercaseLetterArray);

// create uppercase letters array
const uppercaseLettersArray = lowercaseLetterArray.map((letter) => {
	return letter.toUpperCase();
});
console.log(uppercaseLettersArray);

// create numbers array
const numbers = [...Array(10)].map((_, i) => String.fromCharCode(i + 48));
console.log(numbers);

// create symbols array
const symbols1 = [...Array(15)].map((_, i) => String.fromCharCode(i + 33));

const symbols2 = [...Array(5)].map((_, i) => String.fromCharCode(i + 58));

const symbols3 = [...Array(5)].map((_, i) => String.fromCharCode(i + 91));

const symbols4 = [...Array(4)].map((_, i) => String.fromCharCode(i + 123));

const symbolsArray = [...symbols1, ...symbols2, ...symbols3, ...symbols4];
console.log(symbolsArray);
