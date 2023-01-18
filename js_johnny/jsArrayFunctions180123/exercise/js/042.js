      //042 Escreva um programa que encontre o menor número em uma lista

      function lowerNumber(numberList){
        return Math.min.apply(null, numberList)

    }

    const numbersTest = [1, 10, 3, 34, 39, 29, 100, 2]

    console.log(lowerNumber(numbersTest))