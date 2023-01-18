//040 Escreva um programa que verifique se um número é capicua

function capicua(str){ 
    if(str == str.split('').reverse().join('')){
        return document.write('Thats ok')
    }
    else{
        return document.write('thats bad')
    }}

    capicua('88')

