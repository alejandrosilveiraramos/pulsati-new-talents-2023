-- Faça um select (Query) onde traga qual a maior data de nascimento onde o email contenha @hotmail.com

SELECT MAX(DATE_NASCIMENTO) FROM alejandro_usuario_dois
WHERE EMAIL LIKE '%@hotmail.com%';