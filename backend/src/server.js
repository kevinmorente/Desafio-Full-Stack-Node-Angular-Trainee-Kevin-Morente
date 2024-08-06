import { createTableUsers } from '../Controler_SQLite/create-table-users.js'
import { createTableToDoList } from '../Controler_SQLite/create-table-listToDo.js';

import http from'http';
import app from'./index.js';
import 'dotenv/config'

const server = http.createServer(app);

createTableUsers();
createTableToDoList();

server.listen(8080);