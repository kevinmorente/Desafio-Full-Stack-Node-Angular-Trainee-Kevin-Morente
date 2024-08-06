import { createTable } from '../Controler_SQLite/create-table-pessoa.js'
import http from'http';
import app from'./index.js';
import 'dotenv/config'

const server = http.createServer(app);

createTable();

server.listen(8080);