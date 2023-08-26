// self invoking function for light and dark mode
(function () {
	const darkToggle = document.querySelector(".toggle-dark");

	// eventListener
	darkToggle.addEventListener("click", (event) => {
		event.preventDefault();
		document.documentElement.classList.toggle("dark");
	});
})();

const characters = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"~",
	"`",
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"(",
	")",
	"_",
	"-",
	"+",
	"=",
	"{",
	"[",
	"}",
	"]",
	"|",
	":",
	",",
	":",
	";",
	".",
	"?",
	"/",
];

const pwGenerateBtn = document.getElementById("pw-gen");
const pwDisplayEl = document.getElementById("pw-display");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const alphabethCheck = document.getElementById("alphabeth");
const numberCheck = document.getElementById("number");
const symbolCheck = document.getElementById("symbol");
const pwLenghtEl = document.getElementById("pw-length");

// let char = console.log(characters.splice(62, 28));
// let num = console.log(characters.splice(52, 10));
// let alph = console.log(characters.splice(0, 52));

pwGenerateBtn.addEventListener("click", function () {
	// reusuable function throught the array
	function pwArr() {
		if (
			alphabethCheck.checked === true &&
			numberCheck.checked === false &&
			symbolCheck.checked === false
		) {

      // characters.splice(characters.indexOf("~"), characters.indexOf("/") - characters.indexOf("~") + 1);
		// } else if (
		// 	alphabethCheck.checked === true &&
		// 	symbolCheck.checked === true &&
		// 	numberCheck.checked === false
		// ) {
      
      // characters.splice(characters.indexOf("0"), characters.indexOf("9") - characters.indexOf("0") + 1);
		}
      
      
      
			pwGen += characters[Math.floor(Math.random() * characters.length)];
		pwDisplayEl.innerText = pwGen;
  }
  

	let pwGen = "";
	// loop through the array

	let selected = document.getElementById("pw-length");
	if (selected.value == 11) {
		for (let i = 0; i < 11; i++) {
			pwArr();
		}
	} else if (selected.value == 12) {
		for (let i = 0; i < 12; i++) {
			pwArr();
		}
	} else if (selected.value == 13) {
		for (let i = 0; i < 13; i++) {
			pwArr();
		}
	} else if (selected.value == 14) {
		for (let i = 0; i < 14; i++) {
			pwArr();
		}
	} else if (selected.value == 15) {
		for (let i = 0; i < 15; i++) {
			pwArr();
		}
	} else {
		for (let i = 0; i < 10; i++) {
			pwArr();
		}
	}
});
