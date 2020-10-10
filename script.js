let mainString = "Null Archive Explorer [Version 1.0 BETA]";
let inputString = "";
let underscore = true;
let inputState = false;
document.getElementById("console").innerHTML = mainString;














function clamp(x, a, b)
{
	return Math.max(a, Math.min(x, b));
}






function update()
{
	if (inputState == true && underscore == true)
	{
		document.getElementById("console").innerHTML = mainString;
		document.getElementById("UI").innerHTML = inputString + "_" + "            ";
	}
	else
	{
		document.getElementById("console").innerHTML = mainString;
		document.getElementById("UI").innerHTML = inputString + "            ";
	}
}

function println(value)
{
	mainString += "<br>" + value;
	update();
}
function print(value)
{
	mainString += value;
	update();
}

function turnOnInput()
{
	inputState = true;
	update();
}

function turnOffInput()
{
	inputState = false;
	update();
}



inputString = "";
println("Currently is in a developing state.");
println("The explorer is not functioning yet.");
println("");
if ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) )
{
	println("Sorry, the explorer is not suitable for mobile devices.");
	println("");
}
println("home\\users\\main\\\> ");






function userPress(e)
{
	if (e.charCode == clamp(e.charCode, 0, 127) && inputState == true)
	{
		if (String.fromCharCode(e.charCode) != "\r")
		{
			inputString += String.fromCharCode(e.charCode);
		}
		update();
	}
}

function doSomething()
{
	println("");
	println("The explorer is not functioning yet.");
	println("");
	println("home\\users\\main\\\> ");
	inputString = "";
}

function userInput(e)
{
	if (e.keyCode == 8 && inputState == true)
	{
		inputString = inputString.slice(0, -1);
		update();
	}
	if (e.keyCode == 13 && inputState == true)
	{
		mainString = mainString + inputString;
		inputString = "";
		doSomething();
		console.log(inputString);
	}
}

let undescoreUpdate = setInterval(function() { underscore = !underscore; update(); }, 500);

document.addEventListener("click", (event) => 
{
	if (document.getElementById("UI") != event.target)
	{
		turnOffInput();
	}
	else
	{
		turnOnInput();
	}
});
document.addEventListener("keypress", userPress);
document.addEventListener("keydown", userInput);

