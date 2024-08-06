import {openDb} from '../src/configDB.js';

export async function createTableUsers(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, uuid TEXT NOT NULL, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, password TEXT NOT NULL)')
    })
}