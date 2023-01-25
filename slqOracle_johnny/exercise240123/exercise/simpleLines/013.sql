-- Faça um select (Query) onde traga a idade da pessoa, data de hoje menos a data de nascimento DATEDIFF(day, nascimento, hoje) /365

SELECT nome (sydate - date_nascimento)/365 as idade from alejandro_usuario_dois