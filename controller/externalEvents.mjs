//Controller for page created by ./views/externalEvents.hbs

//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);

//applying for external event
export async function applyExt(id) {

    
}

//all external events
export async function externalEvents(){

    try {
        const events = await model.extEvent()
        console.log(events);
        //res.render('tasks', { tasks: tasks, model: process.env.MODEL });
     }
     catch (err) {
        res.send(err);
     }

}

