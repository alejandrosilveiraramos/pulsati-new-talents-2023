        //045 Escreva um programa que verifique quantos números são positivos e quantos são negativos em um array.

        function howMuch(numberList){

            let positiveNumber = 0
            let negativeNumber = 0

            for(const element of numberList){
                if(element % 2 != 0){
                    positiveNumber++
                }
                else{
                    negativeNumber++
                }
            }

            return document.write('Positive numbers: ', positiveNumber, ' Negative numbers ', negativeNumber )
        }

        const numberList = [1, -3, 5, 6, 7, -10]

        howMuch(numberList)
