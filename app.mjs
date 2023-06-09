import express from 'express'
import { engine } from 'express-handlebars'
import expSession from 'express-session'
import createMemoryStore from 'memorystore';

const app = express()
const PORT = process.env.PORT || '3000';

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

import router from './routes/router.mjs';
app.use('/',router);

// Using Handlebars as a template engine
app.engine('hbs',engine({ extname: 'hbs' }))
// Activating the template engine with res.render()
app.set('view engine', 'hbs');


//starting server
const server = app.listen(PORT, () => { console.log(`http://127.0.0.1:${PORT}`)});

