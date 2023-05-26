import dotenv from 'dotenv';

if (process.env.NODE_ENV != 'production'){
   dotenv.config();
}

//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);


export async function updateInfo(req,res){
    try {
        const update = await model.updateInfo(req.params.userFirstName,req.params.userLastName,req.params.userEmail,req.params.userPassword,req.params.userPhoneNumber, req.session.memberData[0].email);
        console.log("Updated");
        return application;
   }
   catch (err) {
      console.log("updateInfo error occured");
      res.send(err);
   }
}