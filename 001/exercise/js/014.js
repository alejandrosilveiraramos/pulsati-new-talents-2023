   //014 Faça um script para calcular quanto será gasto em uma viagem, onde o usuario informa a distancia em KM e o consumo do carro em KM/L e o programa calcula o valor da viagem.
        
 let userKm = parseFloat(prompt('How many km you gonna road: '))

 let gasSpend = parseFloat(prompt('How much you car spend per Km: '))

 let totalSpend = userKm / gasSpend

 document.write('Your L spend: ', totalSpend)
        