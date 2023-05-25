import express from 'express'
import bcrypt from "bcrypt";

const router = express.Router()

const homeController = await import(`../controller/home.mjs`);
const contactController = await import(`../controller/contact.mjs`)
const externalEventsController = await import(`../controller/externalEvents.mjs`)
const internalEventsController = await import(`../controller/internalEvents.mjs`)

const adminController = await import(`../controller/admin.mjs`);

import { externalEvents } from '../controller/externalEvents.mjs';
import { internalEvents } from '../controller/internalEvents.mjs';
import { members, universities } from '../controller/home.mjs';
import { memberApplicants, studentMessages } from '../controller/admin.mjs';
import { checkAuthenticated } from '../controller/login.mjs';
import { checkAdmin } from '../controller/login.mjs';
import { memberLogin } from '../controller/login.mjs';
import { adminLogin } from '../controller/login.mjs';

router.get('/', (req,res) => {
    res.redirect('/home')
});

router.get('/home', async (req,res) => {
    try {
        const memberData = req.session.memberData;
        const adminData = req.session.adminData;
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
            memberData: memberData,
            adminData: adminData
        });
    } 
    catch (err) {
        res.send(err);
    }
});

router.get('/about', (req,res) => {
    try{
        const memberData = req.session.memberData;
        const adminData = req.session.adminData;
        req.session.returnTo = req.originalUrl;
        res.render('about',{
            atHome: false,
            atAbout: true,
            atExternalEvents: false,
            atInternalEvents: false,
            atPartners: false,
            atContact: false,
            atProfile: false,
            atAdmin: false,
            memberData: memberData,
            adminData: adminData
        });
    }
    catch (err) {
        res.send(err);
    } 
});

router.get('/externalEvents', async(req,res) => {
    try {
        const events =  await externalEvents(); 
        const memberData = req.session.memberData;
        const adminData = req.session.adminData;
        req.session.returnTo = req.originalUrl;
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
            memberData: memberData,
            adminData: adminData,
        });
    } 
    catch (err) {
        res.send(err);
    }
});

router.get('/internalEvents', async (req,res) => {
    try{
        const events =  await internalEvents(); 
        const memberData = req.session.memberData;
        const adminData = req.session.adminData;
        // console.log(adminData);
        req.session.returnTo = req.originalUrl;
        res.render('internalEvents',{
            // adminData: [ { email: 'admin@sdo.com', password: '1234' } ],
            atHome: false,
            atAbout: false,
            atExternalEvents: false,
            atInternalEvents: true,
            atPartners: false,
            atContact: false,
            atProfile: false,
            atAdmin: false,
            events:events,
            memberData: memberData,
            adminData: adminData,
        });
    } 
    catch (err) {
        res.send(err);
    }
});

router.get('/partners', (req,res) => {
    try{
        const memberData = req.session.memberData;
        const adminData = req.session.adminData;
        req.session.returnTo = req.originalUrl;
        res.render('partners',{
            atHome: false,
            atAbout: false,
            atExternalEvents: false,
            atInternalEvents: false,
            atPartners: true,
            atContact: false,
            atProfile: false,
            atAdmin: false,
            memberData: memberData,
            adminData: adminData
        });
    }
    catch (err) {
        res.send(err);
    }      
});

router.get('/contact', (req,res) => {
    try{
        const memberData = req.session.memberData;
        const adminData = req.session.adminData;
        req.session.returnTo = req.originalUrl;
        res.render('contact',{
            atHome: false,
            atAbout: false,
            atExternalEvents: false,
            atInternalEvents: false,
            atPartners: false,
            atContact: true,
            atProfile: false,
            atAdmin: false,
            memberData: memberData,
            adminData: adminData
        });   
    }
    catch (err) {
        res.send(err);
    }    
});

router.get('/profile', checkAuthenticated, async(req,res) => {
    try {
        const memberData = req.session.memberData;
        const internalEventsPast = await internalEventsController.memberInternalEventsPast(req, res);
        const externalEventsPast = await externalEventsController.memberExternalEventsPast(req, res);
        const eventsPast = [...internalEventsPast, ...externalEventsPast];    
        const internalEventsFuture = await internalEventsController.memberInternalEventsFuture(req, res);
        const externalEventsFuture = await externalEventsController.memberExternalEventsFuture(req, res);
        const eventsFuture = [...internalEventsFuture, ...externalEventsFuture];            
        req.session.returnTo = req.originalUrl;
        res.render('profile',{
            atHome: false,
            atAbout: false,
            atExternalEvents: false,
            atInternalEvents: false,
            atPartners: false,
            atContact: false,
            atProfile: true,
            atAdmin: false,
            memberData: memberData,
            eventsPast: eventsPast,
            eventsFuture: eventsFuture,
        });
        
    }
    catch (err) {
        res.send(err);
    } 
});

router.get('/admin', checkAdmin, async(req,res) => {
    try {
        const extEvents = await externalEvents();
        const intEvents = await internalEvents();
        const applicants = await memberApplicants();
        const messages = await studentMessages();
        const adminData = req.session.adminData;
        req.session.returnTo = req.originalUrl; 
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
            adminData: adminData
        });
    } 
    catch (err) {
        res.send(err);
    }
})

//for POST requests
router.use(express.urlencoded({extended: true}));

router.post('/do-login', async(req, res) => {
    const emailGiven = req.body.email;
    const givenPassword = req.body.password;
    const memberData =  await memberLogin(req,res); 
    if (memberData===null){
        const adminData =  await adminLogin(req,res); 
        if (adminData===null){
            console.log("You don't have an account, or you account is not activated yet.")
            const returnTo = req.session.returnTo || '/home'; // Default to home if returnTo is not set
            delete req.session.returnTo; // Clear the returnTo value from session
            return res.redirect(returnTo);
        }
        else {
            const myPassword = adminData[0].password;
            const saltRounds=10;
            const myPasswordHash = bcrypt.hashSync(myPassword, saltRounds);
            const storedSalt = myPasswordHash.slice(0, 29);
            bcrypt.hash(givenPassword, storedSalt, (err, hashedPassword) => {
                if (err) {
                    console.error(err);
                }
                if (hashedPassword === myPasswordHash)  {
                    req.session.adminData = adminData;
                    const returnTo = req.session.returnTo || '/home'; // Default to home if returnTo is not set
                    delete req.session.returnTo; // Clear the returnTo value from session
                    return res.redirect(returnTo);
                } else {
                    console.log("wrong password")
                    const returnTo = req.session.returnTo || '/home'; // Default to home if returnTo is not set
                    delete req.session.returnTo; // Clear the returnTo value from session
                    return res.redirect(returnTo);
                }
            });
        }
    }
    else {
        const myPassword = memberData[0].password;
        const saltRounds=10;
        const myPasswordHash = bcrypt.hashSync(myPassword, saltRounds);
        const storedSalt = myPasswordHash.slice(0, 29);

        bcrypt.hash(givenPassword, storedSalt, (err, hashedPassword) => {
            if (err) {
                // Handle the error
                console.error(err);
            }
            if (hashedPassword === myPasswordHash)  {
                req.session.memberData = memberData;
                const returnTo = req.session.returnTo || '/home'; // Default to home if returnTo is not set
                delete req.session.returnTo; // Clear the returnTo value from session
                return res.redirect(returnTo);
            } else {
                console.log("wrong password")
                const returnTo = req.session.returnTo || '/home'; // Default to home if returnTo is not set
                delete req.session.returnTo; // Clear the returnTo value from session
                return res.redirect(returnTo);
            }
            });
    }  
});

router.get('/logout', (req, res) => {
    const returnTo = req.session.returnTo || '/home'; // Default to home if returnTo is not set
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
    return res.redirect(returnTo);
    });
  });
  

//applying for internal event
router.get('/internalEvents/:intId', internalEventsController.applyInt);

////applying for external event
router.get('/externalEvents/:extId', externalEventsController.applyExt);

//submitting a message
router.post('/contact/message-submitted', contactController.submitMessage);

//applying for membership
router.post('/home/submit-form', homeController.applyForMember);

//admin accepts student applying for membership
router.get('/admin/application-accepted', adminController.newMemberAccepted);


export default router;




