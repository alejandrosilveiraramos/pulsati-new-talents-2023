function calc(firstNumber, secondNumber){

    sum = firstNumber + secondNumber
    sub = firstNumber - secondNumber
    div = firstNumber / secondNumber
    mult = firstNumber * secondNumber

    return document.write('sum', sum, '<br></br>', 'sub', sub, '<br></br>', 'div', div, '<br></br>', 'mult', mult, '<br></br>')
}

calc(2, 10)