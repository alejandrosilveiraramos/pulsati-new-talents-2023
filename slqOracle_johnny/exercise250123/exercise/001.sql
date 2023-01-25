--Crie uma tabela chamada NOME_DE_VOCES_funcionarios
 -- A tabela deverá conter os seguintes campos
 -- id, primeiro_nome, segundo_nome, data_nascimento, cpf, rg, endereço, CEP, cidade, telefone, funcao, salario Insira uns 30 registros para base de dados.
 
 --  1 Crie um select que traga todas as pessoas que começem com a letra A ou contenha no meio a letra J ou termine com I|
SELECT *
FROM ALEJANDRO_FUNCIONARIOS 
WHERE PRIMEIRO_NOME LIKE 'A%'
OR
PRIMEIRO_NOME LIKE '%j%'
OR
PRIMEIRO_NOME LIKE '%J%';
 
 -- 2 Crie um select que traga todas as pessoas que nasceram antes de 1999

SELECT *
FROM alejandro_funcionarios
WHERE date_nascimento BETWEEN TO_DATE('31/12/1000', 'DD/MM/YYYY')
AND TO_DATE('31/12/1999', 'DD/MM/YYYY');

 
 -- 3 Crie um select em que o rg da pessoa seja diferente de 123.456.789-01

SELECT * 
FROM alejandro_funcionarios
WHERE rg != '34.567.890-2'
 
 -- 4 Crie um select que traga quais cidades existem na base de dados porém sem repetir

SELECT MIN(id) AS id, cidade
FROM alejandro_funcionarios
GROUP BY cidade
 
 -- 5 Crie um select que traga quais pessoas existem na base de dados porém sem repetir
SELECT MIN(id) as id, primeiro_nome -- Here Im assuming just the fisrt name
FROM alejandro_funcionarios 
GROUP BY primeiro_nome
 
 -- 6 Crie um select onde você traga o nome e o sobrenome concatenados em uma coluna de todas as pessoas com mais de 20 anos ou que o telefone termina com 9

SELECT primeiro_nome + ' ' + segundo_nome as nome_completo, TRUNC(sysdate - date_nascimento)/365 as idade -- here is appointing use || to sum is incorrect, but in you oracle server its that way this running.
FROM alejandro_funcionarios 
WHERE TRUNC(sysdate - date_nascimento)/365 > 20
OR telefone LIKE '%9'
ORDER BY nome_completo;
 
 -- 7 Crie um select onde você traga todas as pessoas ordenadas pela função de trabalho

SELECT FUNCAO, AVG(SALARIO) as MEDIA_SALARIO 
FROM ALEJANDRO_FUNCIONARIOS
GROUP BY FUNCAO;

 -- 8 DESAFIO TEM COISAS QUE NAO EXPLIQUEI 
 -- Crie um select onde você traga a média salarial agrupada por funcao




 -- 9 traga todos os registros com id entre 10 e 15

 -- 10 selecione apenas os campos de id cpf, rg e traga somente os registros em que o o rg e o cpf nao começem com os digitos do id da linha.
