import express, { query } from 'express';
import { openDb } from '../src/configDB.js';
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({ message: "Test de API" })
})

router.post('/signup', (req, res) => {
    let user = req.body;
    var query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
    openDb()
        .then(db => {
            return db.run(query, [user.name, user.email, user.password]);
        })
        .then(result => {
            console.log('Dados inseridos com sucesso:', result);
            return res.status(200).json({ message: "User created successfully" });
        })
        .catch(error => {
            if (error.code === 'SQLITE_CONSTRAINT') {
                console.error('Erro: email já existe:', error.message);
                return res.status(400).json({ message: "Email already exists" });
            } else {
                console.error('Erro no servidor ao inserir dados:', error.message);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
});

export default router;