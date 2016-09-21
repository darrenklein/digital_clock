//SET ONLOAD VARIABLES AND GET CURRENT TIME
var clock = document.getElementById("clock");
var millisecondContainer = document.getElementById("millisecond");
var timeStyle = "twentyfour";
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var milliseconds = date.getMilliseconds();

//clock.innerHTML = tellTime(hours, minutes, seconds);
//millisecondContainer.innerHTML = getMilliseconds(date.getMilliseconds());
var lightGreen = "#00FF74";
var darkGray = "#454545";

//CALLS tellTime() AND PASSES RESULT INTO CLOCK DIV
function loadClock(){
	clock.innerHTML = tellTime(hours, minutes, seconds);
	millisecondContainer.innerHTML = getMilliseconds(date.getMilliseconds());
}

//SO THAT CLOCK IS RENDERED ON PAGE LOAD
loadClock();

//THE MAIN TIME-TELLING FUNCTION
function tellTime(hours, minutes, seconds){
	//SET DISPLAY AND STYLE BASED ON CLOCK MODE/ACTUAL TIME
	if(timeStyle === "twelve" && hours > 12){
		hours = hours - 12;
	};
	
	//ADD LEADING ZEROS TO SINGLE-DIGIT NUMBERS
	for(i = 0; i < arguments.length; i++){
		if(arguments[i].toString().length === 1){
			arguments[i] = "0" + arguments[i];
		};
	};

	//BUILD THE FINAL TIME INPUT
	time = hours + ":" + minutes + ":" + seconds;
	return time;
};

//ADD LEADING ZEROS TO SINGLE- AND DOUBLE-DIGIT NUMBERS, IF NEEDED
function getMilliseconds(milliseconds){
	if(milliseconds.toString().length === 1){
		milliseconds = "00" + milliseconds;
	}
	else if(milliseconds.toString().length === 2){
		milliseconds = "0" + milliseconds;
	}
	else{
		milliseconds = milliseconds;
	};
	return milliseconds;
};

//GETS NEW DATE INFO AND UPDATES THE CLOCK WITH tellTime() EVERY SECOND
window.setInterval(function(){
	date = new Date();
	hours = date.getHours();
	minutes = date.getMinutes();
	seconds = date.getSeconds();
	loadClock();
}, 1);

//GETS NEW DATE INFO AND UPDATES THE CLOCK WITH getMilliseconds() EVERY MILLISECOND
window.setInterval(function(){
	date = new Date();
	milliseconds = date.getMilliseconds();
	millisecondContainer.innerHTML = getMilliseconds(milliseconds);
}, 1);

//TOGGLES BETWEEN TWENTY-FOUR AND TWELVE-HOUR TIME DISPLAY
function hoursChange(element){

	if(element.getAttribute("hours") === "twentyfour"){
		timeStyle = "twelve";
		element.setAttribute("hours", timeStyle);
		element.innerHTML = "twelve-hour";

		//SET DISPLAY AND STYLE BASED ON CLOCK MODE/ACTUAL TIME
		if(hours >= 12){
			document.getElementById("pm").style.color = lightGreen;
			document.getElementById("am").style.color = darkGray;
		}
		else{
			document.getElementById("am").style.color = lightGreen;
			document.getElementById("pm").style.color = darkGray;
		};
	}
	else{
		timeStyle = "twentyfour";
		element.setAttribute("hours", timeStyle);element.innerHTML = "twenty-four hour";
		document.getElementById("am").style.color = darkGray;
		document.getElementById("pm").style.color = darkGray;
	};
};

//ADDS A CLICK LISTENER TO THE hours_change BUTTON AND RUNS hoursChange() ON CLICK
document.getElementById("hours_change").addEventListener("click", function(){hoursChange(this)});