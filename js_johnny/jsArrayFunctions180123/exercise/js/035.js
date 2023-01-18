       //035 Escreva um programa que calcule a média de uma lista de números com quantidade definida pelo usuário
        
       let userAns = 'yes'

       let numberList = []

       while(userAns != 'no'){

           let number = parseInt(prompt('Number: '))

           numberList.push(number)

           userAns = prompt('Do you wanna continue?  ')
       }

       let sum = 0
       let result = 0

       for (const element of numberList) {
           sum = sum + element

           
           console.log(element, sum);

           result = sum/numberList.length

           document.write('Result ', result)
       
       }