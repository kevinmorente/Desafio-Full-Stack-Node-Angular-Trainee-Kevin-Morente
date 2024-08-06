import express from 'express';
import { openDb } from '../src/configDB.js';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import bcrypt from 'bcrypt';

const router = express.Router();
const secretKey = 'KevinDevFullStack';


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
            const query = "INSERT INTO users (uuid, name, email, password) VALUES (?, ?, ?, ?)"
            const passwordHash = await bcrypt.hash(user.password, 8)
            console.log("hash created:", passwordHash)
            const db = await openDb()
            await db.run(query, [uuidv4(), user.name, user.email, passwordHash])
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
    const query = "SELECT email FROM users WHERE email=?"
    const result = await db.get(query, [user.email])
    await db.close();
    if (result === undefined) {
        return res.status(400).json({ message: "account not exist" });
    } else {
        try {
            const db = await openDb()
            const query = "SELECT name, email, password FROM users WHERE email=?"
            const result = await db.get(query, [user.email])
            await db.close()
            const isValidPassword = await bcrypt.compare(user.password, result.password)
            if (isValidPassword) {
                const constructToken = { email: result.email, name: result.name };
                const accessToken = jwt.sign(constructToken, secretKey, { expiresIn: '8h' });
                console.log("JWT Token: " + accessToken);
                return res.status(200).json({ message: "Login successful", accessToken });
            } else {
                return res.status(401).json({ message: "Invalid email or password" });
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Server Error" });
        }
    }
});

export default router;