
        //010 Faça um programa que peça o sexo da pessoa F ou M e a sua altura.E mostre o peso ideal da pessoa.

        // Calculo:  Masculino: (72.7 * altura) - 58
        // Calculo:  Feminino: (62.1 * altura) - 44.7
        
         let gender = prompt('Whats your gender? F/M: ').toUpperCase()

         let  height = prompt('Whats your height in cm: ')

         if(gender == 'M'){
             weightBest = (height * 0.75) - 62.5
         }
         else if(gender == 'F'){
             weightBest = (height * 0.675) - 56
         }

         document.write('You perfct weight is ' + weightBest)