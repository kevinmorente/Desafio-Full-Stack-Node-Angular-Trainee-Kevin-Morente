import {openDb} from '../src/configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec(' CREATE TABLE IF NOT EXISTS users( id INTEGER PRIMARY KEY, name TEXT, email TEXT UNIQUE, password TEXT)')
    })
}