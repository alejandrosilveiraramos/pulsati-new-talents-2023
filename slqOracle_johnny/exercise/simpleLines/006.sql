-- Faça um select (Query) que traga somente as pessoas nascidas depois dos anos 2000

SELECT * FROM ALEJANDRO_USUARIO
WHERE DATE_NASCIMENTO 
BETWEEN TO_DATE('31/12/1999', 'DD/MM/YYYY') AND TO_DATE('31/12/3000')