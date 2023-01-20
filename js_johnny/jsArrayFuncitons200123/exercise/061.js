  //61. Escreva um programa que encontre o número mais próximo de um dado número em uma lista.
        
            // Function to generated random number and insert in a list to use next
            function randomNumberList(){

                const randomList = []
                
                for(element = 0; element < 10; element++){
    
                    generatedNumber = Math.floor(Math.random() *(100 - (-100)) + (-100))
    
                    randomList.push(generatedNumber)
    
                }
    
                console.log(`Random list: \n ${randomList} \n\n`)
                return randomList
    
                }
            
    
            function positiveNumberList(number, randomList){
    
                const sequentialListNumber = []
    
                for(const element of randomList){
                    subNumber = element - number
    
                    console.log(`Desorderly number from list: ${element} Subtract by: ${number}: \n ${subNumber} \n \n`)
    
                    sequentialListNumber.push(subNumber)
                }
    
                
                let newElement = 0
    
                for(const [index, element] of sequentialListNumber.entries()){
                   
                    if(element < 0){
    
                        newElement = element * -1
    
                        sequentialListNumber.splice(index, 1, newElement);
                    }
    
                }
    
                console.log(`Positive list: ${sequentialListNumber} \nChosen number: ${number} \n\n`)
                return sequentialListNumber
    
            }
    
            let number = Number(prompt('Type a number: '))
            
            function lowestNumber(listNumber){
    
                function compareNumbers(a, b) {
                    return a - b;
                }
    
    
                listNumber.sort(compareNumbers)
    
                console.log(`Orderly lisit: ${listNumber}`)
    
                numberNearest = listNumber[0]
                
                console.log(numberNearest)
    
                numberNearest = numberNearest + number
                return numberNearest
    
            }
            
            
            
            console.log(`Nearest number ${lowestNumber(positiveNumberList(number, randomNumberList()))}`)
            