use bg8h6b6ua9e2kdopyvue;
-- creation of table client
CREATE TABLE client(
id_client INT AUTO_INCREMENT PRIMARY KEY,
name_client VARCHAR(50),
identify_client VARCHAR(50) UNIQUE,
address VARCHAR(100),
phone_number VARCHAR(50) UNIQUE,
email VARCHAR(100));

-- creation of table platform
CREATE TABLE platform(
id_platform INT AUTO_INCREMENT PRIMARY KEY,
used_platform INT);

-- creation of table transaction
CREATE TABLE transaction(
id_transaction INT AUTO_INCREMENT PRIMARY KEY,
amount_transaction INT,
date_transaction DATE,
time_transaction TIME,
ID_state_transaction INT,
state_transaction VARCHAR(20),
type_transaction VARCHAR(20),
id_client INT,
id_platform INT,
id_invoice INT,
invoice_number VARCHAR(20),
FOREIGN KEY (id_client) REFERENCES client(id_client),
FOREIGN KEY (id_platform) REFERENCES platform(id_platform),
FOREIGN KEY (id_invoice) REFERENCES invoice(id_invoice)
);

-- creation of table invoice
CREATE TABLE invoice(
id_invoice INT AUTO_INCREMENT PRIMARY KEY,
invoice_number VARCHAR(100),
billing_period DATE,
invoiced_amount INT,
amount_paid INT,
id_client INT,
FOREIGN KEY (id_client) REFERENCES client(id_client)
);

INSERT INTO client(name_client, identify_client, address, phone_number, email) VALUES ('Ana López', '12345678A', 'Calle Mayor 15, Madrid', '612345678', 'ana.lopez@email.com'), ('Carlos Martínez', '87654321B', 'Avenida Libertad 23, Barcelona', '623456789', 'carlos.martinez@email.com'), ('Lucía Fernández', '23456789C', 'Plaza España 5, Sevilla', '634567890', 'lucia.fernandez@email.com'), ('Javier Gómez', '34567890D', 'Calle del Sol 12, Valencia', '645678901', 'javier.gomez@email.com'), ('Sofía Rodríguez', '45678901E', 'Paseo de la Castellana 45, Madrid', '656789012', 'sofia.rodriguez@email.com'), ('Miguel Sánchez', '56789012F', 'Calle Real 8, Zaragoza', '667890123', 'miguel.sanchez@email.com'), ('Elena Díaz', '67890123G', 'Avenida de la Independencia 33, Bilbao', '678901234', 'elena.diaz@email.com'), ('Pablo Ruiz', '78901234H', 'Calle del Carmen 7, Málaga', '689012345', 'pablo.ruiz@email.com'), ('Carmen Herrera', '89012345I', 'Plaza Mayor 10, Córdoba', '690123456', 'carmen.herrera@email.com'), ('Diego Morales', '90123456J', 'Calle de la Paz 18, Murcia', '601234567', 'diego.morales@email.com');

