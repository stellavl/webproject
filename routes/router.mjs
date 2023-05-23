import express from 'express'
const router = express.Router()

//const homeController = await import(`../controller/home.mjs`);
const contactController = await import(`../controller/contact.mjs`)
// const externalEventsController = await import(`../controller/externalEvents.mjs`)
// const internalEventsController = await import(`../controller/internalEvents.mjs`)

import { externalEvents } from '../controller/externalEvents.mjs';
import { internalEvents } from '../controller/internalEvents.mjs';
import { members, universities } from '../controller/home.mjs';
import { memberApplicants, studentMessages } from '../controller/admin.mjs';
import { checkAuthenticated } from '../controller/profile.mjs';

router.get('/', (req,res) => {
    res.redirect('/home')
});

router.get('/home', async (req,res) => {
    try {
        const myMembers =  await members(); 
        const myExternalEvents = await externalEvents();
        const myInternalEvents = await internalEvents();
        const myUniversities =  await universities();
 
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

router.get('/admin', async(req,res) => {
    try {
        const extEvents = await externalEvents();
        const intEvents = await internalEvents();
        const applicants = await memberApplicants();
        const messages = await studentMessages();

        
        res.render('admin',{
            atHome: false,
            atAbout: false,
            atExternalEvents: false,
            atInternalEvents: false,
            atPartners: false,
            atContact: false,
            atProfile: false,
            atAdmin: true,
            extEvents: extEvents,
            intEvents: intEvents,
            applicants: applicants,
            messages: messages,
            numberOfEvents: extEvents.length+intEvents.length,
        });
    } 
    catch (err) {
        res.send(err);
    }
})


//submitting a message
router.get('/contact/submitted', contactController.submitMessage);


//applying for membership
router.post('/home/submit-form', (req, res) => {
    applyForMember(req, res); // Call the applyForMember function with req and res
 });
 


export default router;