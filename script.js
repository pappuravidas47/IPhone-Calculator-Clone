let display = document.getElementById("display");
let currentInput = "";

function appendNumber(num){
    if(display.innerText === "0"){
        currentInput = num;
    } else{
        currentInput += num;
    }
    display.innerText = currentInput;
}

function appendOperator(op){
    currentInput += op;
    display.innerText = currentInput;
}

function appendDecimal(){
    if(!currentInput.includes(".")){
        currentInput += ".";
        display.innerText = currentInput;
    }
}

function clearDisplay(){
    currentInput = "";
    display.innerText = "0";
}

function plusMinus(){
    if(currentInput){
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.innerText = currentInput;
    }
}

function percent(){
    if(currentInput){
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.innerText = currentInput;
    }
}

function calculate(){
    try{
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    }
    catch{
        display.innerText = "Error";
        currentInput = "";
    }
}