'use strict';

//connecting to the database file
const sqlite = require('better-sqlite3');
const db = new sqlite('model/db/ngo.db', { fileMustExist: true });

//functions with queries - interaction with the database

//student wishes to become a member and fills the form in homepage
export let register = (name,surname,email,phone,uni,dept) => {

    const query = db.prepare("INSERT INTO ");
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

//student applies for external event
export let applyForExt = (studentEmail, extId) => {
    


}


//member applies for internal event
export let applyForInt = (memberEmail,intId) => {



}








