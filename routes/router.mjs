import express from 'express'
const router = express.Router()

// const homeController = await import(`../controller/home.mjs`);
const contactController = await import(`../controller/contact.mjs`)
// const externalEventsController = await import(`../controller/externalEvents.mjs`)
// const internalEventsController = await import(`../controller/internalEvents.mjs`)

import { externalEvents } from '../controller/externalEvents.mjs';
import { internalEvents } from '../controller/internalEvents.mjs';
import { members, universities } from '../controller/home.mjs';

router.get('/', (req,res) => {
    res.redirect('/home')
});

router.get('/home', async (req,res) => {
    try {
        const myMembers =  await members(); 
        const myExternalEvents = await externalEvents();
        const myInternalEvents = await internalEvents();
        const myUniversities =  await universities();
        console.log(myUniversities,myUniversities.length)
 
        res.render('home',{
            atHome: true,
            atAbout: false,
            atExternalEvents: false,
            atInternalEvents: false,
            atPartners: false,
            atContact: false,
            atProfile: false,
            atAdmin: false,
            numberOfMembers: myMembers.length, 
            numberOfEvents: myExternalEvents.length+myInternalEvents.length,
            numberOfUniversities: myUniversities.length,
        });
    } 
    catch (err) {
        res.send(err);
    }
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
router.get('/externalEvents', async(req,res) => {
    try {
        const events =  await externalEvents(); 
        res.render('externalEvents',{
            atHome: false,
            atAbout: false,
            atExternalEvents: true,
            atInternalEvents: false,
            atPartners: false,
            atContact: false,
            atProfile: false,
            atAdmin: false,
            events: events,
        });
    } 
    catch (err) {
        res.send(err);
    }
});

router.get('/internalEvents', async (req,res) => {
    try{
        const events =  await internalEvents(); 
        res.render('internalEvents',{
            atHome: false,
            atAbout: false,
            atExternalEvents: false,
            atInternalEvents: true,
            atPartners: false,
            atContact: false,
            atProfile: false,
            atAdmin: false,
            events:events,
        });
    } 
    catch (err) {
        res.send(err);
    }
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

const checkAuthenticated = (req, res, next) => {
    if (req.session.authenticatedEmail)
        next()
    else
    return res.redirect('/home')
}

router.get('/profile',
    checkAuthenticated,
    (req,res) => {
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

//submitting a message
router.get('/contact/submitted', contactController.submitMessage);










export default router;