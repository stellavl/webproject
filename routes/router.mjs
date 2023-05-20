import express from 'express'
const router = express.Router()

// const homeController = await import(`../controller/home.mjs`);

router.get('/', (req,res) => {
    res.render('home',{
        atHome: true
    });
});
router.get('/home', (req,res) => {
    res.render('home',{
        atHome: true
    });
});
router.get('/about', (req,res) => {
    res.render('about',{
        atAbout: true
    });
});
router.get('/externalEvents', (req,res) => {
    res.render('externalEvents',{
        atExternalEvents: true
    });
});
router.get('/internalEvents', (req,res) => {
    res.render('internalEvents',{
        atInternalEvents: true
    });
});
router.get('/partners', (req,res) => {
    res.render('partners',{
        atPartners: true
    });
});
router.get('/contact', (req,res) => {
    res.render('contact',{
        atContact: true
    });
});
router.get('/profile', (req,res) => {
    res.render('profile',{
        atProfile: true
    });
});
router.get('/admin', (req,res) => {
    res.render('admin',{
        atAdmin: true
    });
})

export default router;