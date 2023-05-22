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