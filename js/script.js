// self invoking function for light and dark mode
(function () {
	const darkToggle = document.querySelector(".toggle-dark");

	// eventListener
	darkToggle.addEventListener("click", (event) => {
		event.preventDefault();
		document.documentElement.classList.toggle("dark");
	});
	
})();

// Password Generation array
const alphabeth = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];

//DOM Interaction 
const pwGenerateBtn = document.getElementById("pw-gen");
const pwDisplayEl = document.getElementById("pw-display");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const alphabethCheck = document.getElementById("alphabeth");
const numberCheck = document.getElementById("number");
const symbolCheck = document.getElementById("symbol");
const pwLenghtEl = document.getElementById("pw-length");
const storageBoxEl = document.getElementById("storage-box");

//Password Generation requirements 

pwGenerateBtn.addEventListener("click", function () {
	let pwGen = "";
	
	function randomPwDisplay() {
	//to check if alphabeth only is required 
      		if (
			alphabethCheck.checked === true &&
			numberCheck.checked === false &&
			symbolCheck.checked === false
		) {
		//code to display alphabeth only
		pwGen += alphabeth[Math.floor(Math.random() * alphabeth.length)];
		pwDisplayEl.innerText = pwGen;
  } 
  	//to check alphabet and symbol is required 
  else if (
		 	alphabethCheck.checked === true &&
		 	symbolCheck.checked === true &&
		 	numberCheck.checked === false
		 ) 
		 	//code to display alphabet and symbol only
		 {
      
		pwGen += alphabeth.concat(symbol)[Math.floor(Math.random() * alphabeth.concat(symbol).length)];
		pwDisplayEl.innerText = pwGen;
     
		} 	
		//to check alphabet and number is required
		 else  if (
		 	alphabethCheck.checked === true &&
		 	symbolCheck.checked === false &&
		 	numberCheck.checked === true
		 ) 
		 //code to display alphabet and number only
		 {
      	
		pwGen += alphabeth.concat(number)[Math.floor(Math.random() * alphabeth.concat(number).length)];
		pwDisplayEl.innerText = pwGen;
     
		} 
      //to check number only is required
		 else  if (
		 	alphabethCheck.checked === false &&
		 	symbolCheck.checked === false &&
		 	numberCheck.checked === true
		 ) 
		 //code to display number only
		 {
      	
		pwGen += number[Math.floor(Math.random() * number.length)];
		pwDisplayEl.innerText = pwGen;
     
		} 
      
        //to check number and symbol is required
		 else  if (
		 	alphabethCheck.checked === false &&
		 	symbolCheck.checked === true &&
		 	numberCheck.checked === true
		 ) 
		 //code to display number and symbol
		 {
      	
		pwGen += number.concat(symbol)[Math.floor(Math.random() * number.concat(symbol).length)];
		pwDisplayEl.innerText = pwGen;
     
		}
		
		      //to check symbol only is required
		 else  if (
		 	alphabethCheck.checked === false &&
		 	symbolCheck.checked === true &&
		 	numberCheck.checked === false
		 ) 
		 //code to display symbol only
		 {
      	
		pwGen += symbol[Math.floor(Math.random() * symbol.length)];
		pwDisplayEl.innerText = pwGen;
     
		}
		//to check all 3 is required
		 else  if (
		 	alphabethCheck.checked === true &&
		 	symbolCheck.checked === true &&
		 	numberCheck.checked === true
		 ) 
		 //code to display all 3
		 {
      	
		pwGen += symbol.concat(number, alphabeth)[Math.floor(Math.random() * symbol.concat(number, alphabeth).length)];
		pwDisplayEl.innerText = pwGen;
     
		}
		else {
		    pwDisplayEl.innerText = "ERROR";
						
		}
		
  }
  


	// password length code to loop through and executive generate function

	let selected = document.getElementById("pw-length");
	if (selected.value == 11) {
		for (let i = 0; i < 11; i++) {
			randomPwDisplay();
		}
	} else if (selected.value == 12) {
		for (let i = 0; i < 12; i++) {
			randomPwDisplay();
		}
	} else if (selected.value == 13) {
		for (let i = 0; i < 13; i++) {
			randomPwDisplay();
		}
	} else if (selected.value == 14) {
		for (let i = 0; i < 14; i++) {
			randomPwDisplay();
		}
	} else if (selected.value == 15) {
		for (let i = 0; i < 15; i++) {
			randomPwDisplay();
		}
	} else {
		for (let i = 0; i < 10; i++) {
			randomPwDisplay();
		}
	}
});

// Save button function to render whatever is in display when clicked
saveBtn.addEventListener("click", function () {
	storageBoxEl.style.display = "block";
	storageBoxEl.innerText = pwDisplayEl.innerText;
	// localStorage.setItem("passwords", pwDisplayEl.innerText)
	pwDisplayEl.innerText = "";
})

// Clear button function to clear whatever is in storage and display when clicked
clearBtn.addEventListener("click", function () {
	storageBoxEl.innerText = "";
	pwDisplayEl.innerText = "";
	storageBoxEl.style.display = "none";
})