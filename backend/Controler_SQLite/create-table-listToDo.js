import {openDb} from '../src/configDB.js';

export async function createTableToDoList(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS todolist(id INTEGER PRIMARY KEY, uuidtask TEXT NOT NULL, email TEXT NOT NULL, task TEXT, priority INTEGER NOT NULL, status BOOLEAN NOT NULL)')
    })
}