        //037 Escreva um programa que verifique se todos os números são ou pares ou impares de um array.
        
        const numberList = [2, 4, 8, 65, 1, 87]
        const evenList =[]
        const oddList =[]

        for(const element of numberList){
            if(element % 2 == 0){
                evenList.push(element)
            }
            else{
                oddList.push(element)
            }
        }
        
        for(const element of evenList){
            console.log('Even number ', element)
        }
        console.log('Even List ', evenList)

        for(const element of oddList){
            console.log('Odd number ', element)
        }
        console.log('Odd List ', oddList)
        