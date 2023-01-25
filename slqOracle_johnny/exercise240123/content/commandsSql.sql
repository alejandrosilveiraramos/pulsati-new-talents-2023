
-- CREATING TABLE

CREATE TABLE alejandro_usuario(
    id NUMBER PRIMARY KEY,
    nome VARCHAR(128),
    cpf VARCHAR(15) NOT NULL UNIQUE,
    date_nascimento DATE,
    tipo_sanguineo VARCHAR(3)
    );
    
    COMMIT; -- COMMIT TO COMPLETE
    ROLLBACK; -- BACK OVER THE LAST COMMIT
    
    DROP TABLE alejandro_usuario; -- HOW TO DELETE
    
    -- ALTER THE TYPE NULL TO NOT NULL
    ALTER TABLE alejandro_usuario
    MODIFY date_nascimento DATE NOT NULL;
    
    -- ADD LINE IN TABLE
    ALTER TABLE alejandro_usuario
    ADD sobrenome VARCHAR(128) NOT NULL;
    
    -- REMOVE A COLUMN 
    ALTER TABLE alejandro_usuario
    DROP COLUMN sobrenome;
    
    -- COMMENT IN A LINE
    COMMENT ON COLUMN alejandro_usuario.tipo_sanguineo
    is 'Coluna para saber o tipo sanguineo do paciente';
    
    -- ISERT A USER TO TABLE
    INSERT INTO alejandro_usuario (id, nome, cpf, date_nascimento, tipo_sanguineo)
    VALUES (2, 'Carlos Miranda', '046.825.135-64', TO_DATE('12/04/1945', 'DD/MM/YYYY'), 'A+');
    
    -- SELECT FROM SYSTEM and HOW TO SET A DATE
    select TO_CHAR(sysdate, 'DD/MM/YYYY HH24:MI:SS') FROM dual;
    select TO_DATE('03/12/2000', ('MM/DD/YYYY')) FROM dual;
    
    SELECT * FROM ALEJANDRO_USUARIO;
    
    SELECT nome FROM ALEJANDRO_USUARIO;
    
    SELECT DISTINCT * FROM ALEJANDRO_USUARIO;
    
    SELECT *
    FROM ALEJANDRO_USUARIO
    WHERE DATE_NASCIMENTO BETWEEN TO_DATE('01/01/1980', 'DD/MM/YYYY') AND TO_DATE('01/01/2001');
    
    
    SELECT * FROM ALEJANDRO_USUARIO WHERE TIPO_SANGUINEO = 'A+'
    
    SELECT * 
    FROM ALEJANDRO_USUARIO
    WHERE DATE_NASCIMENTO
        IN( SELECT *
        FROM ALEJANDRO_USUARIO
        WHERE DATE_NASCIMENTO BETWEEN TO_DATE('01/01/1980', 'DD/MM/YYYY') AND TO_DATE('01/01/2001');
            
    SELECT * 
    FROM ALEJANDRO_USUARIO
    WHERE NOME      LIKE '%s' -- IN FRONT OUR BACK 
    AND id = 1
    OR TIPO_SANGUINEO = 'A+'
    
    delete from alejandro_usuario where id = 2;
    