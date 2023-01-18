     //41. Escreva um programa que verifique se um número é divisível por outro

     function DivNumber(firstNumber, secondNumber){
        if(firstNumber % secondNumber == 0){
            return document.write('Thats good')
        }else{
            return document.write('Absoluty not good')
        }
    }

    DivNumber(2, 3)
