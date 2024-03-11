let num1 = '';
let num2 = '';
function add(num1, num2) {
    return +num1 + +num2
}


function subtract(num1, num2) {
    return num1 - num2
}


function multiply(num1, num2) {
    return num1 * num2
}


function divide(num1, num2) {
    return num1 / num2
}


function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2)
        default:
            return "Invalid";
    }
}
const numBtn = document.querySelectorAll(".numBtn")
let display = document.getElementById('display')
let display2 = document.getElementById('display2')
let operatorBtn = document.querySelectorAll(".operatorBtn")
let operator = '';

function numBtnClick(event) {
    addBtn.style.backgroundColor = ''
    subtractBtn.style.backgroundColor = ''
    multiplyBtn.style.backgroundColor = ''
    divideBtn.style.backgroundColor = ''
    // display2.textContent = '';
    let inputValue = event.target.value;
    display.textContent += inputValue;
    display2.textContent = inputValue;
}

numBtn.forEach(element => {
    element.addEventListener('click', numBtnClick);
});
addBtn.addEventListener('click', () => {
    operator = '+';
    // display2.textContent = '';
    display.textContent += operator;
    addBtn.style.backgroundColor = "pink"
});
subtractBtn.addEventListener('click', () => {
    operator = '-';
    display.textContent += operator;
    display2.textContent = '';
    subtractBtn.style.backgroundColor = "pink"
});
multiplyBtn.addEventListener('click', () => {
    operator = '*';
    display.textContent += operator;
    display2.textContent = '';
    multiplyBtn.style.backgroundColor = "pink"
});
divideBtn.addEventListener('click', () => {
    operator = '/';
    display.textContent += operator;
    display2.textContent = '';
    divideBtn.style.backgroundColor = "pink"
});
 
const equalsBtn = document.getElementById('equalsBtn');
equalsBtn.addEventListener('click', () => {
    display2.textContent = '';
    // const optIndex = display.textContent.indexOf(operator);
    // num1 = display.textContent.slice(0,optIndex)
    // num2 = display.textContent.slice(optIndex + 1)

    
    const displayArray = display.textContent.split(/([+\-*/])/)

    console.log(displayArray)
    let resultArray = parseFloat(displayArray[0])

    for (let i =1; i < displayArray.length; i +=2) {
        const operator = displayArray[i]
        const operand = parseFloat(displayArray[i + 1])
        resultArray = operate(operator,resultArray,operand)
    }


    // console.log(resultArray)

    
    


    // const isOperatorIncluded = displayArray.includes(operator);
    // console.log(isOperatorIncluded)
    const result = operate(operator, num1, num2);
    display.textContent = resultArray;
    display2.textContent = resultArray;
    // alert(typeof(display2.textContent));
})