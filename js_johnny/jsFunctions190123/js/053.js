        //053 Escreva um programa onde você pessa N numeros e depois mostre qual o menor numero que estiver entre a posição 5 e 10


        function positionNumber(numberList){
            

            lowestNumber = Math.min(...numberList)
            

            return lowestNumber

        }

        const numberList = [1, 2, 8, 23, 654, 4, 66, 324, 3, 7, 32, 123, 20]

        console.log(positionNumber(numberList.slice(5, 10)))
