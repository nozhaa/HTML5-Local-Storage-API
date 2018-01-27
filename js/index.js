/* the function that apply a theme given as a parameter
1. Apply the theme by assigning the appropriate css class to the <body id="myPage"> tag
2. Store the name of the theme in the local storage
*/
function applyTheme(theme){
	// apply the theme to the <body id="myPage"> tag
	document.getElementById("myPage").className=theme;
	//store the theme in the local storage
	localStorage.setItem("theme", theme);
}
/* the function that will use the applyTheme function*/
function applyDayTheme(){
	applyTheme("day");
}
function applyNightTheme(){
	applyTheme("night");
}
function applyRedTheme(){
	applyTheme("red");
}
function applyBlueTheme(){
	applyTheme("blue");
}


/* The function that will add the event listeners for the event click on the buttons */
function addButtonsListeners(){
	//When a click occures on an  element with the id="b1" the callback function applyDayTheme will be executed 
	document.getElementById("b1").addEventListener("click", applyDayTheme);
    // The same thing for the button with the id="b2"
	document.getElementById("b2").addEventListener("click", applyNightTheme);
	    // The same thing for the button with the id="b3"
	document.getElementById("b3").addEventListener("click", applyRedTheme);
		    // The same thing for the button with the id="b4"
	document.getElementById("b4").addEventListener("click", applyBlueTheme);
	



	
	}
/* The function that will orchestrate the execution */
function initiale(){
	//Test if the browser supports the Local Storage API
	if(typeof(localStorage)===undefined)
		alert("The application can not be executed properly with this browser")
     else{
		 //If no theme is stored in the local storage then it is the application run the first
		 // time: we must apply the default theme: day
		 if(localStorage.getItem("theme")===null)

			 applyDayTheme();
			 else 
				 applyTheme(localStorage.getItem("theme"));
			 }
	// add listeners to the buttons
	addButtonsListeners();
}
/* Call the initiale function */ 
initiale();