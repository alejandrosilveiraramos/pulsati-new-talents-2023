        //048 Escreva um programa que calcule a formula de baskara de números definidos pelo usuário
        
        let valueA = prompt("Put the correct value A:");
        let valueB = prompt("Put the correct value B:");
        let valueC = prompt("Put the correct value C:");
        
        function baskh(valueA, valueB, valueC){
            
            let coefficient1;
            let coefficient2;

            let delta = (valueB * valueB) - 4 * valueA * valueC;

            document.write("Value of Delta => " + delta + "<br/><br/>");

            if(delta < 0){
            document.write("To Delta negative, dont existe a real squart root  <br/>");  
            } else{
            
            document.write("To Delta positive, different square root: <br/>");  
            
            coefficient1 = (-valueB + Math.sqrt(delta)) / (2 * valueA);
            coefficient2 = (-valueB - Math.sqrt(delta)) / (2 * valueA);
            
            document.write("x' = " + coefficient1 + "<br/>");
            document.write("x'' = " + coefficient2 + "<br/>");
            }
        }

        console.log(baskh(valueA, valueB, valueC))