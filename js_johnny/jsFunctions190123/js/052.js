        //052 Escreva um programa que verifique se um número é divisível por outro

        function isItDivisible(fisrtNumber, secondNumber){
            
            if(fisrtNumber % secondNumber == 0 ){
                return document.write(`This numbers are divisible ${fisrtNumber}, ${secondNumber} <br></br>`)
            }else{
                return document.write(`This numbers are NOT divisible ${fisrtNumber} / ${secondNumber} <br></br>`)
             }
        }

        isItDivisible(1, 2)

        isItDivisible(3, 2)

        isItDivisible(24, 2)

        isItDivisible(2500, 8)

        isItDivisible(13, 2312)