USE MASTER IF EXISTS(SELECT * FROM SYS.databases WHERE NAME = 'MANIADEPETDB')
DROP DATABASE MANIADEPETDB
GO

CREATE DATABASE MANIADEPETDB
GO

USE MANIADEPETDB
GO


CREATE TABLE Users (
    User_Id INT PRIMARY KEY IDENTITY(1,1),
    User_Name VARCHAR(65),
    User_Senha VARCHAR (15),
    User_Email VARCHAR (70),
    User_Nasc DATE,
    User_Genero VARCHAR(50)
);
SELECT * FROM Users
INSERT INTO Users VALUES ('1','laurindoerik@gmail.com','masculino','Erik','26022003','123456');
delete

CREATE TABLE Info_Pet ( 
Pet_Id INT PRIMARY KEY IDENTITY(1,1),
Inf_Especie	Varchar(50),	
Inf_Raca Varchar(50),
Inf_Cor	Varchar(50),	
Inf Varchar(50),	
Inf_DataNasc Date,	
Inf_peso INT,
User_Id INT,
FOREIGN KEY (User_ID) REFERENCES USERS(User_Id)
);

-- Tabela de agenda de visitas
CREATE TABLE Agen_Vis (
    Agen_Id INT PRIMARY KEY IDENTITY(1,1),
    Agen_Histo VARCHAR(65),
    Agen_Tipo VARCHAR(65),
    Agen_DataAgen DATE,
    Agen_Lembre DATETIME,
	Pet_Id INT,
	FOREIGN KEY (Pet_Id) REFERENCES Info_Pet (Pet_Id)
);

-- Tabela de funcionários
CREATE TABLE Funcionario (
    Fun_Id INT PRIMARY KEY IDENTITY(1,1),
    Fun_Name VARCHAR(65),
    Fun_Nasc DATE,
    Fun_Genero VARCHAR (20),
    Fun_Ende VARCHAR(65),
    Fun_Num INT,
    Fun_Email VARCHAR(50),
	Agen_Id INT ,
	FOREIGN KEY (Agen_Id) REFERENCES Agen_Vis(Agen_Id)
);

-- Tabela de notas e observações
CREATE TABLE Nota_Obs (
    Id_Notas INT PRIMARY KEY IDENTITY(1,1),
    tipoNotas VARCHAR(65),
    DataNota DATE,
    Obs_gerais TEXT,
    Obs_SobreAni TEXT,
    Obs_Instru TEXT,
	Agen_Id INT,
	FOREIGN KEY (Agen_Id) REFERENCES Agen_Vis(Agen_Id)
);

-- Tabela de imagens e documentos
CREATE TABLE Imagem_Doc (
    ImageDocuId INT PRIMARY KEY IDENTITY(1,1),
    AnimalId INT,
    TipoDocument VARCHAR(50),
    NomeArquivo VARCHAR(100),
    CaminhoArquivo VARCHAR(255),
	Agen_Id INT,
	FOREIGN KEY (Agen_Id) REFERENCES Agen_Vis(Agen_Id)
);


INSERT INTO USERS VALUES ('KITTY WAYNE','070415','KITTYWAY@GMAIL.COM','11-08-2006','FEMININO');
INSERT INTO USERS VALUES ('JOAO SOARES', 'SOARES7', 'JOAOSOARES@GMAL.COM', '23-02-2006','MASCULINO'); 
INSERT INTO USERS VALUES ('LUIZ GUSTAVO ALVES', '0705200817','A60K109@GMAIL.COM','07-05-2007','MASCULINO'); 
INSERT INTO USERS VALUES ('LUCAS','12345678','LUCASHENRI@GMAIL.COM','14-06-1979','MASCULINO'); 
INSERT INTO USERS VALUES ('LAIS LOTUS','LA16012008@','00001133102918SP@AL.EDUCACAO.SP.GOV.BR','16-01-2008','FEMININO'); 
INSERT INTO USERS VALUES ('JULIN ENTORTOR','EUTEAMOMAE','DICKJACKSON@GMAIL.COM','06-06-2006','TRANSGENERO'); 
INSERT INTO USERS VALUES ('JACK','31081979','J@GMAIL.COM','31-08-1979','MASCULINO'); 
INSERT INTO USERS VALUES ('GABRIEL','TIMAO25163','GABRIELOMAISGAY@GMAIL.COM','30-03-2005','NAO BINARIO'); 
INSERT INTO USERS VALUES ('FRANK OCEAN','ILOVELIFE','FRANKOCEAN@GMAIL.COM','11-01-2001','TRANSGENERO');
INSERT INTO USERS VALUES ('Maria', 'outra_senha', 'maria@email.com', '1985-08-20', 'Feminino');
INSERT INTO USERS VALUES ('Pedro', 'senha_secreta', 'pedro@email.com', '1995-03-10', 'Masculino');
INSERT INTO USERS VALUES ('Vitinho','matematica123','vitnholopes@gmail.com','22-09-2004','Homem');
<<<<<<< HEAD
=======

---ATUALIZEI O USER, NO CASO O GENERO
UPDATE USERS
SET uSER_gENERO = 'MASCULINO'
WHERE USER_ID = 2 

UPDATE USERS 
SET USER_SENHA = '12345678'
WHERE USER_ID = 4

UPDATE USERS 
SET USER_GENERO = 'MASCULINO'
WHERE USER_ID = 7

--APAGUEI UMA TABELA Q ESTAVA A MAIS E IGUAL
DELETE FROM USERS WHERE USER_ID = 1



INSERT INTO Funcionario VALUES ('KItty Wayne','11-08-2000','Feminino','Barueri-SP','11953610244','KittyWay11@gmail.com',null);
INSERT INTO Funcionario VALUES ('João Lucas','25-05-1972','Masculino','Carapicuiba-SP','11947826699','JoaoLucas@gmail.com',null);
INSERT INTO Funcionario VALUES ('Luan Henrique','02-05-2001','Masculino','Barueri-SP','11971699455','Luancaterin@Iclod.com', null);
INSERT INTO Funcionario VALUES ('Marianne Costa','01-11-1995','Feminino','Alphaville-SP','11941558878', 'marianegatinha@hotmaill.com', null);
INSERT INTO Funcionario VALUES ('Julia Catrina','04-05-1971','Feminino','Jandira-SP','11947458865','Juliastre@gmail.com',null);
INSERT INTO Funcionario VALUES ('Victor Lopes','02-02-1992','Masculino','Barueri-SP','11942455295','lopesgatrup@gmail.com',null);
INSERT INTO Funcionario VALUES ('Laurindo Cruz','11-12-2000','Masculino','Barueri-SP','62945852566','cruzxpso@gmail.com',null);
INSERT INTO Funcionario VALUES ('Rony Cabral','25-09-2000','Masculino','Barueri-SP','11925657848','cabralprodutor@gmail.com',null);
INSERT INTO Funcionario VALUES ('Katherine Mello','04-05-2004','Feminino','Alphaville','11842586699','mellovictin@gmail.com',null);
INSERT INTO Funcionario VALUES ('Carine Viliy','02-07-1978','Feminino','Osasco','11971694166','fofolete@gmail.com',null);

--Funcionario (
 --   Fun_Id INT PRIMARY KEY IDENTITY(1,1),
 --   Fun_Name VARCHAR(65),
  --  Fun_Nasc DATE,
  --  Fun_Genero VARCHAR (20),
  --  Fun_Ende VARCHAR(65),
 --   Fun_Num INT,
 --   Fun_Email 

 select * from funcionario
>>>>>>> 53a16cf0929146415e21e45bb017837cc57e7198

---ATUALIZEI O USER, NO CASO O GENERO
UPDATE USERS
SET uSER_gENERO = 'MASCULINO'
WHERE USER_ID = 2 

<<<<<<< HEAD
UPDATE USERS 
SET USER_SENHA = '12345678'
WHERE USER_ID = 4

UPDATE USERS 
SET USER_GENERO = 'MASCULINO'
WHERE USER_ID = 7

--APAGUEI UMA TABELA Q ESTAVA A MAIS E IGUAL
DELETE FROM USERS WHERE USER_ID = 6

SELECT * FROM USERS

INSERT INTO Funcionario VALUES ('KItty Wayne','11-08-2000','Feminino','Barueri-SP','11953610244','KittyWay11@gmail.com',null);
INSERT INTO Funcionario VALUES ('João Lucas','25-05-1972','Masculino','Carapicuiba-SP','11947826699','JoaoLucas@gmail.com',null);
INSERT INTO Funcionario VALUES ('Luan Henrique','02-05-2001','Masculino','Barueri-SP','11971699455','Luancaterin@Iclod.com', null);
INSERT INTO Funcionario VALUES ('Marianne Costa','01-11-1995','Feminino','Alphaville-SP','11941558878', 'marianegatinha@hotmaill.com', null);
INSERT INTO Funcionario VALUES ('Julia Catrina','04-05-1971','Feminino','Jandira-SP','11947458865','Juliastre@gmail.com',null);
INSERT INTO Funcionario VALUES ('Victor Lopes','02-02-1992','Masculino','Barueri-SP','11942455295','lopesgatrup@gmail.com',null);
INSERT INTO Funcionario VALUES ('Laurindo Cruz','11-12-2000','Masculino','Barueri-SP','62945852566','cruzxpso@gmail.com',null);
INSERT INTO Funcionario VALUES ('Rony Cabral','25-09-2000','Masculino','Barueri-SP','11925657848','cabralprodutor@gmail.com',null);
INSERT INTO Funcionario VALUES ('Katherine Mello','04-05-2004','Feminino','Alphaville','11842586699','mellovictin@gmail.com',null);
INSERT INTO Funcionario VALUES ('Carine Viliy','02-07-1978','Feminino','Osasco','11971694166','fofolete@gmail.com',null);

--Funcionario (
 --   Fun_Id INT PRIMARY KEY IDENTITY(1,1),
 --   Fun_Name VARCHAR(65),
  --  Fun_Nasc DATE,
  --  Fun_Genero VARCHAR (20),
  --  Fun_Ende VARCHAR(65),
 --   Fun_Num INT,
 --   Fun_Email 

 select * from funcionario
=======

>>>>>>> 53a16cf0929146415e21e45bb017837cc57e7198
