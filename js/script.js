// self invoking function for light and dark mode
(function () {
  const darkToggle = document.querySelector(".toggle-dark");

  // eventListener
  darkToggle.addEventListener("click", (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle("dark");
  });
}) ();

const characters = [	"A",	"B",	"C", "D",  "E", "F",	"G",	"H",	"I",	"J","K",	"L",  "M", "N",	"O",	"P",	"Q","R",	"S",	"T",  "U", "V",	"W",	"X", "Y",	"Z",	"a","b",  "c", "d",	"e","f",	"g",	"h",	"i",	"j",  "k", "l","m",	"n",	"o",	"p",	"q","r", "s", "t", "u",	"v",	"w",	"x",	"y",	"z", "0",  "1",	"2",	"3",	"4",	"5",	"6","7", "8", "9",	"~",	"`",	"!",	"@","#","$","%", "^",  "&", "*",	"(",	")","_",	"-",	"+",	"=",	" {", "[",	"",	"",	",",	"",	":",	";",	"<",	 ">",	".",	"?",	"/",
];

console.log(characters[Math.floor(Math.random() * characters.length)]);
 
const pwGenerateBtn = document.getElementById('pw-gen');
const pwDisplayEl = document.getElementById("pw-display");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const alphabethCheck = document.getElementById("alphabeth");
const numberCheck = document.getElementById("number");
const charaterCheck = document.getElementById("charater").checked = false;




// //Forgot Password 
// let buttonTag = document.querySelector(".otp");
// const otpDisplay = document.querySelector("#otp-display");
// buttonTag.addEventListener("click", () => {
//   let OTP = ""
//   for (let i = 0; i < 6; i++){
//     OTP += Math.floor(Math.random() * 9);
//   otpDisplay.innerText = OTP;
// otpDisplay.style.fontSize = "3em";
// } 
//  })