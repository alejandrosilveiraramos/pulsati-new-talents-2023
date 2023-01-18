 //032 Utilize um laço "for" para contar quantos dígitos tem um número inteiro e armazenar o resultado em uma variável chamada "contagem".
        
 let number = 3333
        
 let strNumber = number.toString().length
 let countingNumber = 0
 for(let counting = 0; counting != strNumber; counting++){
     console.log(counting)
     countingNumber++
 }
 document.write(countingNumber)