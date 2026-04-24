CREATE DATABASE IF NOT EXISTS db_clients;
USE db_clients;

CREATE TABLE IF NOT EXISTS clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenoms VARCHAR(150) NOT NULL,
    contact VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS parametres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cle VARCHAR(50) NOT NULL UNIQUE,
    valeur DOUBLE(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO clients (nom, prenoms, contact, email) VALUES
('YAMBOGO', 'Brice', '07070707', 'brice.yambogo@gmail.com'),
('NIKIEMA', 'Aaron', '08080808', 'aaron.nikiema@gmail.com'),
('BAKO', 'François', '09090909', 'francois.bako@gmail.com'),
('TIDJANI', 'Mehdi', '10101010', 'mehdi.tidjani@gmail.com'),
('YODA', 'Yasmine', '11111111', 'yasmine.yoda@gmail.com'),
('PODA', 'Rodrigue', '06060606', 'rodrigue.poda@gmail.com'),
('SEGDA', 'Saadia', '05050505', 'saadia.segda@gmail.com'),
('ASSI', 'Jean-Louis', '04040404', 'jeanlouis.assi@gmail.com'),
('OUEDRAOGO', 'Yassine', '03030303', 'yassine.ouedraogo@gmail.com'),
('NITIEMA', 'Aguiratou', '02020202', 'aguiratou.nitiema@gmail.com');