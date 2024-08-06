import express from 'express';
import { openDb } from '../src/configDB.js';


import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/', async (req, res) => {
    const db = await openDb()
    let user = req.body;
    const result = await db.get('SELECT email, password FROM users WHERE email=?', [user.email])
    console.log(result);
    await db.close()
    return res.status(200).json({ message: "LINK PARA TESTAR APIs" })

})

router.post('/signup', async (req, res) => {
    const db = await openDb()
    let user = req.body;
    const query = "SELECT email FROM users WHERE email=?"
    const result = await db.get(query, [user.email])
    await db.close();
    if (result) {
        return res.status(400).json({ message: "Email already exists" });
    } else {
        try {
            const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
            const passwordHash = await bcrypt.hash(user.password, 8)
            console.log("hash created:", passwordHash)
            const db = await openDb()
            await db.run(query, [user.name, user.email, passwordHash])
            await db.close();
            return res.status(201).json({ message: "User created successfully" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Server Error" });
        }
    }
});

router.post('/login', async (req, res) => {
    const db = await openDb()
    let user = req.body;
    const query = "SELECT email, password FROM users WHERE email=?"
    const result = await db.get(query, [user.email])
    await db.close()
    const isValidPassword = await bcrypt.compare(user.password, result.password)
    console.log(isValidPassword)
    if(isValidPassword){
        return res.status(200).json({ message: "Login successful" });
    }else{
        return res.status(401).json({ message: "Invalid email or password" });
    }
});






export default router;