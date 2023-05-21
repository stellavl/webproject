'use strict';

//connecting to the database file
const sqlite = require('better-sqlite3');
const db = new sqlite('model/ngo.db', { fileMustExist: true });

//functions with queries
//function1
export let function1 = () => {

    const query = db.prepare("");
    let info;
    try{
        info = query.all();
        return true;
    }
    catch (err) {
        throw err;
    }
}












