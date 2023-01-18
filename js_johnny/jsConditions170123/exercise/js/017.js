//016 Faça um script, onde você informa o numero de dias trabalhados no mês, quantas horas trabalha por dia, e quanto ganha por hora, e o programa calcula o salario bruto. Porém se o valor de horas somado passar do valor de 8 horas por dia, o calculo do salario deverá ter um acrecimo de 10% no valor do salario bruto.

 let workDay = parseInt(prompt('How many days did you work in a month: '))

 let workHour = parseInt(prompt('How many hours did you work per day: '))
        
 let gainHour = parseInt(prompt('How much did you gain per hour you worked: '))


 if(workHour <= 8){
     salary =  (workDay * workHour) * gainHour
 }
 else{
     salary = (workDay * workHour) * gainHour
     plusSalary = salary
     plusSalary *= .1
     salary = salary+ plusSalary
 }

 document.write('Your salary this month: ', salary)