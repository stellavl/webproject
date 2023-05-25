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
export async function applyInt(req,res) {
   console.log("req.session.memberData.email, req.query.intId",req.session.memberData.email, req.query.intId);
   // try {
   //    const alreadyApplied = await model.checkIfAppliedIntEvent(req.session.memberData.email, req.query.intId);
   //    if (alreadyApplied){
   //       console.log("You have already applied to this event.")
   //    }
   //    else{
   //       const application = await model.applyForInt(req.session.memberData.email, req.query.intId);
   //       console.log("Application Accepted");
   //       return application;
   //    }
   // }
   // catch (err) {
   //    console.log("an error occured");
   //    res.send(err);
   // }

}