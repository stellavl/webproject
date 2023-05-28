import dotenv from 'dotenv';

if (process.env.NODE_ENV != 'production'){
   dotenv.config();
}

//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);


export async function updateInfo(req,res){
    try {

      const { userFirstName, userLastName, userEmail, userPassword, userPhoneNumber } = req.params;

      await model.updateInfo(userFirstName, userLastName, userEmail, userPassword, userPhoneNumber, req.session.memberData[0].email);
    
      console.log("Updated!");
      return {
         email: userEmail,
         password: userPassword,
         registration_date: req.session.memberData[0]?.registration_date,
         active: 'TRUE',
         first_name: userFirstName,
         last_name: userLastName,
         phone: userPhoneNumber,
         university: req.session.memberData[0]?.university,
         department: req.session.memberData[0]?.department
   }
}
   catch (err) {
      console.log("updateInfo error occured");
      throw err;
   }
}