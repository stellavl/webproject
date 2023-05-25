//Controller for page created by ./views/externalEvents.hbs
import dotenv from 'dotenv';

if (process.env.NODE_ENV != 'production'){
   dotenv.config();
}

//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);


//all external events
export async function externalEvents(){

    try {
        const events = await model.extEvent()
        return events;
     }
     catch (err) {
        res.send(err);
     }

}

export async function memberExternalEventsPast(req,res){
   try {
      const events = await model.memberExtEventPast(req.session.memberData[0].email)
      return events;
   }
   catch (err) {
      res.send(err);
   }
}

export async function memberExternalEventsFuture(req,res){
   try {
      const events = await model.memberExtEventFuture(req.session.memberData[0].email)
      return events;
   }
   catch (err) {
      res.send(err);
   }
}



//applying for external event
export async function applyExt(req,res) {

   try {
      const application = await model.applyForExt(); //εδω να γίνεται έλεγχος για το id του user
      //θέλουμε να παίρνει 2 ορίσματα, studentEmail και extId, από το req, ανάλογα αν είναι logged in 
      //ο χρήστης ή όχι. 
      return application;
   }
   catch (err) {
      console.log("an error occured");
      res.send(err);
   }
    
}



