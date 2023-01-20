        //60. Escreva um programa que calcule o valor absoluto de um número.
        
        let firstNumber = (Math.random() * 5) - 100

           // function absolut number:
           //   numberResult = Math.abs(number)
        function absolut(number){
            if(number < 0){
                number = number * -1
            }
            numberResult = Math.floor(number)



            return numberResult
        }

        document.write(absolut(firstNumber), '<br></br>' ,  ' First number: ', firstNumber)