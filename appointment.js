// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'barbershop'
});

db.connect();

app.post('/book-appointment', (req, res) => {
    const { service, date, time, name, phone, email, notes } = req.body;

    db.query('SELECT * FROM appointments WHERE date = ? AND time = ?', [date, time], (err, results) => {
        if (results.length > 0) {
            return res.status(400).send('This time slot is already booked.');
        }

        db.query('INSERT INTO appointments (service, date, time, name, phone, email, notes) VALUES (?, ?, ?, ?, ?, ?, ?)', 
        [service, date, time, name, phone, email, notes], (err, result) => {
            if (err) throw err;
            res.send('Appointment booked successfully!');
        });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
