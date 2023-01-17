        //009 Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

        let firstNumber = prompt('FirstNumber: ')
        let secondNumber = prompt('secondNumber: ')
        
        if(firstNumber == secondNumber){
            secondNumber = null
        }

        let thirdNumber = prompt('thirdNumber: ')

        if(firstNumber == thirdNumber || secondNumber == thirdNumber){
            thirdNumber = null
        }



        if(firstNumber > secondNumber && firstNumber > thirdNumber){
            if(secondNumber > thirdNumber){

                document.write(thirdNumber, ' ', secondNumber, ' ', firstNumber)
            }
            else{
                document.write(secondNumber, ' ', thirdNumber, ' ', firstNumber)
            }    
        }
        else if(secondNumber > firstNumber && secondNumber > thirdNumber){

            if(firstNumber > thirdNumber){

                document.write(thirdNumber, ' ', firstNumber, ' ', secondNumber)
            }
            else{
                document.write( firstNumber, ' ', thirdNumber, ' ', secondNumber)
            }    

        }
        else{
            if(firstNumber > secondNumber){

                document.write( secondNumber, ' ', firstNumber, ' ', thirdNumber)
            }
            else{
                document.write(firstNumber, ' ', secondNumber, ' ',  thirdNumber)
            }    
        }
