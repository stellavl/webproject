import express from 'express'
const router = express.Router()

// const homeController = await import(`../controller/home.mjs`);

// const atHome=false;
// const atAbout=false;
// const atExternalEvents=false;
// const atInternalEvents=false;
// const atPartners=false;
// const atContact=false;
// const atProfile=false;
// const atAdmin=false;

router.get('/', (req,res) => {
    res.render('home',{
        atHome: true,
        atAbout: false,
        atExternalEvents: false,
        atInternalEvents: false,
        atPartners: false,
        atContact: false,
        atProfile: false,
        atAdmin: false,
    });
});
router.get('/home', (req,res) => {
    res.render('home',{
        atHome: true,
        atAbout: false,
        atExternalEvents: false,
        atInternalEvents: false,
        atPartners: false,
        atContact: false,
        atProfile: false,
        atAdmin: false,
    });
});
router.get('/about', (req,res) => {
    res.render('about',{
        atHome: false,
        atAbout: true,
        atExternalEvents: false,
        atInternalEvents: false,
        atPartners: false,
        atContact: false,
        atProfile: false,
        atAdmin: false,
    });
});
router.get('/externalEvents', (req,res) => {
    res.render('externalEvents',{
        atHome: false,
        atAbout: false,
        atExternalEvents: true,
        atInternalEvents: false,
        atPartners: false,
        atContact: false,
        atProfile: false,
        atAdmin: false,
    });
});
router.get('/internalEvents', (req,res) => {
    res.render('internalEvents',{
        atHome: false,
        atAbout: false,
        atExternalEvents: false,
        atInternalEvents: true,
        atPartners: false,
        atContact: false,
        atProfile: false,
        atAdmin: false,
    });
});
router.get('/partners', (req,res) => {
    res.render('partners',{
        atHome: false,
        atAbout: false,
        atExternalEvents: false,
        atInternalEvents: false,
        atPartners: true,
        atContact: false,
        atProfile: false,
        atAdmin: false,
    });
});
router.get('/contact', (req,res) => {
    res.render('contact',{
        atHome: false,
        atAbout: false,
        atExternalEvents: false,
        atInternalEvents: false,
        atPartners: false,
        atContact: true,
        atProfile: false,
        atAdmin: false,
    });
});
router.get('/profile', (req,res) => {
    res.render('profile',{
        atHome: false,
        atAbout: false,
        atExternalEvents: false,
        atInternalEvents: false,
        atPartners: false,
        atContact: false,
        atProfile: true,
        atAdmin: false,
    });
});
router.get('/admin', (req,res) => {
    res.render('admin',{
        atHome: false,
        atAbout: false,
        atExternalEvents: false,
        atInternalEvents: false,
        atPartners: false,
        atContact: false,
        atProfile: false,
        atAdmin: true,
    });
})

export default router;