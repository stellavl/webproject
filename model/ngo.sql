BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS "Message" (
	"id"	INTEGER NOT NULL UNIQUE,
	"description"	VARCHAR,
	"student_email"	VARCHAR,
	"date"	DATETIME,
	PRIMARY KEY("id"),
	FOREIGN KEY("student_email") REFERENCES "Student"("email")
);
CREATE TABLE IF NOT EXISTS "Admin" (
	"email"	VARCHAR NOT NULL UNIQUE,
	"password"	VARCHAR NOT NULL,
	PRIMARY KEY("email")
);
CREATE TABLE IF NOT EXISTS "Student" (
	"email"	VARCHAR NOT NULL UNIQUE,
	"first_name"	VARCHAR NOT NULL,
	"last_name"	VARCHAR NOT NULL,
	"phone"	INTEGER NOT NULL,
	"university"	VARCHAR NOT NULL,
	"department"	VARCHAR NOT NULL,
	PRIMARY KEY("email")
);
CREATE TABLE IF NOT EXISTS "Member" (
	"email"	VARCHAR UNIQUE,
	"password"	VARCHAR(12),
	"registration_date"	DATE,
	"active"	BOOLEAN DEFAULT 'TRUE',
	"first_name"	VARCHAR,
	"last_name"	VARCHAR,
	"phone"	INTEGER,
	"university"	VARCHAR,
	"department"	VARCHAR,
	PRIMARY KEY("email"),
	FOREIGN KEY("email") REFERENCES "Student"("email")
);
CREATE TABLE IF NOT EXISTS "Event" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR NOT NULL,
	"place"	VARCHAR,
	"start_date"	DATETIME,
	"end_date"	DATETIME,
	"description"	VARCHAR,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "Internal_Event" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR,
	"place"	VARCHAR,
	"start_date"	DATETIME,
	"end_date"	DATETIME,
	"description"	VARCHAR,
	PRIMARY KEY("id"),
	FOREIGN KEY("id") REFERENCES "Event"("id")
);
CREATE TABLE IF NOT EXISTS "External_Event" (
	"id"	INTEGER NOT NULL,
	"name"	VARCHAR NOT NULL,
	"place"	VARCHAR,
	"start_date"	DATETIME,
	"end_date"	DATETIME,
	"description"	VARCHAR,
	PRIMARY KEY("id"),
	FOREIGN KEY("id") REFERENCES "Event"("id")
);
CREATE TABLE IF NOT EXISTS "student-event" (
	"student_email"	VARCHAR,
	"event_id"	INTEGER,
	PRIMARY KEY("student_email","event_id"),
	FOREIGN KEY("student_email") REFERENCES "Student"("email"),
	FOREIGN KEY("event_id") REFERENCES "Event"("id")
);
CREATE TABLE IF NOT EXISTS "member-internal_event" (
	"member_email"	VARCHAR,
	"internal_event_id"	INTEGER,
	PRIMARY KEY("member_email","internal_event_id"),
	FOREIGN KEY("member_email") REFERENCES "Member"("email"),
	FOREIGN KEY("internal_event_id") REFERENCES "Internal_Event"("id")
);
INSERT INTO "Message" ("id","description","student_email","date") VALUES (1,'Hello there! I came across your NGO''s website and I''m curious to learn more about your organization''s mission and how I can get involved. Could you provide me with some details? Thanks!','spurkess1d@mayoclinic.com','03/05/2022');
INSERT INTO "Message" ("id","description","student_email","date") VALUES (2,'Hi! I''m a student interested in volunteering for a cause. Are there any upcoming opportunities or projects where I can contribute my time and skills? Looking forward to hearing from you!','gmiroyp@flavors.me','22/04/2023');
INSERT INTO "Message" ("id","description","student_email","date") VALUES (3,'Greetings! I have a question regarding the events organized by your NGO. Are these open to the public, or are they exclusive to members? I''d appreciate any information you can provide. Thank you!','shousams@army.mil','03/04/2023');
INSERT INTO "Message" ("id","description","student_email","date") VALUES (4,'Hi there! I noticed your NGO focuses on education. I''m passionate about empowering youth through education as well. Do you have any initiatives or programs specifically geared towards educational development? I''d love to know more!','tteasert@skyrock.com','19/05/2023');
INSERT INTO "Message" ("id","description","student_email","date") VALUES (5,'Hi! Are the applications for the Motivational Weekend still open?','ltwohigu@lycos.com','12/05/2023');
INSERT INTO "Message" ("id","description","student_email","date") VALUES (6,'Hello! I represent ESTIEM, a european NGO. Would you be interested in a collab? Contact me for scheduling a meeting!','ccownden@estiem.net','20/05/2023');
INSERT INTO "Admin" ("email","password") VALUES ('admin@sdo.com','1234');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('jfrankland0@admin.ch','Ophélie','Frankland',6920473347,'NTUA','Computer Science');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('smurkin1@vimeo.com','Andréa','Murkin',6914346949,'UoP','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('hfontel2@smh.com.au','Marylène','Fontel',6987040215,'UTh','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('erowlson3@wp.com','Andréanne','Rowlson',6982053152,'UoP','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('ccharke4@columbia.edu','Laurène','Charke',6943487605,'TUC','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('wrudeforth5@hostgator.com','Adélaïde','Rudeforth',6968696248,'NTUA','Mathematics');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('lhudson6@amazon.com','Cléa','Hudson',6916354380,'AUTh','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('atobin7@marketwatch.com','Crééz','Tobin',6943714282,'UoP','Mechanical Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('jlindmark8@msn.com','Méryl','Lindmark',6930644257,'UoP','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('itoyer9@live.com','Maëline','Toyer',6942997564,'TUC','Chemical Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('ksmeetha@myspace.com','Géraldine','Smeeth',6905866016,'UTh','Computer Science');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('bwoodfordb@cornell.edu','Gösta','Woodford',6929081668,'UoP','Civil Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('cdelunac@ftc.gov','Léane','De Luna',6989751826,'TUC','Mathematics');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('abarkd@businessweek.com','Yè','Bark',6931381041,'UoP','Chemical Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('grumbelowe@blogtalkradio.com','Joséphine','Rumbelow',6966371886,'NTUA','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('dpalmarf@ustream.tv','Stéphanie','Palmar',6919430671,'NTUA','CEID');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('gcorringtong@merriam-webster.com','Miléna','Corrington',6969532632,'TUC','CEID');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('bmoteh@army.mil','Maï','Mote',6957850969,'UoP','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('raughtoni@exblog.jp','Néhémie','Aughton',6944581029,'NTUA','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('hhampshawj@behance.net','Renée','Hampshaw',6917558643,'UoP','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('tdeeringk@clickbank.net','Simplifiés','Deering',6956698337,'TUC','Chemistry');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('eshovelinl@dot.gov','Mélissandre','Shovelin',6901639654,'NTUA','Mechanical Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('mhounsonm@altervista.org','Estée','Hounson',6932327965,'UoP','Mathematics');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('dgrigorushkinn@cpanel.net','Laurène','Grigorushkin',6935427085,'UoP','Mathematics');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('hgeorgeso@xing.com','Inès','Georges',6973633441,'UoP','Civil Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('gmiroyp@flavors.me','Pål','Miroy',6983606248,'UoP','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('klemmertzq@clickbank.net','Mégane','Lemmertz',6954364506,'NTUA','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('ebreitr@intel.com','Börje','Breit',6955301977,'NTUA','Chemistry');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('shousams@army.mil','Géraldine','Housam',6955471264,'UoP','Mechanical Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('tteasert@skyrock.com','Sòng','Teaser',6985526618,'NTUA','Computer Science');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('ltwohigu@lycos.com','Ruì','Twohig',6980830504,'AUTh','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('gcadanyv@dailymotion.com','Eléa','Cadany',6975704272,'AUTh','Chemical Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('fhearsumw@google.co.jp','Uò','Hearsum',6962129979,'UoP','Physics');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('cbrealeyx@behance.net','Bécassine','Brealey',6930790742,'UoP','Mathematics');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('phobley@ihg.com','Eloïse','Hoble',6951120766,'UoP','Computer Science');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('ashilstonez@illinois.edu','Åsa','Shilstone',6969593042,'NTUA','CEID');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('kstandbrooke10@surveymonkey.com','Maïlys','Standbrooke',6965833351,'AUTh','CEID');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('wtwelvetrees11@sun.com','Angélique','Twelvetrees',6967520379,'TUC','Computer Science');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('gsheryne12@dell.com','Fèi','Sheryne',6981274509,'UoP','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('bcombes13@sohu.com','Måns','Combes',6973139201,'UoP','CEID');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('pdunbobin14@yahoo.co.jp','Léana','Dunbobin',6981108233,'NTUA','Physics');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('deckersley15@over-blog.com','Céline','Eckersley',6988746813,'AUTh','Mechanical Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('fgierck16@free.fr','Yóu','Gierck',6903879074,'UoP','Mathematics');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('dbosket17@cdbaby.com','Mélodie','Bosket',6965328477,'AUTh','Computer Science');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('kdysart18@yelp.com','Anaé','Dysart',6927647034,'NTUA','Electrical & Computer Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('ahuelin19@spiegel.de','Annotée','Huelin',6964865527,'UoP','Mathematics');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('ccownden@estiem.net','Clélia','Cownden',6972065795,'TUC','Civil Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('gmacmearty1b@facebook.com','Mégane','MacMearty',6906277740,'AUTh','Mathematics');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('dcroisdall1c@twitpic.com','Andréa','Croisdall',6972792981,'UoP','Chemical Engineering');
INSERT INTO "Student" ("email","first_name","last_name","phone","university","department") VALUES ('spurkess1d@mayoclinic.com','Joséphine','Purkess',6939122631,'NTUA','Chemical Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('jfrankland0@admin.ch','qKJpg8f0r','02/11/2020','TRUE','Ophélie','Frankland',6920473347,'NTUA','Computer Science');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('smurkin1@vimeo.com','KM3KRcSXE3','02/12/2021','TRUE','Andréa','Murkin',6914346949,'UoP','Electrical & Computer Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('hfontel2@smh.com.au','RswrFcWf','03/04/2023','TRUE','Marylène','Fontel',6987040215,'UTh','Electrical & Computer Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('erowlson3@wp.com','PBwVdV8YLbKL','04/05/2020','TRUE','Andréanne','Rowlson',6982053152,'UoP','Electrical & Computer Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('ccharke4@columbia.edu','kmiLokMM1','04/04/2022','TRUE','Laurène','Charke',6943487605,'TUC','Electrical & Computer Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('wrudeforth5@hostgator.com','3GAkrL','04/12/2020','TRUE','Adélaïde','Rudeforth',6968696248,'NTUA','Mathematics');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('lhudson6@amazon.com','yi16VxxdlV4','09/02/2020','TRUE','Cléa','Hudson',6916354380,'AUTh','Electrical & Computer Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('atobin7@marketwatch.com','KN60ugn9EySn','09/12/2021','TRUE','Crééz','Tobin',6943714282,'UoP','Mechanical Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('jlindmark8@msn.com','M3b7Inb8','11/04/2021','TRUE','Méryl','Lindmark',6930644257,'UoP','Electrical & Computer Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('itoyer9@live.com','7nzdMq2o2E','13/04/2022','TRUE','Maëline','Toyer',6942997564,'TUC','Chemical Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('ksmeetha@myspace.com','XIveHf','18/03/2023','TRUE','Géraldine','Smeeth',6905866016,'UTh','Computer Science');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('bwoodfordb@cornell.edu','0vni050aGsBh','20/08/2022','TRUE','Gösta','Woodford',6929081668,'UoP','Civil Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('cdelunac@ftc.gov','SlCKAKdmiWQe','21/04/2020','TRUE','Léane','De Luna',6989751826,'TUC','Mathematics');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('abarkd@businessweek.com','1R7PwZNRQNGn','23/01/2019','TRUE','Yè','Bark',6931381041,'UoP','Chemical Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('grumbelowe@blogtalkradio.com','Z727jzAw','23/02/2019','TRUE','Joséphine','Rumbelow',6966371886,'NTUA','Electrical & Computer Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('dpalmarf@ustream.tv','1gZF03','23/08/2019','TRUE','Stéphanie','Palmar',6919430671,'NTUA','CEID');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('gcorringtong@merriam-webster.com','9B03ePG1QT','27/01/2022','TRUE','Miléna','Corrington',6969532632,'TUC','CEID');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('bmoteh@army.mil','fpSmNxObv','28/04/2023','TRUE','Maï','Mote',6957850969,'UoP','Electrical & Computer Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('raughtoni@exblog.jp','yP7IeTnVr','28/05/2019','TRUE','Néhémie','Aughton',6944581029,'NTUA','Electrical & Computer Engineering');
INSERT INTO "Member" ("email","password","registration_date","active","first_name","last_name","phone","university","department") VALUES ('hhampshawj@behance.net','1F2RzzugjXF','29/06/2019','TRUE','Renée','Hampshaw',6917558643,'UoP','Electrical & Computer Engineering');
INSERT INTO "Event" ("id","name","place","start_date","end_date","description") VALUES (1,'MW 2k22','Patras','20/08/2022','27/08/2022','Are you ready to embrace the unknown and make the most out of an extraordinary MW? Pack your sense of adventure and join us for a weekend that promises surprises, laughter, and an unforgettable journey into the unknown!');
INSERT INTO "Event" ("id","name","place","start_date","end_date","description") VALUES (2,'Annual Career Day','Athens','19/02/2021','20/02/2021','✨ Your dream job is only one step away!

🗣 Calling all college students who wish to kickstart their career journey! Mark your calendars for our highly anticipated Annual Career Day on 19-20 February, an event designed exclusively for you! Get ready to unlock a world of endless possibilities and explore a multitude of career paths. 

👀 Whether you''re seeking internships, networking opportunities, or valuable insights from industry professionals, this event has got you covered. Prepare to connect with top companies, engage in interactive workshops, and gain valuable advice from successful professionals who have paved their way to success. Don''t miss out!
');
INSERT INTO "Event" ("id","name","place","start_date","end_date","description") VALUES (3,'May Monthly Meetup','Patras','30/05/2023','31/05/2023','🗓 Mark your calendars, for this May Monthly Meetup is destined to be a sensational rendezvous that will leave you spellbound! On May 30, we have prepared an extraordinary gathering filled with joy and unforgettable memories. ✨

🤗 Embrace the vibrant spirit of togetherness as we embark on a magical journey of fun and bonding, full of activities designed to spark laughter and forge lifelong friendships. From thrilling team challenges and captivating performances to interactive workshops, our event promises an immersive experience like no other! 🔥');
INSERT INTO "Event" ("id","name","place","start_date","end_date","description") VALUES (4,'Paintball Tournament','Patras','03/06/2023','04/06/2023','🗣 Calling all adrenaline junkies and thrill-seekers! Brace yourselves for an exhilarating showdown at our upcoming Paintball Tournament on June 3rd. It''s time to gear up, lock and load, and dive into the heart-pounding action of this epic battle. Unleash your strategic prowess, hone your teamwork skills and experience the ultimate rush of paintball warfare!

Whether you''re a seasoned pro or a first-time player, this tournament promises an adrenaline-fueled adventure like no other. Prepare for intense battles, tactical maneuvers, and heart-stopping moments as you navigate through immersive battlegrounds. So rally your squad, bring your A-game, and join us for a pulse-pounding showdown that will leave you breathless and craving more!

Are you up for the challenge? Secure your spot today and let the paintball madness begin! 🔥');
INSERT INTO "Event" ("id","name","place","start_date","end_date","description") VALUES (5,'Board Games Night','Athens','15/06/2023','15/06/2023','🎲 Dust off your top hats, roll the dice, and get ready to embark on a thrilling journey at our Board Games Night meetup on June 15th!

It''s time to gather ''round the table and experience the timeless classic, Monopoly, along with a plethora of other exciting games. From building an empire on Park Place to negotiating epic deals on Boardwalk, Monopoly will transport you to a world where fortunes are made and rivalries are forged.

But that''s not all! Our collection boasts a treasure trove of other engaging board games. Whether you prefer brain-teasing puzzles, nail-biting strategy, or just a casual night of laughs, we''ve got something for everyone.

So bring your game face, unleash your competitive spirit and prepare for an evening of friendly rivalry, laughter, and unforgettable moments! 🥰');
INSERT INTO "Event" ("id","name","place","start_date","end_date","description") VALUES (6,'Wine Tasting Day','Volos','03/07/2023','03/07/2023','🍷 Indulge your senses in an evening of refined elegance and exquisite flavors at our Wine Tasting Night. Join us on a journey through the vineyards on July 03. Savor the rich aromas and delicate notes as you sample a carefully curated selection of wines from around the world.

💭 From crisp whites to full-bodied reds, each pour tells a unique story that will transport you to the picturesque landscapes where the grapes were grown! Our expert sommeliers will guide you through the nuances of each wine, sharing their knowledge and passion for the art of winemaking.

🥂 So raise your glass, mingle with fellow wine enthusiasts and let the velvety textures and flavors dance on your palate. Unwind, relax, and let the magic of the vineyards transport you to a world of taste and sophistication.');
INSERT INTO "Event" ("id","name","place","start_date","end_date","description") VALUES (7,'Motivational Weekend','Patras','20/07/2023','28/07/2023','Embark on an extraordinary adventure filled with fun, connection, and personal growth at our Motivational Weekend (MW)! Join us for three unforgettable days in a secret location where you''ll bond with fellow students, discover new passions, and create lifelong memories. Experience thrilling challenges, uplifting workshops, and inspiring talks from renowned speakers. Step outside your comfort zone and embrace a weekend that will leave you motivated, inspired, and ready to conquer the world! Don''t miss out on this transformative experience. Join us at MW and unlock your full potential!');
INSERT INTO "Event" ("id","name","place","start_date","end_date","description") VALUES (8,'AI Intro','Patras','05/09/2023','05/09/2023','📢 Calling all STEM students! 🚀 Join us for an enlightening journey into the world of Artificial Intelligence at our highly anticipated seminar, AI Intro! 🤖🌐 Explore the cutting-edge advancements and transformative potential of AI in various industries. 🌟 From machine learning to neural networks, our experts will provide a comprehensive overview and share real-world applications of this rapidly evolving field. 📚💡 Don''t miss this incredible opportunity to expand your knowledge and be part of the AI revolution. Limited spots available, so secure your place today! 🎓🔬 #AIIntro #STEMStudents #UnlockTheFuture');
INSERT INTO "Event" ("id","name","place","start_date","end_date","description") VALUES (9,'Virtual Reality Seminar','Thessaloniki','02/10/2023','04/10/2023','📢 Attention all tech enthusiasts and virtual reality enthusiasts! 🌟 Immerse yourself in a mind-bending experience at our much-awaited Virtual Reality Seminar! 🎮🌐 Discover the incredible possibilities of VR technology and its impact on various industries. From gaming and entertainment to healthcare and education, VR is revolutionizing the way we interact with the world. 🚀🔥 Join us as experts unravel the secrets behind creating immersive virtual environments and share insights on the future of this groundbreaking technology. Don''t miss this chance to dive into a virtual world of endless possibilities. Limited spots available, so secure your place now! 📚💻 #VirtualRealitySeminar #TechEnthusiasts #UnlockTheVirtualWorld');
INSERT INTO "Event" ("id","name","place","start_date","end_date","description") VALUES (10,'Visit Planetarium','Athens','29/06/2023','29/06/2023','Attention all space enthusiasts! 🌌✨ Embark on an awe-inspiring excursion to the mesmerizing world of stars and galaxies at our upcoming Planetarium Visit! 🚀🔭 Immerse yourself in a captivating journey through the cosmos as we explore the wonders of our universe. Witness breathtaking celestial displays, learn about the mysteries of distant planets, and unravel the secrets of deep space. 🌠🪐 This educational and unforgettable experience will ignite your curiosity and leave you with a newfound appreciation for the vastness of the cosmos. Don''t miss this chance to embark on a stellar adventure! Limited spots available, so secure your place now and get ready for an out-of-this-world exploration! 🌟🌍 #PlanetariumVisit #SpaceEnthusiasts #JourneyThroughTheCosmos');
INSERT INTO "Internal_Event" ("id","name","place","start_date","end_date","description") VALUES (1,'MW 2k22','Patras','20/08/2022','27/08/2022','Are you ready to embrace the unknown and make the most out of an extraordinary MW? Pack your sense of adventure and join us for a weekend that promises surprises, laughter, and an unforgettable journey into the unknown!');
INSERT INTO "Internal_Event" ("id","name","place","start_date","end_date","description") VALUES (3,'May Monthly Meetup','Patras','30/05/2023','31/05/2023','🗓 Mark your calendars, for this May Monthly Meetup is destined to be a sensational rendezvous that will leave you spellbound! On May 30, we have prepared an extraordinary gathering filled with joy and unforgettable memories. ✨

🤗 Embrace the vibrant spirit of togetherness as we embark on a magical journey of fun and bonding, full of activities designed to spark laughter and forge lifelong friendships. From thrilling team challenges and captivating performances to interactive workshops, our event promises an immersive experience like no other! 🔥');
INSERT INTO "Internal_Event" ("id","name","place","start_date","end_date","description") VALUES (4,'Paintball Tournament','Patras','03/06/2023','04/06/2023','🗣 Calling all adrenaline junkies and thrill-seekers! Brace yourselves for an exhilarating showdown at our upcoming Paintball Tournament on June 3rd. It''s time to gear up, lock and load, and dive into the heart-pounding action of this epic battle. Unleash your strategic prowess, hone your teamwork skills and experience the ultimate rush of paintball warfare!

Whether you''re a seasoned pro or a first-time player, this tournament promises an adrenaline-fueled adventure like no other. Prepare for intense battles, tactical maneuvers, and heart-stopping moments as you navigate through immersive battlegrounds. So rally your squad, bring your A-game, and join us for a pulse-pounding showdown that will leave you breathless and craving more!

Are you up for the challenge? Secure your spot today and let the paintball madness begin! 🔥');
INSERT INTO "Internal_Event" ("id","name","place","start_date","end_date","description") VALUES (5,'Board Games Night','Athens','15/06/2023','15/06/2023','🎲 Dust off your top hats, roll the dice, and get ready to embark on a thrilling journey at our Board Games Night meetup on June 15th!

It''s time to gather ''round the table and experience the timeless classic, Monopoly, along with a plethora of other exciting games. From building an empire on Park Place to negotiating epic deals on Boardwalk, Monopoly will transport you to a world where fortunes are made and rivalries are forged.

But that''s not all! Our collection boasts a treasure trove of other engaging board games. Whether you prefer brain-teasing puzzles, nail-biting strategy, or just a casual night of laughs, we''ve got something for everyone.

So bring your game face, unleash your competitive spirit and prepare for an evening of friendly rivalry, laughter, and unforgettable moments! 🥰');
INSERT INTO "Internal_Event" ("id","name","place","start_date","end_date","description") VALUES (6,'Wine Tasting Day','Volos','03/07/2023','03/07/2023','🍷 Indulge your senses in an evening of refined elegance and exquisite flavors at our Wine Tasting Night. Join us on a journey through the vineyards on July 03. Savor the rich aromas and delicate notes as you sample a carefully curated selection of wines from around the world.

💭 From crisp whites to full-bodied reds, each pour tells a unique story that will transport you to the picturesque landscapes where the grapes were grown! Our expert sommeliers will guide you through the nuances of each wine, sharing their knowledge and passion for the art of winemaking.

🥂 So raise your glass, mingle with fellow wine enthusiasts and let the velvety textures and flavors dance on your palate. Unwind, relax, and let the magic of the vineyards transport you to a world of taste and sophistication.');
INSERT INTO "External_Event" ("id","name","place","start_date","end_date","description") VALUES (2,'Annual Career Day','Athens','19/02/2021','20/02/2021','✨ Your dream job is only one step away!

🗣 Calling all college students who wish to kickstart their career journey! Mark your calendars for our highly anticipated Annual Career Day on 19-20 February, an event designed exclusively for you! Get ready to unlock a world of endless possibilities and explore a multitude of career paths. 

👀 Whether you''re seeking internships, networking opportunities, or valuable insights from industry professionals, this event has got you covered. Prepare to connect with top companies, engage in interactive workshops, and gain valuable advice from successful professionals who have paved their way to success. Don''t miss out!
');
INSERT INTO "External_Event" ("id","name","place","start_date","end_date","description") VALUES (7,'Motivational Weekend','Patras','20/07/2023','28/07/2023','🪄 Embark on an extraordinary adventure filled with fun, connection, and personal growth at our Motivational Weekend!

Join us on 20-28 July for 8 unforgettable days in a secret location where you''ll bond with fellow students, discover new passions, and create lifelong memories. Experience thrilling challenges, uplifting workshops, and inspiring talks from renowned speakers. Step outside your comfort zone and embrace a weekend that will leave you motivated, inspired, and ready to conquer the world!✨

🆘 Don''t miss out on this transformative experience. Join us and unlock your full potential!');
INSERT INTO "External_Event" ("id","name","place","start_date","end_date","description") VALUES (8,'AI Intro','Patras','05/09/2023','05/09/2023','📢 Calling all STEM students! 🚀

Join us on 05 of September for an enlightening journey into the world ofArtificial Intelligence at our highly anticipated seminar, AI Intro! 🤖🌐 Explore the cutting-edge advancements and transformative potential of AI in various industries. 🌟 From machine learning to neural networks, our experts will provide a comprehensive overview and share real-world applications of this rapidly evolving field.

📚💡 Don''t miss this incredible opportunity to expand your knowledge and be part of the AI revolution.Limited spots available, so secure your place today! 🎓🔬 #AIIntro #STEMStudents #UnlockTheFuture');
INSERT INTO "External_Event" ("id","name","place","start_date","end_date","description") VALUES (9,'Virtual Reality Seminar','Thessaloniki','02/10/2023','04/10/2023','📢 Attention all tech enthusiasts 🌟 Immerse yourself in a mind-bending experience at our much-awaited Virtual Reality Seminar on 02 to 04 of October!

🎮🌐 Discover the incredible possibilities of VR technology and its impact on various industries. From gaming and entertainment to healthcare and education, VR is revolutionizing the way we interact with the world.

🚀🔥 Join us as experts unravel the secrets behind creating immersive virtual environments and share insights on the future of this groundbreaking technology. Don''t miss this chance to dive into a virtual world of endless possibilities. Limited spots available, so secure your place now! 📚💻 #VirtualRealitySeminar #TechEnthusiasts #UnlockTheVirtualWorld');
INSERT INTO "External_Event" ("id","name","place","start_date","end_date","description") VALUES (10,'Visit Planetarium','Athens','29/06/2023','29/06/2023','Attention all space enthusiasts! 🌌✨ Embark on an awe-inspiring excursion to the mesmerizing world of stars and galaxies at our upcoming Planetarium Visit on June 29! 🔭

Immerse yourself in a captivating journey through the cosmos as we explore the wonders of our universe. Witness breathtaking celestial displays, learn about the mysteries of distant planets, and unravel the secrets of deep space 🚀.

🌠🪐 This educational and unforgettable experience will ignite your curiosity and leave you with a newfound appreciation for the vastness of the cosmos. Don''t miss this chance to embark on a stellar adventure! 🌟🌍

#PlanetariumVisit #SpaceEnthusiasts #JourneyThroughTheCosmos');
INSERT INTO "student-event" ("student_email","event_id") VALUES ('bcombes13@sohu.com',10);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('pdunbobin14@yahoo.co.jp',10);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('deckersley15@over-blog.com',10);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('fgierck16@free.fr',8);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('dbosket17@cdbaby.com',8);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('kdysart18@yelp.com',7);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('ahuelin19@spiegel.de',8);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('ccownden@estiem.net',9);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('gmacmearty1b@facebook.com',9);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('dcroisdall1c@twitpic.com',9);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('spurkess1d@mayoclinic.com',9);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('grumbelowe@blogtalkradio.com',10);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('dpalmarf@ustream.tv',10);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('gcorringtong@merriam-webster.com',8);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('bmoteh@army.mil',8);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('raughtoni@exblog.jp',8);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('hhampshawj@behance.net',8);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('grumbelowe@blogtalkradio.com',8);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('dpalmarf@ustream.tv',9);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('gcorringtong@merriam-webster.com',10);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('jfrankland0@admin.ch',2);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('dpalmarf@ustream.tv',2);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('hhampshawj@behance.net',2);
INSERT INTO "student-event" ("student_email","event_id") VALUES ('raughtoni@exblog.jp',2);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('wrudeforth5@hostgator.com',4);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('smurkin1@vimeo.com',4);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('dpalmarf@ustream.tv',6);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('itoyer9@live.com',4);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('bwoodfordb@cornell.edu',6);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('jlindmark8@msn.com',4);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('bmoteh@army.mil',3);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('cdelunac@ftc.gov',6);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('grumbelowe@blogtalkradio.com',6);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('erowlson3@wp.com',6);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('lhudson6@amazon.com',4);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('ccharke4@columbia.edu',6);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('gcorringtong@merriam-webster.com',6);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('hfontel2@smh.com.au',6);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('jfrankland0@admin.ch',4);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('abarkd@businessweek.com',3);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('ksmeetha@myspace.com',4);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('atobin7@marketwatch.com',3);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('ccharke4@columbia.edu',1);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('cdelunac@ftc.gov',1);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('dpalmarf@ustream.tv',1);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('ksmeetha@myspace.com',5);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('itoyer9@live.com',5);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('jlindmark8@msn.com',5);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('atobin7@marketwatch.com',5);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('lhudson6@amazon.com',5);
INSERT INTO "member-internal_event" ("member_email","internal_event_id") VALUES ('wrudeforth5@hostgator.com',5);
COMMIT;
