import dotenv from 'dotenv';

if (process.env.NODE_ENV != 'production'){
   dotenv.config();
}

//Picking model from file .env
const model = await import(`../model/model-${process.env.MODEL}.mjs`);

export async function checkAuthenticated(req, res, next){
    if (req.session.authenticatedEmail)
        next()
    else
    return res.redirect('/home')
}