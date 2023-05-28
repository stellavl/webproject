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
          const memberData=[{
                  email: req.params.userEmail,
                  password:req.params.userPassword,
                  registration_date: req.session.memberData[0]?.registration_date,
                  active: 1,
                  first_name: req.params.userFirstName,
                  last_name: req.params.userLastName,
                  phone: req.params.userPhoneNumber,
                  university: req.session.memberData[0]?.university,
                  department:req.session.memberData[0]?.department,
      }
   ]
        return memberData;
}
   catch (err) {
      console.log("updateInfo error occured");
      throw err;
   }
}