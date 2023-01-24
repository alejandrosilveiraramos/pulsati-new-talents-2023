-- Crie uma tabela chamada NOME_DE_VOCES_funcionarios  A tabela deverá conter os seguintes campos id, primeiro_nome, segundo_nome, data_nascimento, cpf, rg, endereço, CEP, cidade, telefone, funcao, salario Insira uns 30 registros para base de dados  Crie um select que traga todas as pessoas que começem com a letra A ou contenha no meio a letra J ou termine com I|Crie um select que traga todas as pessoas que nasceram antes de 1999Crie um select em que o rg da pessoa seja diferente de 123.456.789-01Crie um select que traga quais cidades existem na base de dados porém sem repetir Crie um select que traga quais pessoas existem na base de dados porém sem repetirCrie um select onde você traga o nome e o sobrenome concatenados em uma coluna de todas as pessoas com mais de 20 anos ou que o telefone termina com 9Crie um select onde você traga todas as pessoas ordenadas pela função de trabalhoDESAFIO TEM COISAS QUE NAO EXPLIQUEI Crie um select onde você traga a média salarial agrupada por funcaotraga todos os registros com id entre 10 e 15selecione apenas os campos de id cpf, rg e traga somente os registros em que o o rg e o cpf nao começem com os digitos do id da linha.


CREATE TABLE ALEJANDRO_FUNCIONARIOS(
    id NUMBER PRIMARY KEY,
    primeiro_nome VARCHAR(1000),
    segundo_nome VARCHAR(1000),
    date_nascimento DATE,
    cpf VARCHAR(15) NOT NULL UNIQUE,
    rg VARCHAR(15) NOT NULL UNIQUE,
    endereco VARCHAR(1000),
    cep VARCHAR(8),
    cidade VARCHAR(1000),
    telefone VARCHAR(1000),
    funcao VARCHAR(1000),
    salario numeric NOT NULL CHECK (SALARIO > 0)
    );