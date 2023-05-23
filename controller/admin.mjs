//Controller for page created by ./views/externalEvents.hbs
import dotenv from 'dotenv';

if (process.env.NODE_ENV != 'production'){
   dotenv.config();
}

//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);


export async function memberApplicants(){
    try {
        const applicants = await model.memberApplicants()
        return applicants;
     }
     catch (err) {
        res.send(err);
     }
}

export async function studentMessages(){
   try {
       const messages = await model.studentMessages()
       return messages;
    }
    catch (err) {
       res.send(err);
    }

}