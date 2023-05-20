import express from 'express'
const router = express.Router()

// const homeController = await import(`controller/home.mjs`)

router.get('/', (req,res) => {
    res.render('home')
})
router.get('/about', (req,res) => {
    res.render('about')
})
router.get('/externalEvents', (req,res) => {
    res.render('externalEvents')
})
router.get('/internalEvents', (req,res) => {
    res.render('internalEvents')
})
router.get('/partners', (req,res) => {
    // res.render('partners')
    res.redirect('/partners');
})
router.get('/contact', (req,res) => {
    res.render('contact')
})

export default router;