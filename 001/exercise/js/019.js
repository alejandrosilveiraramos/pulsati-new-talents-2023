  // //019 Escreva um script que verifica se um número é negativo, positivo ou igual a zero e exibe a mensagem correspondente.

 let userNumber = parseFloat(prompt('Type a number to check if it is Positive, Negative or equal a zero. \n Number: '))
        
 let textToUser = ''

 if(userNumber == 0){
     textToUser = ' is equal to zero'
 }
 else if(userNumber > 0){
         textToUser = ' is positive'
 }
 else{
     textToUser = ' is negative'
 }
        
 document.write(userNumber, textToUser)