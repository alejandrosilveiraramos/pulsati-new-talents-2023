    // //025 Escreva um código que verifica se um número é primo ou não e exibe a mensagem correspondente
    const isPrime = (num) => {
        for (let i = 2; i < num; i++)
            if (num % i === 0) {
            return false;
            }
        return num > 1;
        };  