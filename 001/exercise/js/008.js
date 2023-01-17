       //008 Peça para o Cliente escolher entre quatro pedidos sendo eles

        // Pizza = R$12,00
        // Pão de Queijo = R$ 4,00
        // Macarrão R$ 16,00
        // Pastel = R$ 4,50

        // Após a escolha pergunte quanto o cliente estará dando de valor ao caixa.

        // Ao final do programa calcule se o Cliente precisa de troco ou não e informe o valor do troco caso necesário.

     let choice = prompt('Choose one option \n 1- Pizza = R$12,00 \n 2- Pão de Queijo = R$ 4,00 \n 3- Macarrão R$ 16,00 \n 4- Pastel = R$ 4,50: ')

     let pay = parseFloat(prompt('How much do you given? '))
        
     let change = prompt('Do you need change? Y/N').toUpperCase()

     if(change == 'Y'){

         if(choice == 1){
             let changeToGive = pay - 12
             document.write('The change: ' + changeToGive)
         }
         else if (choice == 2){
             let changeToGive = pay - 4
             document.write('The change: ' + changeToGive)
         }
         else if (choice == 3){
             let changeToGive = pay - 16
             document.write('The change: ' + changeToGive)
         }
         else if (choice == 4){
             let changeToGive = pay - 4.5
             document.write('The change: ' + changeToGive)
         }
         else{
             document.write('That product doesnt exist')
         }

     }
        