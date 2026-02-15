const count = document.getElementById("counter");
let current = 0;

function tickUp() {
    current++;
    count.innerHTML = current;
}

function tickDown() {
    current--;
    count.innerHTML = current;
}

function runForLoop(){
	const result = document.getElementById("forLoopResult");
	result.innerHTML = "";
	
	for(let i=0; i <= current; i++)
		result.innerHTML += i + " ";
}

function showOddNumbers(){
	const odd = document.getElementById("oddNumberResult");
	odd.innerHTML = "";
	
	for(let i=0; i <= current; i++)
	{
		if(i%2 != 0)
			odd.innerHTML += i + " ";
	}
}

function addMultiplesToArray(){
	const arr = [];
	/*arr[0] = 67;
	console.log(arr);*/
	
	for(let i=0; current >= 5; current--)
	{
		if(current%5 == 0){
			arr[i] = current;
			i++;
		}
	}
	console.log(arr);
}

/*
function printCarObject(){
	let newCar={
		color: "red",
		make: "ford",
		model: "mustang",
		year: 2025
	}
	
	console.log("Car color: " + newCar.color);
}
*/

function printCarObject()
{
	let car={
		cType: document.getElementById("carType").value,
		cMPG: document.getElementById("carMPG").value,
		cColor: document.getElementById("carColor").value,
	};
	
	console.log(car);
}

function loadCar(x) {
    let car;
    if (x == 1) 
        car = carObject1;
    else if (x == 2)
        car = carObject2;
    else
        car = carObject3;

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;

    console.log(car);
}

function changeColor(x){
	
    if (x == 1) 
        styleParagraph.style.color = "red";
    else if (x == 2)
        styleParagraph.style.color = "green";
    else
        styleParagraph.style.color = "blue";
}
