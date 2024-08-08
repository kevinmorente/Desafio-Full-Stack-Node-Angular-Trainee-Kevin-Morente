import express from 'express';
import { openDb } from '../src/configDB.js';
import { v4 as uuidv4 } from 'uuid';
import authenticationToken from '../services/authentication.js';

const router = express.Router();


router.post('/addtask', authenticationToken, async (req, res) => {
    try {
        const db = await openDb();
        let user = req.body;
        const query = "INSERT INTO todolist (uuidtask, email, task, priority, status) VALUES (?, ?, ?, ?, ?)"
        await db.run(query, [uuidv4(), res.locals.email, user.task, user.priority, true])
        await db.close();
        return res.status(201).json({ message: "Task created with successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

router.get('/gettask', authenticationToken, async (req, res) => {
    try {
        const db = await openDb();
        const query = "SELECT * FROM todolist WHERE email=?"
        const result = await db.all(query, [res.locals.email])
        await db.close();
        return res.status(201).json({ message: "tasks successfully rescued", result});
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

router.delete('/deletetask/:uuidtask', authenticationToken, async (req, res) => {
    try {
        const db = await openDb();
        const query = "DELETE FROM todolist WHERE uuidtask = ? AND email = ?";
        const result = await db.run(query, [req.params.uuidtask, res.locals.email]);
        console.log(result);
        await db.close();
        if (result.changes > 0) {
            return res.status(200).json({ message: "Task successfully deleted" });
        } else {
            return res.status(404).json({ message: "Task not found" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});

router.put('/updatetask/:uuidtask', authenticationToken, async (req, res) => {
    try {
        let user = req.body;
        const db = await openDb();
        const query = "UPDATE todolist SET status = ? WHERE uuidtask = ? AND email = ?";
        const result = await db.run(query, [user.status, req.params.uuidtask, res.locals.email]);
        await db.close();
        if (result.changes > 0) {
            return res.status(200).json({ message: "Task successfully updated" });
        } else {
            return res.status(404).json({ message: "Task not found or you don't have permission to update it" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Server Error" });
    }
});


export default router;