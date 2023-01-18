        //004 Faça um programa onde peça para o usuario informar 3 numeros, e depois mostre qual o MAIOR numero entre eles.

        let firstNumber = parseFloat(prompt('First number: '))
        let secondNumber = parseFloat(prompt('Second number: '))
        let thirdNumber = parseFloat(prompt('Third number: '))

        if (firstNumber > secondNumber && firstNumber > thirdNumber){
            document.write(firstNumber + ' Is the bigger number one')
        }
        else if (secondNumber > firstNumber && secondNumber > thirdNumber){
            document.write(secondNumber + ' Is the bigger number one')
        }
        else{
            document.write(thirdNumber + ' Is the bigger number one')
        }