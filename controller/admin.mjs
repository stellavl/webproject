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

//admin accepts student applying for membership
export async function newMemberAccepted(req,res){

   try{
      const accepted = await model.applicationAccepted(req.query.email)
      return accepted;
   }
   catch (err) {
      console.log("errorrrr")
      //res.send(err);
   }

}

//admin deletes event from site - event becomes inactive (D)
export async function eventDeleted(eventId) {

   try{
      const deleted = await model.applicationAccepted()
      //return accepted;
      console.log("event deleted");
   }
   catch (err) {
      console.log("an error occured");
      res.send(err);
   }
   
}







