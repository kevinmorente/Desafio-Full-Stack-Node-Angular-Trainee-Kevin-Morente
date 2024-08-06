import express from 'express';
import cors from 'cors';
import usersRoute from'../routes/users.js';
import listRoute from'../routes/toDoList.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', usersRoute);
app.use('/list', listRoute);

export default app;