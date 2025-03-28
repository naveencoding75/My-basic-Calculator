
const a = [];

let addHtml1 = '';
let addHtml2 = '';
let addHtml3 = '';
let addHtml4 = '';

function show(){
addHtml1 = '';
addHtml2 = '';
addHtml3 = '';
addHtml4 = '';

let isOperatorFound1 = false;
let isOperatorFound2 = false;

for(let i=0; i<a.length; i++){

    if (['+', '-', '*', '/'].includes(a[i]) && isOperatorFound1){
        continue;
    }
    
    if (['+', '-', '*', '/'].includes(a[i]) && isOperatorFound2){
        break;
    }

    if (['+', '-', '*', '/'].includes(a[i])) {
        isOperatorFound1 = true;
        addHtml2 += `${a[i]}`;
    } else if (!isOperatorFound1) {
        addHtml1 += `${a[i]}`;
    } else if(['='].includes(a[i])){
        isOperatorFound2 = true;
        addHtml4 += `${a[i]}`;
    } else {
        addHtml3 += `${a[i]}`;
    }
}

document.querySelector('.result').innerHTML = `${addHtml1} ${addHtml2} ${addHtml3} ${addHtml4} `;
}



function numAssign(numValue){
a.push(numValue);
show();
}

function calculate(){
let ans = '';

const a = parseFloat(addHtml1); 
const b = parseFloat(addHtml3);

if(addHtml2 === '+')
    ans = a+b;
else if(addHtml2 === '-')
    ans = a-b;
else if(addHtml2 === '*')
    ans = a*b;
else{
    ans = a/b;
}
document.querySelector('.result2').innerHTML = ` ${ans}`;
}

function clearit(){
a.length = 0;

addHtml1 = '';
addHtml2 = '';
addHtml3 = '';
addHtml4 = '';

// document.querySelector('.display').innerHTML = '';
document.querySelector('.result').innerHTML = '';
document.querySelector('.result2').innerHTML = '';

show();
}

document.addEventListener('keydown', (event) => {
const key = event.key;

if ('0123456789'.includes(key)) {
    numAssign(key);
}
else if (['+', '-', '*', '/', '.'].includes(key)) {
    numAssign(key);
}
else if (key === '=' || event.keyCode === 13) {
    calculate();
}
else if (key === 'c' || key === 'C') {
    clearit();
}
});