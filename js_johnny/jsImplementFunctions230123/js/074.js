 
    //074  Escreva um programa que encontre a soma dos valores de uma matriz diagonal principal.
    const matriz = [
        [12,-8,15,6],
        [1,6,20,-9],
        [0,-4,0,-8],
        [-1,6,0,15]
        ];
    
        function calculo(matriz) {
        const count = matriz.length;
        let result = 0;
        for(let i = 0; i < count; i++) {
            result += matriz[i][i];
        }
        return result;
        }
    
        console.log(calculo(matriz));