   //018 Escreva um script que verifica se uma string é vazia ou não e exibe a mensagem correspondente. 

     let userText = prompt('String: ').toUpperCase()
        
     let message = 'CARLOS'

     if(userText === ''){
         document.write('User text is empty')
     }
     else if(message != userText){
         document.write('User text is diffent from CARLOS')
     }
     else{
         document.write('Now is everything good')
     }