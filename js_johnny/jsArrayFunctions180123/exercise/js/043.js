        //043 Escreva um programa que calcule a soma dos números impares de uma lista

        function oddNumber(listNumber){
            let sum = 0
            for(const element of listNumber){
                if(element % 2 != 0){
                    sum = sum + element
                    console.log(element, ' ', sum)
                }
            }
            return document.write('The sum of odd Numbers: ', sum)
        }

        const oddList = [3, 1, 2, 6, 8, 9]
        oddNumber(oddList)