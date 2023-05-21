'use strict';

//connecting to the database file
const sqlite = require('better-sqlite3');
const db = new sqlite('model/db/ngo.db', { fileMustExist: true });

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

//student submits a message and message is entered in the database
export let createMessage = (studentEmail, message) => {

    const query = db.prepare("INSERT INTO Message VALUES (null, ?, ?, CURRENT_DATE)");
    let info;
    try{
        info = query.run(message,studentEmail);
        return true;
    }
    catch (err) {
        throw err;
    }
}













