import { createTableUsers } from '../Controler_SQLite/create-table-users.js'
import { createTableToDoList } from '../Controler_SQLite/create-table-listToDo.js';

import http from'http';
import app from'./index.js';

const server = http.createServer(app);
server.listen(8080);

createTableUsers();
createTableToDoList();

