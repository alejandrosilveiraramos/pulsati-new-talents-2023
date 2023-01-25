-- Faça um select (Query) que traga todas as pessoas onde nasceram no dia 12/12/2000 OU o nome contenha M em qualquer lugar da palavra

SELECT * FROM ALEJANDRO_USUARIO 
WHERE DATE_NASCIMENTO = TO_DATE('12/12/2000')
OR
NOME LIKE '%M%'
OR
NOME LIKE '%m%';
