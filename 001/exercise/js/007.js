        //007 Peça para informar 3 notas do alunos e sua quantidade de faltas para o aluno aprovar é necessario que ele tenha media acima de 7 e faltas menor que 50

     let firstGrade = parseFloat(prompt('First Grade: '))
     let secondGrade = parseFloat(prompt('Second Grade: '))
     let thirdGrade = parseFloat(prompt('Third Grade: '))
        
     let media = (firstGrade + secondGrade + thirdGrade)/ 3

     let presence = 50

     if (media < 7){
         document.write('Your media ' + media + ' DISAPPROVED')
     }
     else if (media == 7 || media > 7){
         if (presence < 50){
             document.write('Your media ' + media + 'and your presence '+ presence + 'DISAPPROVED')
         }
         else{
             document.write('Your media ' + media + ' APPROVED with the minimum to pass')
         }
     }