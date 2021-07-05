const display1 = document.getElementById('display-child-1');
const display2 = document.getElementById('display-child-2');
//current number being calcualted. append to text content when numbers clicked 
let calculations = []; //either use loop to convert all items to num or convert when operator button clicked, before pushing to this array
let currentNum = "0";

display2.textContent = currentNum;


//NUMBER, DECIMAL AND PLUS/MINUS BUTTON FUNCTIONALITY


//only call this function on number buttons, +/= button and decimal point button 
function numberClick(e){
    if(e.target.classList.contains("number")){
        if(currentNum == "0"){ //change 0 to num clicked
            currentNum = e.target.textContent; 
            console.log(currentNum);
            display2.textContent = currentNum; 
            return; } 
        else { //if current num not 0 then concat
            currentNum += e.target.textContent; 
            console.log(currentNum); 
            display2.textContent = currentNum; 
            return; 
        }  
    }

    if(e.target.id == "decimal-txt" && !currentNum.includes(".")){//add decimal point
        currentNum += "."; 
        console.log(currentNum);
        display2.textContent = currentNum; 
        return;
    } 

    if(e.target.id == "plus-minus-txt" && currentNum != "0"){
        if(!currentNum.includes("-")){ //make currentnNum negative 
            let currentNumNeg = "-" + currentNum;
            currentNum = currentNumNeg;
            console.log(currentNum);
            display2.textContent = currentNum; 
            return;} 
        else {//make currentNum positive 
            currentNum = currentNum.slice(1, currentNum.length);
            display2.textContent = currentNum; 
            console.log(currentNum);
            return;
        } 
    }
   
}

document.querySelectorAll('.number').forEach(number => number.addEventListener('click', numberClick));
document.getElementById('decimal-txt').addEventListener('click', numberClick);
document.getElementById('plus-minus-txt').addEventListener('click', numberClick);

//END


//OPERATOR BUTTONS FUNCTIONALITY

function operatorClick(e){
    //for all operators push current num to calculations array
    if(e.target.classList.includes("operator") && currentNum != "0"){

    }

    //for indivdual buttons append respective text contnt to displaychild1 

    if(e.target.id = "modulo-txt"){
        //call modulo function 
    }

    if(e.target.id = "divide-txt"){
        //call divide function 
    }

    if(e.target.id = "multiply-txt"){
        //call multiply function 
    }

    if(e.target.id = "minus-txt"){
        //call minus function 
    }

    if(e.target.id = "add-txt"){
        //call add function 
    }
}


//END

//CLEAR FUNCTIONALITY

document.getElementById('clear-txt').addEventListener('click', function(){
    calculations = [];
    currentNum = 0;
    console.log(currentNum);
    display2.textContent = currentNum;
});

//END

//BACKSPACE FUNCTIONALITY

document.getElementById('backspace-txt').addEventListener('click', function(){
    if(currentNum.length > 1){

        if(currentNum.length == 2 && currentNum[0] == "-"){
            currentNum = "0";
            console.log(currentNum);
            display2.textContent = currentNum;
        }

        else{
            currentNum = currentNum.slice(0,currentNum.length-1);
            console.log(currentNum);
            display2.textContent = currentNum;
        }
    }
    
    else if(currentNum.length == 1){
            currentNum = "0";
            console.log(currentNum);
            display2.textContent = currentNum;
    }

});

//END





