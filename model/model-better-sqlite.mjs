'use strict';

//connecting to the database file
import sqlite from 'better-sqlite3';
const db = new sqlite('model/db/ngo.db', { fileMustExist: true });

//functions with queries - interaction with the database:


// (1)---------------CREATE------------------

//student wishes to become a member and fills the form in homepage
export let register = (name,surname,email,phone,uni,dept) => {

    const query = db.prepare("INSERT INTO Student VALUES(?, ?, ?, ?, ?, ?)");
    const query1 = db.prepare("INSERT INTO Member VALUES(?, null, CURRENT_DATE, null, ?, ?, ?, ?, ?)");
    let info,info1;
    try{
        info = query.run(email,name,surname,phone,uni,dept);
        info1 = query1.run(email,name,surname,phone,uni,dept);
        return true;
    }
    catch (err) {
        throw err;
    }
}

//student submits a message and message is entered in the database
export let createMessage = (studentEmail, message, firstName, lastName) => {

    const query1 = db.prepare("INSERT INTO Student VALUES (?, ?, ?, null, null, null)");
    let info1;
    try{
        info1 = query1.run(studentEmail,firstName,lastName);
    }
    catch (err) {
        throw err;
    }

    const query = db.prepare("INSERT INTO Message VALUES (null, ?, ?, CURRENT_DATE)");
    let info;
    try{
        info = query.run(message,studentEmail);
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


// (2)---------------READ---------------------

//read all members
export let members = () => {
    const query = db.prepare("SELECT * FROM Member WHERE active='TRUE';");
    let info;
    try{
        info = query.all();
        return info;
    }
    catch (err) {
        throw err;
    }
}

export let memberLogin = (memberEmail) => {
    const query = db.prepare("SELECT * FROM Member WHERE active='TRUE' AND email=?;");
    let info;
    try{
        info = query.all(memberEmail);
        return info;
    }
    catch (err) {
        throw err;
    }   
}

export let adminLogin = (adminEmail) => {
    const query = db.prepare("SELECT * FROM Admin WHERE email=?;");
    let info;
    try{
        info = query.all(adminEmail);
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

// read all applications for membership
export let memberApplicants = () => {
    const query = db.prepare("SELECT * FROM Member WHERE active='FALSE';");
    let info;
    try{
        info = query.all();
        return info;
    }
    catch (err) {
        throw err;
    }
}

// read all messages
export let studentMessages = () => {
    const query = db.prepare("SELECT * FROM Message,Student WHERE student_email==email");
    let info;
    try{
        info = query.all();
        return info;
    }
    catch (err) {
        throw err;
    }
}

//-------------------------------- TO DO --------------------------------
//admin functions (CRUD):

//admin creates an event (C)


//admin wishes to see all active members (R)


//admin accepts student applying for membership (U)
export let applicationAccepted = () => {

    try{

        const toBeAccepted = db.prepare("SELECT email FROM Member WHERE active=0");
        let Accepted;

        try{
            const query1 = db.prepare("UPDATE Member SET active=1 WHERE (email=?)");
            Accepted = query1.run(toBeAccepted);
            return true;
        }
        catch (err) {
            throw err;
        }

    }

    catch (err) {
        throw err;
    }
    
}

//admin deletes event from site - event becomes inactive (D)


// (3)---------------UPDATE-------------------


// (4)---------------DELETE-------------------








