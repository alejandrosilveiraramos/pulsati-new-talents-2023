
        //015 Faça um script para que o usuário informe 3 numeros e o programa mostre os pares de numeros.

    let firstNumber = prompt('FirstNumber: ')
    let secondNumber = prompt('secondNumber: ')   
    let thirdNumber = prompt('thirdNumber: ')  
    document.write(firstNumber, '\n', secondNumber, '\n', thirdNumber, '-> ')
    if(firstNumber == secondNumber){
        document.write(firstNumber, '\n', secondNumber)
    }
    else if(firstNumber == thirdNumber){
        document.write(firstNumber, '\n', thirdNumber)
    }
    else if(secondNumber == thirdNumber){
        document.write(secondNumber, '\n', thirdNumber)
    }