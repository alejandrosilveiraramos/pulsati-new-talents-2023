//002 Peça três notas ao aluno, converta para numero e calcule a media do mesmo, caso a media for menor que 7 mostrar que foi reprovado, caso a media seja exatamente 7 mostrar que ele passou com a media 7 caso a media seja maior que 7 mostrar que ele passou com media acima de 7.

     let firstGrade = parseFloat(prompt('What is your first grade: '))
     let secondGrade = parseFloat(prompt('What is your second grade: '))
     let thirdGrade = parseFloat(prompt('What is your third grade: '))
        
     let media = (firstGrade + secondGrade + thirdGrade)/ 3

     if (media < 7){
         document.write('Your media ' + media + ' DISAPPROVED')
     }
     else if (media == 7){
         document.write('Your media ' + media + ' APPROVED with the minimum to pass')
     }
     else{
         document.write('Your media ' + media + ' APPROVED with more than the minimum to pass')
     }
