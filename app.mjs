import express from 'express'
import { engine } from 'express-handlebars'
import expSession from 'express-session'
import bcrypt from "bcrypt";
import createMemoryStore from 'memorystore';
import dotenv from 'dotenv';

if (process.env.NODE_ENV != 'production'){
   dotenv.config();
}

const app = express()
const PORT = process.env.PORT || '3000';

//routes as router
import router from './routes/router.mjs';

import { externalEvents } from './controller/externalEvents.mjs';
import { applyForMember } from './controller/home.mjs';
app.use('/',router);


// Specifying that the "public" folder will contain the static files
app.use(express.static('public'))

// session
const MemoryStore = createMemoryStore(expSession);
const sessionConf = {
    secret: process.env.secret || "έναμεγάλοτυχαίοαλφαριθμητικό",
    cookie: {maxAge: 1200*1000},
    store: new MemoryStore({ checkPeriod: 86400 * 1000 }),
    resave: false,
    saveUninitialized: false
};
app.use(expSession(sessionConf));

// Using Handlebars as a template engine
app.engine('hbs',engine({ extname: 'hbs' }))
// Activating the template engine with res.render()
app.set('view engine', 'hbs');

//for POST requests
app.use(express.urlencoded({extended: true}));

app.post('/do-login', (req, res) => {
    const emailGiven = req.body.email;
    const passwordGiven = req.body.password;

    const myPassword = '123'; 

    const saltRounds=10;

    const myPasswordHash = bcrypt.hash(myPassword, saltRounds);
    const passwordGivenHash = bcrypt.hash(passwordGiven, saltRounds);

    bcrypt.compare(myPasswordHash, passwordGivenHash, (err, result) => {
    if (err) {
        console.error(err);
    }
    if (result) {
        req.session.authenticatedEmail = emailGiven;
        console.log("Authenticated");
        console.log("Email:",emailGiven,"\nPassword:'",passwordGiven,"\nHash:",passwordGivenHash)
        return res.redirect('/profile');
    } else {
        console.log("NOT authenticated");
        console.log("Email:",emailGiven,"\nPassword:'",passwordGiven,"\nHash:",passwordGivenHash)
        return res.redirect('/home');
    }
    });
});


//starting server
const server = app.listen(PORT, () => { console.log(`http://127.0.0.1:${PORT}` )});

