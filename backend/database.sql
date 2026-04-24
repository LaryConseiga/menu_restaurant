
CREATE DATABASE IF NOT EXISTS gestion_etudiants;
USE gestion_etudiants;


CREATE TABLE IF NOT EXISTS etudiants (
    id                 INT          AUTO_INCREMENT PRIMARY KEY,
    numero_inscription VARCHAR(20)  NOT NULL UNIQUE,
    nom                VARCHAR(100) NOT NULL,
    prenoms            VARCHAR(150) NOT NULL,
    filiere            VARCHAR(50)  NOT NULL,
    genre              CHAR(1)      NOT NULL CHECK (genre IN ('M', 'F')),
    moyenne            DECIMAL(4,2) NOT NULL CHECK (moyenne >= 0 AND moyenne <= 20),
    decision           VARCHAR(20)  NOT NULL,
    
    created_at         TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS parametres (
    id                 INT          AUTO_INCREMENT PRIMARY KEY,
    cle               VARCHAR(50)  NOT NULL UNIQUE,
    valeur             DOUBLE(10,2) NOT NULL,

    created_at         TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO etudiants (numero_inscription, nom, prenoms, filiere, genre, moyenne, decision) VALUES
('20220466', 'YAMBOGO',             'Brice',                       'IIAA',   'M', 13.50, 'Validé'),
('20230455', 'NIKIEMA',             'Kiswendsida Sirice Aaron',    'IIAA',   'M',  8.00, 'Non validé'),
('20230516', 'BAKO',                'Stève Hakira Ange François',  'IIAA',   'M', 11.25, 'Validé'),
('20230526', 'TIDJANI',             'Mehdi Mastour Djide',         'IIAA',   'M',  6.75, 'Non validé'),
('20250055', 'YODA',                'Maïmouna Yasmine',            'IIAA',   'F', 15.00, 'Validé'),
('20250056', 'PODA',                'Somalo Rodrigue Jordy',       'IIAA',   'M',  9.50, 'Non validé'),
('20250067', 'SEGDA',               'Ramondgwindé Alimata Saadia', 'IIAA',   'F', 17.25, 'Validé'),
('20250118', 'ASSI',                'Chonou Jean-Louis',           'IIAA',   'M',  5.50, 'Non validé'),
('20250198', 'OUEDRAOGO',           'Yassine Rachide Rayengwendé', 'IIAA',   'M', 12.00, 'Validé'),
('20220631', 'NITIEMA',             'Aguiratou',                   'CB 2IE', 'F', 14.75, 'Validé'),
('20220641', 'OUEDRAOGO',           'Martin Hyacinthe',            'CB 2IE', 'M',  7.25, 'Non validé'),
('20230563', 'BIAM',                'Kwami Alfred Jordal',         'CB 2IE', 'M', 19.00, 'Validé'),
('20230564', 'COMBARY',             'Anaïs Banyala Urielle',       'CB 2IE', 'F', 10.50, 'Validé'),
('20230566', 'CONSEIGA',            'Cherifatou Pendgwendé',       'CB 2IE', 'F',  6.00, 'Non validé'),
('20230567', 'DIESSONGO',           'Hounssouley Johanne Hasley',  'CB 2IE', 'F', 16.50, 'Validé'),
('20230568', 'FEUDJEU II MEDONGOU', 'La grace',                    'CB 2IE', 'F', 11.75, 'Validé'),
('20230569', 'ILINGA',              'Solange',                     'CB 2IE', 'F',  8.50, 'Non validé'),
('20230571', 'KONDO',               'Cherifatou Espérance',        'CB 2IE', 'F', 13.00, 'Validé'),
('20230572', 'NDONGO',              'Ivan Fresnel',                'CB 2IE', 'M',  5.25, 'Non validé'),
('20230573', 'NIKIEMA',             'Kiswend-Sida Gaël',           'CB 2IE', 'M', 18.00, 'Validé'),
('20230576', 'RAMANAMISETA',        'Dera Judicaël',               'CB 2IE', 'M',  9.75, 'Non validé'),
('20230577', 'SAWADOGO',            'Pedgwende Jerielle Vinoria',  'CB 2IE', 'F', 14.25, 'Validé'),
('20230579', 'TEMGOUA SOBZE',       'Ilona Leila',                 'CB 2IE', 'F',  7.00, 'Non validé'),
('20230580', 'TRAORE',              'Ardjata Hanaa Estelle',       'CB 2IE', 'F', 20.00, 'Validé'),
('20230581', 'YAMEOGO',             'Sylviane Laure Rolande',      'CB 2IE', 'F', 12.50, 'Validé'),
('20230922', 'RAGHAY',              'Nizar',                       'CB 2IE', 'M',  6.50, 'Non validé');
