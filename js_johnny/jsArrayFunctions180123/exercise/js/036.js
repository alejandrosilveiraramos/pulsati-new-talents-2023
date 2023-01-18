//036 Escreva um programa que ordene uma lista de números em ordem crescente.

function sortList(a, b){
    return (a - b)
}

const numberList = [2, 4, 8, 65, 1, 87]

numberList.sort(sortList)

console.log(numberList)