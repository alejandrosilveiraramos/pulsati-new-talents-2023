       // //021 Escreva um script que verifica se um número é divisível por 3 ou não e exibe a mensagem correspondente.
        
       let firstNumber = 3
       let secondNumber = 12
       let thirdNumber = 10
        
       let firstText =''
       let secondText =''


       if(secondNumber % firstNumber == 0){
           firstText = `${secondNumber}, Is divisible for, ${firstNumber}. \n`
       }else{
           firstText = 'not working'
       }

       if(firstNumber % thirdNumber == 0){
           secondText = `\n ${firstNumber} Is divisible for, ${thirdNumber}`
       }else{
           secondText = `${firstNumber} Is not divisible for, ${thirdNumber}`
       }
       document.write(firstText, secondText)