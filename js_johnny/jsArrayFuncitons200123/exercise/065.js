        //065 Escreva um programa que calcule a soma dos números de uma lista dentro de um determinado intervalo. (de uma posicao escolhida ate a outra)


        function randomNumberList(){

            const randomList = []
            
            for(element = 0; element < 10; element++){

                generatedNumber = Math.floor(Math.random() *(100 - (-100)) + (-100))

                randomList.push(generatedNumber)

            }

            console.log(`Random list: \n ${randomList} \n\n`)
            return randomList
        }

        numberList = randomNumberList()
        

        function numberRange(firstPosition, secondPosition){
            
            sumList = 0

            for(element = firstPosition; element < secondPosition; element++){
                console.log(element, ' | ', numberList[element] )

                sumList = sumList + numberList[element]

            }
            
            return sumList
            
        }

       console.log  (numberRange(1, 4))
