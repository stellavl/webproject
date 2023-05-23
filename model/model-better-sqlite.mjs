'use strict';

//connecting to the database file
import sqlite from 'better-sqlite3';
const db = new sqlite('model/db/ngo.db', { fileMustExist: true });

//functions with queries - interaction with the database:

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
export let createMessage = (studentEmail, message, firstName, lastName) => {

    const query = db.prepare("INSERT INTO Message VALUES (null, ?, ?, CURRENT_DATE)");
    const query1 = db.prepare("INSERT INTO Student VALUES (?, ?, ?, null, null, null)");
    let info,info1;
    try{
        info = query.run(message,studentEmail);
        info1 = query1.run(studentEmail,firstName,lastName);
        return true;
    }
    catch (err) {
        throw err;
    }
}

//read all members
export let members = () => {
    const query = db.prepare("SELECT * FROM Member WHERE active='TRUE';");

}

//all external events 
export let extEvent = () => {

    const query = db.prepare("SELECT * FROM External_Event WHERE start_date > (SELECT strftime('%d-%m-%Y', CURRENT_DATE))");
    let info;
    try{
        info = query.all();
        return info;
    }
    catch (err) {
        throw err;
    }
}

//read distinct universities
export let universities = () => {
    const query = db.prepare("SELECT DISTINCT university FROM Member WHERE active='TRUE';");
    let info;
    try{
        info = query.all();
        return info;
    }
    catch (err) {
        throw err;
    }
}

//read all external events 
export let extEvent = () => {
    const query = db.prepare("SELECT * FROM External_Event WHERE start_date > CURRENT_DATE");
    let info;
    try{
        info = query.all();
        return info;
    }
    catch (err) {
        throw err;
    }
}

//read all internal events 
export let intEvent = () => {
    const query = db.prepare("SELECT * FROM Internal_Event WHERE start_date > CURRENT_DATE");
    let info;
    try{
        info = query.all();
        return info;
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

//admin functions (CRUD):

//admin creates an event (C)


//admin wishes to see all active members (R)


//admin accepts student applying for membership (U)


//admin deletes event from site - event becomes inactive (D)











