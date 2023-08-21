let age = 29;
{
if (age < 20) {
  console.log("underaged");
}
else if (age > 20) {
	console.log("legal");
}
else {
	console.log("of age");
}}

// IF ELSE CONDITIONS
// documentquerySelector("body")

//note: textcontent does not clear the initial content


// return
// function


// booleans
// comparison operator

//  objects
let person = {
	name: "funmi",
		age: 22,
	country: "nig"
}

console.log(person.name)

function logData() {
	return (
		person.name + " is " + person.age + " years old and lives in" + person.country
	);
}
logData()
console.log(logData());
// ARRAY
// FOR loop
let cards = [4, 5, 6, 7];

for (let i = 0; i < cards.length; i++){
	console.log(cards[i]);
}


let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

for (let i = 1; i < largeCountries.length; i++){
	console.log("-    " + largeCountries[i]);
}

// Math.random is 0.000 - 0-999
// Math.random()* 5, it becomes 0.000 - 4.999
// Math.random()* 5) + 1, adding 1 makes it start from 1.000 - 4.999
// Math.floor() rounds up
// logical operators

let hands = ["rock", "paper", "scissor"];



function getHand() {
	let randomIndex = Math.floor(Math.random() * 3); // 0-2.9999
	return randomIndex;
}

console.log(getHand());  


// password generator
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
	",",
	"|",
	":",
	";",
	"<",
	">",
	".",
	"?",
	"/",
];

