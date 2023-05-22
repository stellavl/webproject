//Controller for page created by ./views/externalEvents.hbs
import dotenv from 'dotenv';

if (process.env.NODE_ENV != 'production'){
   dotenv.config();
}

//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);

//applying for external event
export async function applyExt(id) {

    
}

//all external events
export async function externalEvents(){

    try {
        const events = await model.extEvent()
        return events;
     }
     catch (err) {
        res.send(err);
     }

}

