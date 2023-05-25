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

   try {
      const application = await model.applyForInt(req.body.myModal ); //εδω να γίνεται έλεγχος για το id του user
      //θέλουμε να παίρνει 2 ορίσματα, memberEmail και intId, από το req, ανάλογα αν είναι logged in 
      //ο χρήστης ή όχι. 
      return application;
   }
   catch (err) {
      console.log("an error occured");
      res.send(err);
   }

}