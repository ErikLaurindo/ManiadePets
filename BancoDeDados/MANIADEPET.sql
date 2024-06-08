USE MASTER IF EXISTS(SELECT * FROM SYS.databases WHERE NAME = 'MANIADEPET')
DROP DATABASE MANIADEPET
GO

CREATE DATABASE MANIADEPET
GO

USE MANIADEPET
GO


CREATE TABLE Users (
    User_Id INT PRIMARY KEY IDENTITY(1,1),
    User_Name VARCHAR(65),
    User_Senha VARCHAR (15),
    User_Email VARCHAR (70),
    User_Nasc DATE,
    User_Genero VARCHAR(50)
);

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




INSERT INTO USERS VALUES ('JACK','123','J@GMAIL.COM','31-08-1979','MASCULINO')

SELECT 
* FROM USERS