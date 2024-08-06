import {openDb} from '../src/configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec(' CREATE TABLE IF NOT EXISTS users( id INTEGER PRIMARY KEY, uuid TEXT, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, password TEXT NOT NULL)')
    })
}