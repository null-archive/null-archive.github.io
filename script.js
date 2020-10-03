let mainString = "Null Archive Explorer [Version 1.0 BETA]";
let inputString = "";
let underscore = true;
document.getElementById("console").innerHTML = mainString;

function clamp(x, a, b)
{
	return Math.max(a, Math.min(x, b));
}

function update()
{
	if (underscore == true)
	{
		document.getElementById("console").innerHTML = mainString + inputString + "_";
	}
	if (underscore != true)
	{
		document.getElementById("console").innerHTML = mainString + inputString;
	}
}

function print(value)
{
	mainString += "<br>" + value;
	update();
}

inputString = "";
print("Currently is in a developing state");
print("");
print("There is nothing here yet.");
print("");
print("home\\users\\main\\\> ");

function userPress(e)
{
	if (e.charCode == clamp(e.charCode, 0, 127))
	{
		inputString += String.fromCharCode(e.charCode);
		update();
	}
}

function doSomething()
{
	print("");
	print("There is nothing here yet.");
	print("");
	print("home\\users\\main\\\> ");
}

function userInput(e)
{
	if (e.keyCode == 8)
	{
		inputString = inputString.slice(0, -1);
		update();
	}
	if (e.keyCode == 13)
	{
		mainString = mainString + inputString;
		inputString = "";
		doSomething();
	}
}

let undescoreUpdate = setInterval(function() {
   underscore = !underscore;
   update();
 }, 500);
document.addEventListener("keypress", userPress);
document.addEventListener("keydown", userInput);

