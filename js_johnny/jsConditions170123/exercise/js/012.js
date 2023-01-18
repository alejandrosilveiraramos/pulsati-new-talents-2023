//012 `Faça um programa que peça ao usuario o seu usuario o salario dele.`


    // salários até R$ 280,00: aumento de 20%


     //salários entre R$ 280,00 e R$ 700 00 : aumento de 15%

    //  salários maior que  R$ 700,00 : aumento de 10%

    //  -  salário antes do reajuste;
    //  -  percentual de aumento aplicado;
    //  -  valor do aumento;
    //  -  novo salário, após o aumento.

     let userSalary = parseFloat(prompt('Whats your salary: '))
     let porcentIncrease = null

     let valueIncrease = userSalary
        
     if(userSalary <= 280){
         porcentIncrease = '20%'
         salaryIncrease = userSalary * 0.2
            
     }
     else if(userSalary < 700){
         porcentIncrease = '15%'
         salaryIncrease = userSalary * 0.15
            
     }
     else{
         porcentIncrease = '10%'
         salaryIncrease = userSalary * 0.1
            
     }

     newSalary = salaryIncrease + userSalary

     valueIncrease = valueIncrease - newSalary 

     document.write('User Salary -> ', userSalary, '\n', 'Porcent increase to salary -> ', porcentIncrease, '\n', 'Value increase -> ', valueIncrease, '\n', 'New Salary -> ', newSalary)
        