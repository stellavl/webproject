import express from 'express'
// Handlebars (https://www.npmjs.com/package/express-handlebars)
import { engine } from 'express-handlebars'

const path = require('path')

// Defining our basic variables
const app = express()
const PORT = process.env.PORT || '3000';
const router = express.Router()

// Specifying that the "public" folder will contain the static files
app.use(express.static('public'))

// Using Handlebars as a template engine
app.engine('hbs',engine({ extname: 'hbs' }))

// Activating the template engine with res.render()
app.set('view engine', 'hbs');

// ---------------------------------------------
// Model 




// ---------------------------------------------
// Controller

// Home route
app.get('/', (req,res) => {

    res.render()

})

/*

//logIn function
let function logIn(req,res) {
  
}

//contacting function
let function submit(req,res) {
    
}

*/


//loading router object
app.use(router)

//defining some basic routes
router.route('/').get()
router.route('/partners').get()

//defining route for loging in
router.route('/login').get(logIn)

//defining route for the contact form
router.route('/contact/submit').get(submit)


//starting server
const server = app.listen(PORT, () => { console.log(`http://127.0.0.1:${PORT}`) });
