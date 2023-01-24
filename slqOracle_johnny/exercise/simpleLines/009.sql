-- Faça um select (Query) onde traga o id e a data de nascimento das pessoas onde o nome termine com O OU o email da pessoa contenha @outlook.com ou a data de nascimento esteja em 10/07/1987 ou 26/07/2022

SELECT ID,DATE_NASCIMENTO FROM alejandro_usuario_dois 
    WHERE NOME LIKE '%O'
        OR EMAIL LIKE '%@outlook.com%' 
            OR  DATA_NASCIMENTO = TO_DATE('10/07/1987')
                OR DATA_NASCIMENTO = TO_DATE('26/07/2022')