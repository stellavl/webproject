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
