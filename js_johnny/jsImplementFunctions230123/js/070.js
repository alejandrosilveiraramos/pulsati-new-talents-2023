  // 70 Escreva um programa que implemente o algoritmo de busca binária em uma lista ordenada.

  function randomArr(){
    let randomList = []
    
    let tempNumber = 0

    for(element = 0; element < 25; element++){
        tempNumber = Math.floor(Math.random()* 100)

        randomList.push(tempNumber)
    }

    return randomList
}

let randomList = randomArr()

console.log(randomList)

function randomNumber(numberList){
    let randomIndex = Math.floor(Math.random()* 25)

    console.log(randomIndex)

    let numberGame = numberList[randomIndex]

    return numberGame
}

numberGame = randomNumber(randomList)
console.log(numberGame)


function binarySearch(gameNumber, listNumber){

    let ordenedList = sort(listNumber)
    
    console.log('Ordened list 1: ', ordenedList)

    let minNumber = 0

    let MaxNumber = Math.floor(listNumber.length)

    let matchNumber = 0
    
    // let listLeng = Math.floor((randomList.length) /2)
    // console.log(listLeng)

    for(const [key, element] of randomList.entries(randomList)){

        console.log(key)

        if(key === MaxNumber / 2){
            console.log(key, element)

            if(element === numberGame){
                console.log('You win, match number: ', key, element, numberGame)
            }
            else if(element < numberGame){
                MaxNumber = MaxNumber /2
                ordenedList = ordenedList.slice(minNumber, MaxNumber)

            }
        }
    }
}
