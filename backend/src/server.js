import {openDb} from '../src/configDB.js';
import { createTable } from '../Controler_SQLite/create-table-pessoa.js'
import http from'http';
import app from'./index.js';

const server = http.createServer(app);

openDb();
createTable();


server.listen(8080);
