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
      //   delete req.session.memberData;
        req.session.memberData=[{
            email: req.params.userEmail,
            password:req.params.userPassword,
            registration_date: req.session.memberData[0].registration_date,
            active: 'TRUE',
            first_name: req.params.userFirstName,
            last_name: req.params.userLastName,
            phone: req.params.userPhoneNumber,
            university: req.session.memberData[0].university,
            department:req.session.memberData[0].department,
         }
      ]
     console.log("Member Data in updateInfo controller",req.session.memberData)
        return req.session.memberData;
   }
   catch (err) {
      console.log("updateInfo error occured");
      res.send(err);
   }
}