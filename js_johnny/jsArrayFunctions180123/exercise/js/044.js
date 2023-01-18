      //044 Escreva um programa que some o resto da divisão de dois números inteiros

      function sumRest(firstNumber, secondNumber){
        let restNumber = firstNumber % secondNumber
        let resultNumber = firstNumber + secondNumber + restNumber

        console.log('restNumber ', restNumber)
        return resultNumber
    }

    console.log(sumRest(2, 234))