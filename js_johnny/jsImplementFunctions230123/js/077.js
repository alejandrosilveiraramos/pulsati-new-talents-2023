//077 Escreva um programa que encontre a soma dos valores de cada coluna de uma matriz.

const matriz = [
    [12,-8,15,6],
    [1,6,20,-9],
    [0,-4,0,-8],
    [-1,6,0,15]
];

sum = 0
for(const element of matriz){
    console.log(element)

    for(const [index, secondElement] of element.entries()){

        if(index < 1){
        console.log(secondElement)
        sum = sum + secondElement

        console.log('sum',sum)
        }
    }
}

console.log(sum)