        //006 Faça um programa que peça os 3 lados de um triangulo e mostre qual o tipo: Equilátero, isoceles, Escaleno
        //Equilatero: 3 lados iguais
        //Isosceles: 2 lados iguais e 1 diferente
        //Escaleno: 3 lados diferentes
        
        let firstNumber = parseFloat(prompt('First number: '))
        let secondNumber = parseFloat(prompt('Second number: '))
        let thirdNumber = parseFloat(prompt('Third number: '))
        
        if (firstNumber == secondNumber && firstNumber == thirdNumber && secondNumber == thirdNumber){
            document.write('The triangle Is Equilatero')
        }
        else if (firstNumber == secondNumber && firstNumber == thirdNumber && secondNumber != thirdNumber){
            document.write('The triangle Is Isosceles')
        }
        else if(secondNumber == secondNumber && secondNumber != thirdNumber && firstNumber == thirdNumber){
                document.write('The triangle Is Isosceles')
        }
        else if(thirdNumber != secondNumber && thirdNumber== thirdNumber && secondNumber == firstNumber){
            document.write('The triangle Is Isosceles')
        }
        else{
            document.write('The triangle Is Escaleno')
        }