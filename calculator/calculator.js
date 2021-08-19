var calculator = document.getElementById("calculator")
var div = document.createElement("div")
var calculate = document.createElement("button")

calculate.textContent = "calculate"
calculate.setAttribute("id", "calculate")

div.appendChild(calculate)
calculator.appendChild(div)



var div2 = document.createElement("div")
var results = document.createElement("h1")

results.textContent = "="
results.setAttribute("id", "results")

div.appendChild(results)
calculator.appendChild(div)

document.getElementById("calculate").addEventListener("click", calc);
function calc (){
    var a = parseInt(document.getElementById("value1").value);
    var b = parseInt(document.getElementById("value2").value);
    var sign = document.getElementById("sign").value;
    var calculation;

    if(sign == "add"){
        calculation = a + b;
    }   else if (sign == "minus"){
        calculation = a - b;
    }    else if (sign == "divide"){
        calculation = a / b;
    }    else if (sign == "multiply"){
        calculation = a * b;
    }
    results.textContent = calculation;
}

