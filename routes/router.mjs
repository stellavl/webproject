import express from 'express'
import bcrypt from "bcrypt";

const router = express.Router()

const homeController = await import(`../controller/home.mjs`);
const contactController = await import(`../controller/contact.mjs`)
const externalEventsController = await import(`../controller/externalEvents.mjs`)
const internalEventsController = await import(`../controller/internalEvents.mjs`)

import { externalEvents } from '../controller/externalEvents.mjs';
import { internalEvents } from '../controller/internalEvents.mjs';
import { members, universities } from '../controller/home.mjs';
import { memberApplicants, studentMessages } from '../controller/admin.mjs';
import { checkAuthenticated } from '../controller/login.mjs';
import { memberLogin } from '../controller/login.mjs';

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
            loggedIn: req.session.authenticatedEmail,
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

//for POST requests
router.use(express.urlencoded({extended: true}));

router.post('/do-login', async(req, res) => {
    const emailGiven = req.body.email;
    const givenPassword = req.body.password;
    if (emailGiven===''||givenPassword===''){
        console.log("Missing Credentials")
        return res.redirect('/home');  
    }
    else{
        const memberData =  await memberLogin(req,res); 
        if (memberData===null){
            console.log("email not in database")
            return res.redirect('/home');  
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
                    req.session.authenticatedEmail = emailGiven;
                    return res.redirect('/profile');
                } else {
                    console.log("wrong password")
                    return res.redirect('/home');
                }
             });
        }
    }
    
});

//applying for internal event
router.get('/internalEvents/:intId', internalEventsController.applyInt);

////applying for external event
router.get('/externalEvents/:extId', externalEventsController.applyExt);

//submitting a message
router.get('/contact/message-submitted', contactController.submitMessage);

//applying for membership
router.get('/home/submit-form', homeController.applyForMember);

export default router;



/* random αποτυχημενο παραδειγμα
router.post('/home/submit-form', (req, res) => {
    homeController.applyForMember(req, res); // Call the applyForMember function with req and res
 });
 */
