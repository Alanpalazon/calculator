let currentNum;
let totalNum;
let storedNums;
let calcs = [];
const display1 = document.getElementById('display-child-1');
const display2 = document.getElementById('display-child-2');
display2.textContent = "0";

//all maths functions need to round long decimal number: find out how to do this. 
function modulus(a,b){ return a%b;} 
function add(a,b){ return a+b;}
function subtract(a,b){ return a-b;}
function multiply(a,b){ return a*b;} 
function divide(a,b){ 
    if(b == 0) { setTimeout(function(){ display2.textContent = "nice try";}, 3000); display2.textContent = "0"}
    else{ return a/b;}
}


function numberClick(e){
    if(display2.textContent != calcs[calcs.length-2]){
        if(display2.textContent.length == 1 && display2.textContent == "0"){display2.textContent = e.target.textContent; return;}
        else{display2.textContent += e.target.textContent; return;}
    } 

    else{//append ".", replace length-2 with 0 then slice to return last 2 chjaracter SORT!!!!!
        if(e.target.id == "decimal-txt"){ display2.textContent = "0."; return;}
        else{display2.textContent = e.target.textContent; return;}
    }

}

function decimalClick(e){
    if(!display2.textContent.includes(".")){
        if(display2.textContent.length == 0){display2.textContent = "0."}
        else{display2.textContent += e.target.textContent}
    }
}

function clear(){display2.textContent = "0"; storedNum = 0; calcs = [];}

function backspace(){
    if(display2.textContent.length == 1){display2.textContent = "0";}
    else{
        display2.textContent = display2.textContent.slice(0, display2.textContent.length-1);
    }
}
function plusMinus(e){
    if(display2.textContent != "0"){
        if(display2.textContent.includes("-")){display2.textContent = display2.textContent.slice(1, display2.textContent.length);}
        else{let display2Text = display2.textContent; display2.textContent = "-" + display2Text; }
    }
}

function parseNum(){
    if(display2.textContent.includes(".")){storedNum = parseFloat(display2.textContent); return storedNum;}
    else{ storedNum = parseInt(display2.textContent); return storedNum;}
}


function operatorClick(e){ 
//first operator click
    if(calcs.length < 2){ //first numbeer 
        calcs.push(parseNum()); //first num saved 
        calcs.push(e.target.textContent); //first num stored in array
        storedNum = 0;//set to 0 ready for next number 
        display2.textContent = "0";//display to show 0 
        console.log(calcs) // show first num  
    }
//second and onward clicks   
    // else if(calcs.length >= 5 && display2.textContent == calcs[calcs.length-2]){
    //     calcs.pop();
    //     calcs.push(e.target.textContent);
    //     console.log(calcs);
    // }

    else if(calcs.length >= 2){
            if(calcs[calcs.length-1] == "x"){ 
                calcs.push(parseNum()); 
                calcs.push(multiply(calcs[calcs.length-3], calcs[calcs.length-1]));
           
            }
            if(calcs[calcs.length-1] == "/"){ 
                calcs.push(parseNum());  
                calcs.push(divide(calcs[calcs.length-3],calcs[calcs.length-1]));
              
            }
            if(calcs[calcs.length-1] == "%"){  
                calcs.push(parseNum()); 
                calcs.push(modulus(calcs[calcs.length-3], calcs[calcs.length-1]));
            
            }
            if(calcs[calcs.length-1] == "+"){ 
                calcs.push(parseNum());  
                calcs.push(add(calcs[calcs.length-3], calcs[calcs.length-1]));
                
            }
            if(calcs[calcs.length-1] == "-"){ 
                calcs.push(parseNum());  
                calcs.push(subtract(calcs[calcs.length-3], calcs[calcs.length-1]));
                
            }
            calcs.push(e.target.textContent); 
            display2.textContent = calcs[calcs.length-2]; 
            console.log(calcs)
            return;
    }
       
}


function equals(){
  
    if(calcs.length >=2){
        if(calcs[calcs.length-1] == "+"){ 
            calcs.push(parseNum());
            calcs.push(add(calcs[calcs.length-3], calcs[calcs.length-1]));
         }
         if(calcs[calcs.length-1] == "-"){ 
            calcs.push(parseNum());
            calcs.push(minus(calcs[calcs.length-3], calcs[calcs.length-1]));
         }
         if(calcs[calcs.length-1] == "/"){ 
            calcs.push(parseNum());
            calcs.push(divide(calcs[calcs.length-3], calcs[calcs.length-1]));
         }
         if(calcs[calcs.length-1] == "x"){ 
            calcs.push(parseNum());
            calcs.push(multiply(calcs[calcs.length-3], calcs[calcs.length-1]));
         }
         if(calcs[calcs.length-1] == "%"){ 
            calcs.push(parseNum());
            calcs.push(modulus(calcs[calcs.length-3], calcs[calcs.length-1]));
         }

         display2.textContent = String(calcs[calcs.length-1]);
         console.log(calcs);
         return
    
    }
}


document.getElementById("equals-txt").addEventListener('click', equals);
document.querySelectorAll('.operator').forEach(operator => operator.addEventListener('click', operatorClick));
document.getElementById("plus-minus-txt").addEventListener('click', plusMinus);
document.getElementById("backspace-txt").addEventListener('click', backspace);
document.getElementById("decimal-txt").addEventListener('click', decimalClick);
document.getElementById("clear-txt").addEventListener('click', clear);
document.querySelectorAll('.number').forEach(number => number.addEventListener('click', numberClick));
