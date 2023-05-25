import dotenv from 'dotenv';

if (process.env.NODE_ENV != 'production'){
   dotenv.config();
}

//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);

export async function internalEvents(){

    try {
        const events = await model.intEvent()
        return events;
     }
     catch (err) {
        res.send(err);
     }
}

export async function memberInternalEventsPast(req,res){
   try {
      const events = await model.memberIntEventPast(req.session.memberData[0].email);
      return events;
   }
   catch (err) {
      res.send(err);
   }
}

export async function memberInternalEventsFuture(req,res){
   try {
      const events = await model.memberIntEventFuture(req.session.memberData[0].email);
      return events;
   }
   catch (err) {
      res.send(err);
   }
}



//member applies for internal event
export async function checkIfAppliedIntEvent(req,res){
   try {
      const alreadyApplied = await model.checkIfAppliedIntEvent(req.session.memberData[0].email, req.params.id);
      if (alreadyApplied!=''){
         console.log("You have already applied to this event.")
      }
      else{
         applyInt(req,res);
      }
   }
   catch (err) {
      console.log("internalEvents.mjs/checkIfAppliedIntEvent error occured");
      res.send(err);
   }
}

 async function applyInt(req,res) {
   try{
      const application = await model.applyForInt(req.session.memberData[0].email, req.params.id);
      console.log("Application Accepted");
      return application;
   }
   catch (err) {
      console.log("applyInt error occured");
      res.send(err);
   }
}