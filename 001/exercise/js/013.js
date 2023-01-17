    //013 Faça um script para calcular a Hipotenusa de um triangulo retangulo, onde o usuario informa os catetos e o programa calcula a hipotenusa.

     let fisrtCateto = parseFloat(prompt('Insert your first Cateto: '))
     let secondCateto = parseFloat(prompt('Insert your second Cateto: '))
        
     let hipotenusa = fisrtCateto * fisrtCateto + secondCateto * secondCateto

     solution = Math.sqrt(hipotenusa)

     document.write(solution)
