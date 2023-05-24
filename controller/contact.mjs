//Controller for page created by ./views/contact.hbs


//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);


export async function submitMessage(req, res) {
    //Student types a message in the contact form
    //a new message is created
   //  const newMessage //= new MyTask(null, req.query.taskName);
    try {

      const lastMessage = await model.createMessage(req.body.ContactEmail, req.body.Message,
         req.body.ContactName, req.body.ContactSurname);

      //να πετάγεται ένα popup που να λέει message submitted!
      console.log("message submitted");
      //return lastMessage;
      
    } catch (error) {
       console.log("an error occured");
       res.send(error);
    }

}

