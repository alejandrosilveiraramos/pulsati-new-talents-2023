      // Crie um programa onde o usuario informa uma quantidade indeterminada de notas e você (COM UMA FUNÇÃO) mostra a média das notas
        
      function userGradeList(){
        let userAns = true

        let numberList = []

        while(userAns != false){

            let number = parseInt(prompt('Number: '))

            numberList.push(number)

            userAns = confirm('Do you wanna continue?  ') == true
        }

        return numberList
    }

    function listMedia(numberList){
        let sum = 0
        let result = 0

        for (const element of numberList) {
            sum = sum + element

            
            console.log(element, sum);

            result = sum/numberList.length

            return document.write('Result ', result)

        }

    }

    let gradeList = userGradeList()

    listMedia(gradeList)