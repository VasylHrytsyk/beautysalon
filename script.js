var language = "ua";
const languageToggle = document.getElementById("language_toggle");
const homeButton = document.getElementById("home_button");
const workButton = document.getElementById("work_button");
const servicesButton = document.getElementById("services_button");
const contactsButton = document.getElementById("contacts_button");
const homefooterButton = document.getElementById("home_button_footer");
const workfooterButton = document.getElementById("work_button_footer");
const servicesfooterButton = document.getElementById("services_button_footer");
const contactsfooterButton = document.getElementById("contacts_button_footer");
const aboutSalon = document.getElementById("about_salon");
const aboutUs = document.getElementById("about_us")
const ourWork = document.getElementById("our_work");
const ourServices = document.getElementById("our_services");
const individialHaircut = document.getElementById("individual_haircut");
const kidsHaircut = document.getElementById("kids_haircut");
const nails = document.getElementById("nails");
const eyelashes = document.getElementById("eyelashes");
const shugaring = document.getElementById("shugaring");
const lamination = document.getElementById("lamination");
const pilling = document.getElementById("pilling");
const permanent_lips = document.getElementById("permanent_lips");
const permanent_brows = document.getElementById("permanent_brows");

function showform() {
    document.getElementById('forma').classList.remove('background');

}


function hideform() {
    document.getElementById('forma').classList.add('background');

}

var uaTexts = { 
    home: "Головна",
    work: "Наші роботи ",
    services: "Послуги",
    contacts: "Контакти",
	homefooter: "Головна",
    workfooter: "Наші роботи ",
    servicesfooter: "Послуги",
    contactsfooter: "Контакти",
    aboutUs: "ПРО НАС",
    aboutSalon: "Салон краси Evi у Львові пропонує повний спектр процедур догляду та працює виключно з професійною косметикою. Бути красивою та доглянутою - це мрія кожної жінки. Наші спеціалісти докладуть усіх зусиль, щоб здивувати вас. Ми також єдиний салон на вулиці Володимира Великого, де персонал розмовляє англійською. Ми знаємо секрет, як підкреслити вашу природну привабливість і уповільнити плин часу. У нашому салоні краси завжди по-домашньому затишна і доброзичлива атмосфера, увага і турбота про кожного клієнта. Це те місце, куди вам захочеться повернутися знову і знову. ",
    ourWork: "Наші роботи",
    ourServices: "Наші послуги:",
    individialHaircut: "Індивідуальні жіночі та чоловічі стрижки 300 грн",
    kidsHaircut: "Дитячі стрижки 200 грн",
    nails: "Послуги майстра манікюру від 300 грн",
    eyelashes: "Нарощення вій від 450 грн",
    shugaring: "Шугарінг від 550 грн",
    lamination: "Ламінування та фарбування вій 250 грн",
    pilling: "Пілінг шкіри голови 700 грн",
    permanent_lips: "Перманент губ 2000 грн",
    permanent_brows: "Перманент брів 2500 грн",
    
    
};

var enTexts = { 
    home: "Home",
    work: "Our Work",
    services: "Services",
    contacts: "Contacts",
    homefooter: "Home",
    workfooter: "Our Work",
    servicesfooter: "Services",
    contactsfooter: "Contacts",
    aboutUs: "ABOUT US",
    aboutSalon: "Beauty Salon Evi in Lviv offers a full range of care procedures and works exclusively with professional cosmetics. To be beauttul and well- groomed is every woman's dream Our specialsts will make every effort to surprise you with the result. We are also the only salon on Volodymyra Velykogo street where staff speak English. Also we have friendly atmpthphere and pesonal approrach to each client.",
    ourWork: "Our Work",
    ourServices: "Our Services:",
    individialHaircut: "Individial women and man haircuts 300 UAH",
    kidsHaircut: "Kids Haircut 200 UAH",
    nails: "Nails master services from 300 UAH",
    eyelashes: "Eyelash extension from 450 UAH",
    shugaring: "Wax depilation from 550 UAH",
    lamination: "Lamination and colouring of eyelashes  250 UAH",
    pilling: "Scalp peeling 700 UAH",
    permanent_lips: "Permanent lips 2000 UAH",
    permanent_brows: "Permanent eyebrows 2500 UAH",
   
};





function switchLanguage() {
    console.log(languageToggle);
  if (language === "ua") {
      console.log(language);
      languageToggle.innerHTML = "Ukrainian";
      homeButton.innerHTML = enTexts.home;
      workButton.innerHTML = enTexts.work;
      servicesButton.innerHTML = enTexts.services;
      contactsButton.innerHTML = enTexts.contacts;
	  homefooterButton.innerHTML = enTexts.homefooter;
      workfooterButton.innerHTML = enTexts.workfooter;
      servicesfooterButton.innerHTML = enTexts.servicesfooter;
      contactsfooterButton.innerHTML = enTexts.contactsfooter;
      aboutUs.innerHTML = enTexts.aboutUs;
      aboutSalon.innerHTML = enTexts.aboutSalon;
      ourWork.innerHTML = enTexts.ourWork;
      ourServices.innerHTML = enTexts.ourServices;
      individialHaircut.innerHTML = enTexts.individialHaircut;
      kidsHaircut.innerHTML = enTexts.kidsHaircut;
      nails.innerHTML = enTexts.nails;
      eyelashes.innerHTML = enTexts.eyelashes;
      shugaring.innerHTML = enTexts.shugaring;
      lamination.innerHTML = enTexts.lamination;
      pilling.innerHTML = enTexts.pilling;
      permanent_lips.innerHTML = enTexts.permanent_lips;
      permanent_brows.innerHTML = enTexts.permanent_brows;

   
          language = "en";


 } else {
      console.log(language);
    
    languageToggle.innerHTML = "English";
      homeButton.innerHTML = uaTexts.home;
      workButton.innerHTML = uaTexts.work;
      servicesButton.innerHTML = uaTexts.services;
      contactsButton.innerHTML = uaTexts.contacts;
	  homefooterButton.innerHTML = uaTexts.home;
      workfooterButton.innerHTML = uaTexts.work;
      servicesfooterButton.innerHTML = uaTexts.services;
      contactsfooterButton.innerHTML = uaTexts.contacts;
      aboutUs.innerHTML = uaTexts.aboutUs;
      aboutSalon.innerHTML = uaTexts.aboutSalon;
      ourWork.innerHTML = uaTexts.ourWork;
      ourServices.innerHTML = uaTexts.ourServices;
      individialHaircut.innerHTML = uaTexts.individialHaircut;
      kidsHaircut.innerHTML = uaTexts.kidsHaircut;
      nails.innerHTML = uaTexts.nails;
      eyelashes.innerHTML = uaTexts.eyelashes;
      shugaring.innerHTML = uaTexts.shugaring;
      lamination.innerHTML = uaTexts.lamination;
      pilling.innerHTML = uaTexts.pilling;
      permanent_lips.innerHTML = uaTexts.permanent_lips;
      permanent_brows.innerHTML = uaTexts.permanent_brows;
     language = "ua";

 }
 
 


}