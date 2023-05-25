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


//student applies for external event
export async function checkIfAppliedExtEvent(req,res){
   try {
      if (req.session.adminData!==undefined){
         console.log("Only students can apply")
      }
      else if (req.session.memberData===undefined){
         //insert code here
      }
      else{
         const alreadyApplied = await model.checkIfAppliedExtEvent(req.session.memberData[0].email, req.params.id);
         if (alreadyApplied!=''){
            console.log("You have already applied to this event.")
         }
         else{
            applyExt(req,res);
         }
      }
   }
   catch (err) {
      console.log("externalEvents.mjs/checkIfAppliedExtEvent error occured");
      res.send(err);
   }
}

 async function applyExt(req,res) {
   try{
      const application = await model.applyForExt(req.session.memberData[0].email, req.params.id);
      console.log("Application Accepted");
      return application;
   }
   catch (err) {
      console.log("applyExt error occured");
      res.send(err);
   }
}


