import express from 'express'
import { engine } from 'express-handlebars'
import expSession from 'express-session'
import bcrypt from "bcrypt";
import createMemoryStore from 'memorystore';

const app = express()
const PORT = process.env.PORT || '3000';

//routes
import routes from './routes/router.mjs'
import { externalEvents } from './controller/externalEvents.mjs';
app.use('/',routes);

// Specifying that the "public" folder will contain the static files
app.use(express.static('public'))

// session
// import 'dotenv/config';
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
app.use(express.urlencoded({extended: false}));

app.post('/do-login', (req, res) => {
    const emailGiven = req.body.email;
    const givenPassword = req.body.password;
    const myPassword = '123'; 

    const saltRounds=10;

    const myPasswordHash = bcrypt.hashSync(myPassword, saltRounds);
    const givenPasswordHash = bcrypt.hashSync(givenPassword, saltRounds);
    const storedSalt = myPasswordHash.slice(0, 29);

    bcrypt.hash(givenPassword, storedSalt, (err, hashedPassword) => {
        if (err) {
            // Handle the error
            console.error(err);
        }
        if (hashedPassword === myPasswordHash)  {
            req.session.authenticatedEmail = emailGiven;
            console.log("Authenticated");
            return res.redirect('/profile');
        } else {
            console.log("NOT authenticated");
            return res.redirect('/home');
        }
    });
});


//starting server
const server = app.listen(PORT, () => { console.log(`http://127.0.0.1:${PORT}`)});
