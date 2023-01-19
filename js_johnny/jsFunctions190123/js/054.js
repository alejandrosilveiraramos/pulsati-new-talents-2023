        //055  Escreva um programa que calcule a raiz quadrada de um número

        function squareRoot(number){

            let determ = 0

            for(element = 1; determ != 1; element++ ){
                elementResult = element * element

                if(elementResult === number){
                    determ = 1
                    return element
                }
            }
        }

        console.log(squareRoot(64))

        console.log(Math.sqrt(64))
        