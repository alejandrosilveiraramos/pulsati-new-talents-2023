  // //027 Escreva um código que verifica se uma string é um palíndromo ou não e exibe a mensagem correspondente.
        
      let str = 'subinoonibus'
        
      if(str == str.split('').reverse().join('')){
          document.write('Thats ok')
      }
      else{
          document.write('thats bad')
      }