//Controller for page created by ./views/contact.hbs


//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);


export async function submitMessage(req, res) {
    try {
      const lastMessage = await model.createMessage(req.body.ContactEmail, req.body.Message,
         req.body.ContactName, req.body.ContactSurname);
      //να πετάγεται ένα popup που να λέει message submitted!
      console.log("message submitted");
      res.redirect('/contact');
    } catch (error) {
       console.log("an error occured");
       res.send(error);
    }
}

