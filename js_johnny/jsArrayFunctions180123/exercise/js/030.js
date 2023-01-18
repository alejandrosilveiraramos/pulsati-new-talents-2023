//030 Utilize um laço "for" para criar uma pirâmide de números, onde cada linha tem um número a mais do que a linha anterior.
let number = 0

for (let i = 1; i <= 10; i++) {
number++

console.log(number.toString().repeat(i));
    
}