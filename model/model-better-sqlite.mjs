'use strict';

//connecting to the database file
import sqlite from 'better-sqlite3';
const db = new sqlite('model/db/ngo.db', { fileMustExist: true });

//functions with queries - interaction with the database:


// (1)---------------CREATE------------------

//student wishes to become a - and fills the form in homepage
export let register = (name,surname,email,phone,uni,dept,password) => {

    const query = db.prepare("INSERT INTO Student VALUES(?, ?, ?, ?, ?, ?)");
    const query1 = db.prepare("INSERT INTO Member VALUES(?, ?, CURRENT_DATE, null, ?, ?, ?, ?, ?)");
    let info,info1;
    try{
        info = query.run(email,name,surname,phone,uni,dept);
        info1 = query1.run(email,password,name,surname,phone,uni,dept);
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

// first check that they haven't applied already
export let checkIfAppliedExtEvent = (studentEmail, extId) => {
    const query = db.prepare("SELECT *  FROM 'student-event'  WHERE student_email==? AND event_id==?");
    let info;
    try{
        info = query.all(studentEmail,extId);
        return info;
    }
    catch (err) {
        console.log("model/checkIfAppliedExtEvent error");
        throw err;
    }
}

export let applyForExt = (studentEmail,extId) => {
    const query = db.prepare("INSERT INTO 'student-event' VALUES (?,?)");
    let info;
    try{
        info = query.run(studentEmail,extId);
        return true;
    }
    catch (err) {
        console.log("model/applyForExt error")
        throw err;
    }
}

//member applies for internal event

// first check that they haven't applied already
export let checkIfAppliedIntEvent = (memberEmail, intId) => {
    const query = db.prepare("SELECT *  FROM 'member-internal_event' WHERE member_email==? AND internal_event_id==?");
    let info;
    try{
        info = query.all(memberEmail,intId);
        return info;
    }
    catch (err) {
        console.log("model/checkIfAppliedIntEvent error");
        throw err;
    }
}

export let applyForInt = (memberEmail,intId) => {
    const query = db.prepare("INSERT INTO 'member-internal_event' VALUES (?,?)");
    let info;
    try{
        info = query.run(memberEmail,intId);
        return true;
    }
    catch (err) {
        console.log("model/applyForInt error")
        throw err;
    }
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

//read all external events the member has participated
export let memberExtEventPast = (memberEmail) => {
    const query = db.prepare("SELECT * FROM External_Event, 'student-event'  WHERE (end_date < CURRENT_DATE) AND (event_id==id) AND student_email==?");
    let info;
    try{
        info = query.all(memberEmail);
        return info;
    }
    catch (err) {
        throw err;
    }
}

//read all internal events the member has participated
export let memberIntEventPast = (memberEmail) => {
    const query = db.prepare("SELECT * FROM Internal_Event, 'member-internal_event'  WHERE (end_date < CURRENT_DATE) AND (internal_event_id==id) AND member_email==?");
    let info;
    try{
        info = query.all(memberEmail);
        return info;
    }
    catch (err) {
        throw err;
    }
}

//read all external events the member will participate
export let memberExtEventFuture = (memberEmail) => {
    const query = db.prepare("SELECT * FROM External_Event, 'student-event'  WHERE (start_date > CURRENT_DATE) AND (event_id==id) AND student_email==?");
    let info;
    try{
        info = query.all(memberEmail);
        return info;
    }
    catch (err) {
        throw err;
    }
}

//read all internal events the member will participate
export let memberIntEventFuture = (memberEmail) => {
    const query = db.prepare("SELECT * FROM Internal_Event, 'member-internal_event'  WHERE (start_date > CURRENT_DATE) AND (internal_event_id==id) AND member_email==?");
    let info;
    try{
        info = query.all(memberEmail);
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



//admin accepts student applying for membership (U)
export let applicationAccepted = (email) => {

        //const toBeAccepted = db.prepare("SELECT email FROM Member WHERE active=0");

        let Accepted;
        const query1 = db.prepare("UPDATE Member SET active='TRUE' WHERE (email=?)");

        try{
            Accepted = query1.run(email);
            console.log("db stuff done")
            return true;
        }
        catch (err) {
            console.log("errr");
            throw err;
        }
}

//admin rejects student applying for membership (D)
export let applicationRejected = (email) => {

    let Rejected;
    const query1 = db.prepare("DELETE FROM Member WHERE (email=?)");

    try{
        Rejected = query1.run(email);
        console.log("deleted from database")
        return true;
    }
    catch (err) {
        console.log("errr");
        throw err;
    }
}

//admin deletes event from site - event becomes inactive (D)

export let updateInfo = (fName,lName,newEmail,password,pNumber, oldEmail) => {
    const query = db.prepare("UPDATE Member SET first_name=?,last_name=?, email=?, password=?, phone=? WHERE email=?")
    let info;
    try{
        info = query.run(fName,lName,newEmail,password,pNumber,oldEmail);
        return true;
    }
    catch (err) {
        console.log("model/update info error")
        throw err;
    }
}








