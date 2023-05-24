//Controller for page created by ./views/home.hbs

import dotenv from 'dotenv';

if (process.env.NODE_ENV != 'production'){
   dotenv.config();
}

//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);

//all members
export async function members(){
    try {
        const myMembers = await model.members()
        return myMembers;
     }
     catch (err) {
        res.send(err);
     }
}

export async function universities(){
   try {
       const myUniversities = await model.universities()
       return myUniversities;
    }
    catch (err) {
       res.send(err);
    }
}


//applying for membership
export async function applyForMember(req,res){

   try {
      //console.log("trying:(");
      console.log(req.body);
      const newMember = await model.register(req.body.ApplicationName, req.body.ApplicationSurname, 
         req.body.ApplicationEmail, req.body.ApplicationPhoneNumber, req.body.ApplicationUniversity, req.body.ApplicationDepartment)
      
      //console.log("done");
      return true;
   }
   catch (err) {
      console.log("an error occured");
      res.send(err);
   }

}







