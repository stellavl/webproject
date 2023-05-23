//Controller for page created by ./views/contact.hbs


//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);




export async function submitMessage(req, res) {
    //Student types a message in the contact form
    //a new message is created
   //  const newMessage //= new MyTask(null, req.query.taskName);
    try {
       const lastMessage = await model.createMessage(req.body.ContactEmail, req.body.exampleFormControlTextarea1,
         req.body.ContactName, req.body.ContactSurname);
       //break:
       //const allTasks = await model.getAllTasks(userId)
       //να πετάγεται ένα popup που να λέει message submitted!
       console.log("message created");
       return lastMessage;
       //res.render('tasks', { tasks: allTasks, model: process.env.MODEL });
    } catch (error) {
       console.log("error occured");
       res.send(error);
    }
 }

