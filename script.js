let screenVal = document.getElementById('screenValue');
let add = false;
let sub = false;
let prod = false;
let divi = false;
let modu = false;

function display(val){
    if (screenVal.textContent == '00'){
        screenVal.textContent = '';
    } 
        screenVal.textContent += val;
}

function clr(){
    num1 = 0;
    num2 = 0;
    screenVal.textContent = '00';
    console.log("works");
}

function enter(){
    if (add == true){
        screenVal.textContent = eval(screenVal.textContent);
        add = false;
    } else if(sub == true){
        screenVal.textContent = eval(screenVal.textContent);
        sub = false;
    } else if(prod == true){
        screenVal.textContent = eval(screenVal.textContent);
        prod = false;
    } else if(divi == true){
        screenVal.textContent = eval(screenVal.textContent);
        divi = false;
    } else if(modu == true){
        
        modu = false;
    } else {
        screenVal.textContent = 'INVALID COMPUTATION';
    }
}

