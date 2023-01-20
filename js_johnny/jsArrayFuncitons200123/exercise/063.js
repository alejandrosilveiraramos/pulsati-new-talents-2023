        //063 Escreva um programa que encontre o número mais distante de um dado número em uma lista.

        function randomNumberList(){

            const randomList = []
            
            for(element = 0; element < 10; element++){

                generatedNumber = Math.floor(Math.random() *(100 - (-100)) + (-100))

                randomList.push(generatedNumber)

            }

            console.log(`Random list: \n ${randomList} \n\n`)
            return randomList
        }

        
        function farwayNumber(number, numberList){

            let newElement = 0

            for(const [index, element] of numberList.entries()){
               
                if(element < 0){

                    newElement = element * -1

                    numberList.splice(index, 1, newElement);
                }

            }

            resultNumber = 0

            for(const element of numberList){
                 if(element > resultNumber){
                    resultNumber = element
                 }
            }

            return resultNumber

        }

        let number = Number(prompt('Type a number: '))

        console.log(farwayNumber(number, randomNumberList()))
