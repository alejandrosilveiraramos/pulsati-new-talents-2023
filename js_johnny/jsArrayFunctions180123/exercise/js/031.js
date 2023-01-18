   //031 Utilize um laço "for" para gerar uma tabela de tabuada de um número específico.
   let number = Number(prompt('Number to X Multiple table: '))
    
   for(let mult = 0; mult < 11; mult++){
       let result = number * mult
       document.write(number, ' X ', mult, ' = ', ' ',result, '  | ')
   }