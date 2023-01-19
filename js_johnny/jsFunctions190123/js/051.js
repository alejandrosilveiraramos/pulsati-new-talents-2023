        //051 Escreva um programa que calcule a soma dos n numeros porém somente dos numeros que nao forem inteiros     

        function notInteger(listNumber){
            
            let sum = 0

            for(const element of listNumber){
                if(Number.isInteger(element) != true){
                    let mommentNumber = element

                    sum = sum + mommentNumber

                    console.log(`Is not a integer [APPROVED] ${element}`)
                }
                else{
                    console.log(`Is a integer [DISAPPROVED] ${element}`)
                }
            }
            return console.log(sum)
        }
        
        let userContinue = ''

        let numberList = []

        let userNumber = 0

        
        do {
            userNumber = Number(prompt('Type your number: '))

            const sendNumber = numberList.push(userNumber)

            userContinue = prompt('Y/N: ')
        }
        while(userContinue != 'n'){
            console.log(numberList)
        }

        notInteger(numberList)
            