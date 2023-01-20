 //066 Escreva um programa que verifique se um número é uma potência de outro número

        function numberPowNumber(fisrtNumber, secondNumber){
            let resultLog = Math.log(fisrtNumber)/ Math.log(secondNumber)

            resultPow = Math.pow(secondNumber, resultLog)

            if(resultPow === fisrtNumber){
                return console.log('Ok')
            }
            else{
                return console.log('Bad news my friend')
            }

        }

        numberPowNumber(4096, 2)