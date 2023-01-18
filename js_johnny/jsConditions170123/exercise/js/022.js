        // //022  Escreva um script que verifica se uma string contém uma determinada parte de um texto de sua escolha  e exibe a mensagem correspondente.

     const myText = 'Show your really power, Im waiting for you man.'

     const firstWord = 'really'
     const secondWord = 'cacoa'
     const thirdWord = 'man'
        
     let firstConfirmation = ''
     let secondConfirmation = ''
     let thirdConfirmation = ''

     if(firstWord.includes('Show your really power, Im waiting for you man.')){
         firstConfirmation = `${firstWord} it is on our text`
     }
     if(secondWord.indexOf('man') != -1){
         secondConfirmation = `${secondWord} it is not on our text`
     }else{
         secondConfirmation = `${secondWord} it is not on our text`
     }
     if(thirdWord.indexOf('cacoa') != -1){
         thirdConfirmation = `${firstWord} it is on our text`
     }
        
        // document.write(firstConfirmation, '\n', secondConfirmation, '\n',  thirdConfirmation)