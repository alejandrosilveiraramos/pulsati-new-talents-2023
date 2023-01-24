-- Faça um select (Query) que traga somente as pessoas nascidas antes dos anos 1999

SELECT * FROM ALEJANDRO_USUARIO 
WHERE DATE_NASCIMENTO BETWEEN 
< TO_DATE('31/12/1999')