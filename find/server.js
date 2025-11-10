const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5500;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database_name'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.use(express.json());

app.post('/signup', (req, res) => {
    const { fullName, number, email, password, confirmPassword } = req.body;

    const query = `INSERT INTO users (fullName, number, email, password) VALUES (?, ?, ?, ?)`;

    db.query(query, [fullName, number, email, password], (err, result) => {
        if (err) {
            console.error('Error: ', err);
            res.status(500).send('서버 에러');
        } else {
            res.send('회원가입이 완료되었습니다!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});