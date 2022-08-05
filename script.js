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
const lowercaseLettersArray = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

// create uppercase letters array
const uppercaseLettersArray = lowercaseLettersArray.map((letter) => {
	return letter.toUpperCase();
});

// create numbers array
const numbersArray = [...Array(10)].map((_, i) => String.fromCharCode(i + 48));

// create symbols array
const symbols1 = [...Array(15)].map((_, i) => String.fromCharCode(i + 33));

const symbols2 = [...Array(5)].map((_, i) => String.fromCharCode(i + 58));

const symbols3 = [...Array(5)].map((_, i) => String.fromCharCode(i + 91));

const symbols4 = [...Array(4)].map((_, i) => String.fromCharCode(i + 123));

const symbolsArray = [...symbols1, ...symbols2, ...symbols3, ...symbols4];

// console.log(Math.floor(Math.random() * 3));

// on button click
// // const passwordLength = slider.value
// // create object which includes the selected arrays of characters
// // e.g. if lowercase, UPPERCASE, and numbers are selected (symbols left unchecked), then the object would be {}

const passwordModalBtn = document.getElementById("passwordModalBtn");

passwordModalBtn.addEventListener("click", (e) => {
	e.preventDefault();

	// check status of checkboxes
	const lowercaseChecked = document.getElementById("lowercase").checked;
	const uppercaseChecked = document.getElementById("uppercase").checked;
	const numbersChecked = document.getElementById("numbers").checked;
	const symbolsChecked = document.getElementById("symbols").checked;

	const characterArray = [];

	if (lowercaseChecked) {
		characterArray.push(lowercaseLettersArray);
	}

	if (uppercaseChecked) {
		characterArray.push(uppercaseLettersArray);
	}
	if (numbersChecked) {
		characterArray.push(numbersArray);
	}
	if (symbolsChecked) {
		characterArray.push(symbolsArray);
	}

	// check length of password slider
	const sliderValue = slider.value;
	// console.log(sliderValue);

	// make it a zero-based length
	const characterArrayLength = characterArray.length;
	let password = "";

	for (let i = 0; i < sliderValue; i++) {
		let randomlySelectedArray = Math.floor(Math.random() * characterArrayLength);
		let randomlySelectedCharacter = Math.floor(Math.random() * characterArray[randomlySelectedArray].length);
		password += characterArray[randomlySelectedArray][randomlySelectedCharacter];
	}

	// add generated password to DOM
	const generatedPasswordDiv = document.querySelector(".generated-password-div");
	const passwordParagraph = document.getElementById("password-paragraph");
	console.log(passwordParagraph);

	passwordParagraph.textContent = password;
});
