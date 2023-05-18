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