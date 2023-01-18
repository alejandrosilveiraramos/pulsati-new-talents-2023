   //034 Utilize um laço "for" para percorrer uma string e trocar todas as letras "a" por "x" e imprimir a string modificada.
        
   let world = 'abacate'
   let strWorld = world.toString().length

   for(let i = 0; i != strWorld; i++){
       console.log(world.replace('a', 'x'))
       world = world.replace('a', 'x')
   }
   