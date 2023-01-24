-- Faça um select (Query) onde traga a menor data de nascimento onde o email contenha @outlook.com

SELECT MIN(DATE_NASCIMENTO) FROM alejandro_usuario_dois WHERE EMAIL LIKE '%@outlook.com%'