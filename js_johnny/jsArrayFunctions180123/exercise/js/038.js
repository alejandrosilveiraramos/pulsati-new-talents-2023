 //038 Escreva um programa que calcule o fatorial de um número escolhido pelo usuário.

 function Factorial(n) {
    var ans=1;
     
    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

console.log(Factorial(5))