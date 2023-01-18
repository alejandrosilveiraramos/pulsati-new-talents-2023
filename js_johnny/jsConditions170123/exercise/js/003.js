//003 Criar uma calculadora, onde o usuario informa 2 números e a operação matemática que ele quer e depois mostrar o resultado na tela.

     let firstNumber = parseFloat(prompt('Choose numbers to before choose a opperation you wanna make it, First number: '))
     let secondNumber = parseFloat(prompt('Second number: '))
        
     let choice = prompt(('What opperation you wanna do now? +, -, *, /'))

     if (choice == '+'){
         document.write(firstNumber+secondNumber)
     }
     else if (choice == '-'){
         document.write(firstNumber-secondNumber)
     }
     else if (choice == '*'){
         document.write(firstNumber*secondNumber)
     }
     else if(choice == '/'){
         document.write(firstNumber/secondNumber)
     }
     else{
         document.write('That opperation doesnt exist')
     }