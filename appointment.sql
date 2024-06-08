CREATE TABLE appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    service VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    notes TEXT
);
