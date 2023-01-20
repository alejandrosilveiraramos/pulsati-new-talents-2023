
        //067 Escreva um programa que calcule a média geométrica de uma lista de números.

        let numberList = [2, 2, 2, 2, 2]

        function geometricPath(listNumber){

            sum = 1

            for(const element of listNumber){
                
                sum = element * sum

                console.log(sum)
            }


            result = sum/ listNumber.length

            return result
        }

        console.log(geometricPath(numberList))