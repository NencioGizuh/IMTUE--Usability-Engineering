window.onload = function()
{
    //Eerste keuzes die je maakt tussen mobiel en sim-only
    var chosingPage = document.getElementById("chosingPage");
    var confirmOrder = document.getElementById("confirmOrder");
    var orderButton = document.getElementById("orderButton");
    var phoneKeuze = document.getElementById("phoneKeuze");
    var simonlykeuze = document.getElementById("simonlyKeuze");
    //Tweede keuzes waaruit je een keuze maakt van mobieltjes
    var IphoneXR = document.getElementById("IphoneXR");
    var IphoneXS = document.getElementById("IphoneXS");
    var HuaweiP9 = document.getElementById("HuaweiP9");
    var SamsungGalaxyNote9 = document.getElementById("SamsungGalaxyNote9");
    var SamsungGalaxyS9 = document.getElementById("SamsungGalaxyS9");
    var LGV40ThinQ = document.getElementById("LGV40ThinQ");
    var SamsungGalaxyA7 = document.getElementById("SamsungGalaxyA7");
    var SamsungGalaxyJ4Plus = document.getElementById("SamsungGalaxyJ4Plus");
    //Derde keuze waaruit je een keuze maakt van bundels
    var smallBundle = document.getElementById("smallBundle");
    var mediumBundle = document.getElementById("mediumBundle");
    var unlimitedBundle = document.getElementById("unlimitedBundle");
    var smallBundlePhoto = document.getElementById("smallBundlePhoto");
    var mediumBundlePhoto = document.getElementById("mediumBundlePhoto");
    var unlimitedBundlePhoto = document.getElementById("unlimitedBundlePhoto");
    var on = 'Afbeeldingen/Icons/phone-icon-02.png';
    var off = 'Afbeeldingen/Icons/phone-icon-01.png';
    var state = false;
    var aan = 'Afbeeldingen/Icons/simonly-icon-02.png';
    var uit = 'Afbeeldingen/Icons/simonly-icon-01.png';
    var status = false;
    var smallBundleBlack = 'Afbeeldingen/Icons/bundle-01.png';
    var smallBundleYellow = 'Afbeeldingen/Icons/bundle-04.png';
    var mediumBundleBlack = 'Afbeeldingen/Icons/bundle-02.png';
    var mediumBundleYellow = 'Afbeeldingen/Icons/bundle-05.png';
    var unlimitedBundleBlack = 'Afbeeldingen/Icons/bundle-03.png';
    var unlimitedBundleYellow = 'Afbeeldingen/Icons/bundle-06.png';
    var kleurVeranderSmallBundle = false;
    var kleurVeranderMediumBundle = false;
    var kleurVeranderUnlimitedBundle = false;
    var simonlyBlack = document.getElementById("simonlyBlack");
    var phoneBlack = document.getElementById("phoneBlack");
    //Order dynamisch veranderen
    var changeImage = document.getElementById("changeImage");
    var changeText = document.getElementById("changeText");
    var changeBundle = document.getElementById("changeBundle");
    var changeBundleText = document.getElementById("changeBundleText");
    //Error messge displaying
    var errorMessage = document.getElementById("errorMessage");
    var confirmButton = document.getElementById("confirmButton");
    //Error message logic
    var form = document.getElementById("form");
    var inputs = form.getElementsByTagName('input');
    //Gegevens van mensen verwerken
    var voornaam = document.getElementById("voornaam");
    var tussenvoegsel = document.getElementById("tussenvoegsel");
    var achternaam = document.getElementById("achternaam");
    var geboortedatum = document.getElementById("geboortedatum");
    var email = document.getElementById("email");
    var adres = document.getElementById("adres");
    var straat = document.getElementById("straat");
    var huisnummer = document.getElementById("huisnummer");
    //Alle gegevens items
    var naam = document.getElementById("naam");
    var straatnummer = document.getElementById("straatnummer");
    var adresPersoon = document.getElementById("adresPersoon");
    var emailPersoon = document.getElementById("emailPersoon");
    var geboortedatumPersoon = document.getElementById("geboortedatumPersoon");
    //Progressbar
    var progressbar = document.getElementById("progressbar");
    //Responsive menu

    voornaam.onkeyup = function()
    {
        progressbar.setAttribute('style','width: 15%');
    }

    achternaam.onkeyup = function()
    {
        progressbar.setAttribute('style','width: 30%');
    }

    geboortedatum.onkeyup = function()
    {
        progressbar.setAttribute('style','width: 45%');
    }

    email.onkeyup = function()
    {
        progressbar.setAttribute('style','width: 65%');
    }

    adres.onkeyup = function()
    {
        progressbar.setAttribute('style','width: 75%');
    }

    straat.onkeyup = function()
    {
        progressbar.setAttribute('style','width: 85%');
    }

    huisnummer.onkeyup = function()
    {
        progressbar.setAttribute('style','width: 100%');
    }


function ErrorCheck() 
{
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                alert("Fill in your information to complete your order");
                return false;
            }
        }
        else
        {
            chosingPage.style.display = "none";
            confirmOrder.style.display = "block";
            naam.innerHTML = voornaam.value + " " + achternaam.value;
            straatnummer.innerHTML = straat.value + " " + huisnummer.value;
            adresPersoon.innerHTML = adres.value;
            emailPersoon.innerHTML = email.value;
            geboortedatumPersoon.innerHTML = geboortedatum.value;
        }
    }
    return true;
}

function ErrorPrevention()
{
}


    confirmButton.onclick = function()
    {
       ErrorCheck();
    };

    orderButton.onclick = function()
    {
        errorMessage.style.display = "block";
    }

    phoneKeuze.onclick = function()
    {
        phoneKeuze.classList.toggle("selectedItem");
        if(state){
            phoneBlack.src = off;
          state = false;
        }
        else{
            phoneBlack.src = on;
          state = true;
        }
    };

    simonlykeuze.onclick = function()
    {
        simonlykeuze.classList.toggle("selectedItem");
        if(status){
            simonlyBlack.src = uit;
          status = false;
        }
        else{
            simonlyBlack.src = aan;
          status = true;
        }
    };

    smallBundle.onclick = function()
    {
        smallBundle.classList.toggle("selectedBundle");
        if(kleurVeranderSmallBundle){
            smallBundlePhoto.src = smallBundleBlack;
          kleurVeranderSmallBundle = false;
          changeBundle.setAttribute('src','');
          changeBundleText.innerHTML = 'None yet';
        }
        else{
            smallBundlePhoto.src = smallBundleYellow;
          kleurVeranderSmallBundle = true;
          changeBundle.setAttribute('src','Afbeeldingen/Icons/bundle-01.png');
          changeBundleText.innerHTML = 'Small Bundle';
        }
        mediumBundle.classList.remove("selectedBundle");
        mediumBundlePhoto.setAttribute('src','Afbeeldingen/Icons/bundle-02.png');
        kleurVeranderMediumBundle = false;
        unlimitedBundle.classList.remove("selectedBundle");
        unlimitedBundlePhoto.setAttribute('src','Afbeeldingen/Icons/bundle-03.png');
        kleurVeranderUnlimitedBundle = false;
    };

    mediumBundle.onclick = function()
    {
        if(kleurVeranderMediumBundle){
            mediumBundlePhoto.src = mediumBundleBlack;
          kleurVeranderMediumBundle = false;
          changeBundle.setAttribute('src','');
          changeBundleText.innerHTML = 'None yet';
        }
        else{
            mediumBundlePhoto.src = mediumBundleYellow;
          kleurVeranderMediumBundle = true;
          changeBundle.setAttribute('src','Afbeeldingen/Icons/bundle-02.png');
          changeBundleText.innerHTML = 'Medium Bundle';
        }
        mediumBundle.classList.toggle("selectedBundle");
        smallBundle.classList.remove("selectedBundle");
        smallBundlePhoto.setAttribute('src','Afbeeldingen/Icons/bundle-01.png');
        kleurVeranderSmallBundle = false;
        unlimitedBundle.classList.remove("selectedBundle");
        unlimitedBundlePhoto.setAttribute('src','Afbeeldingen/Icons/bundle-03.png');
        kleurVeranderUnlimitedBundle = false;
    };

    unlimitedBundle.onclick = function()
    {
        if(kleurVeranderUnlimitedBundle){
            unlimitedBundlePhoto.src = unlimitedBundleBlack;
          kleurVeranderUnlimitedBundle = false;
          changeBundle.setAttribute('src','');
          changeBundleText.innerHTML = 'None yet';
        }
        else{
            unlimitedBundlePhoto.src = unlimitedBundleYellow;
          kleurVeranderUnlimitedBundle = true;
          changeBundle.setAttribute('src','Afbeeldingen/Icons/bundle-03.png');
          changeBundleText.innerHTML = 'Unlimited Bundle';
        }
        unlimitedBundle.classList.toggle("selectedBundle");
        smallBundle.classList.remove("selectedBundle");
        smallBundlePhoto.setAttribute('src','Afbeeldingen/Icons/bundle-01.png');
        kleurVeranderSmallBundle = false;
        mediumBundle.classList.remove("selectedBundle");
        mediumBundlePhoto.setAttribute('src','Afbeeldingen/Icons/bundle-02.png');
        kleurVeranderMediumBundle = false;
    };

    IphoneXR.onclick = function()
    {
        IphoneXR.classList.toggle("selectedPhone");
        changeImage.setAttribute('src','Afbeeldingen/Telefoons/apple-iphone-xr.png');
        changeText.innerHTML = 'Iphone XR';

        //Verwijderen van andere selecties
        IphoneXS.classList.remove("selectedPhone");
        HuaweiP9.classList.remove("selectedPhone");
        SamsungGalaxyNote9.classList.remove("selectedPhone");
        SamsungGalaxyS9.classList.remove("selectedPhone");
        LGV40ThinQ.classList.remove("selectedPhone");
        SamsungGalaxyA7.classList.remove("selectedPhone");
        SamsungGalaxyJ4Plus.classList.remove("selectedPhone");
    };

    IphoneXS.onclick = function()
    {
        IphoneXS.classList.toggle("selectedPhone");
        changeImage.setAttribute('src','Afbeeldingen/Telefoons/apple-iphone-xs-64gb-gold-front.png');
        changeText.innerHTML = 'Iphone XS';

        //Verwijderen van andere selecties
        IphoneXR.classList.remove("selectedPhone");
        HuaweiP9.classList.remove("selectedPhone");
        SamsungGalaxyNote9.classList.remove("selectedPhone");
        SamsungGalaxyS9.classList.remove("selectedPhone");
        LGV40ThinQ.classList.remove("selectedPhone");
        SamsungGalaxyA7.classList.remove("selectedPhone");
        SamsungGalaxyJ4Plus.classList.remove("selectedPhone");
    };

    HuaweiP9.onclick = function()
    {
        HuaweiP9.classList.toggle("selectedPhone");
        changeImage.setAttribute('src','Afbeeldingen/Telefoons/huawei-p-smart.png');
        changeText.innerHTML = 'Huawei P9 Smart';

        //Verwijderen van andere selecties
        IphoneXS.classList.remove("selectedPhone");
        IphoneXR.classList.remove("selectedPhone");
        SamsungGalaxyNote9.classList.remove("selectedPhone");
        SamsungGalaxyS9.classList.remove("selectedPhone");
        LGV40ThinQ.classList.remove("selectedPhone");
        SamsungGalaxyA7.classList.remove("selectedPhone");
        SamsungGalaxyJ4Plus.classList.remove("selectedPhone");
    };

    SamsungGalaxyNote9.onclick = function()
    {
        SamsungGalaxyNote9.classList.toggle("selectedPhone");
        changeImage.setAttribute('src','Afbeeldingen/Telefoons/samsung-galaxy-note-9.png');
        changeText.innerHTML = 'Samsung Galaxy Note 9';

        //Verwijderen van andere selecties
        IphoneXS.classList.remove("selectedPhone");
        IphoneXR.classList.remove("selectedPhone");
        HuaweiP9.classList.remove("selectedPhone");
        SamsungGalaxyS9.classList.remove("selectedPhone");
        LGV40ThinQ.classList.remove("selectedPhone");
        SamsungGalaxyA7.classList.remove("selectedPhone");
        SamsungGalaxyJ4Plus.classList.remove("selectedPhone");
    };

    SamsungGalaxyS9.onclick = function()
    {
        SamsungGalaxyS9.classList.toggle("selectedPhone");
        changeImage.setAttribute('src','Afbeeldingen/Telefoons/samsung-galaxy-s9.png');
        changeText.innerHTML = 'Samsung Galaxy S9';

        //Verwijderen van andere selecties
        IphoneXS.classList.remove("selectedPhone");
        IphoneXR.classList.remove("selectedPhone");
        HuaweiP9.classList.remove("selectedPhone");
        SamsungGalaxyNote9.classList.remove("selectedPhone");
        LGV40ThinQ.classList.remove("selectedPhone");
        SamsungGalaxyA7.classList.remove("selectedPhone");
        SamsungGalaxyJ4Plus.classList.remove("selectedPhone");
    };

    LGV40ThinQ.onclick = function()
    {
        LGV40ThinQ.classList.toggle("selectedPhone");
        changeImage.setAttribute('src','Afbeeldingen/Telefoons/lg-v40-thinq.png');
        changeText.innerHTML = 'LG V40 ThinQ';

        //Verwijderen van andere selecties
        IphoneXS.classList.remove("selectedPhone");
        IphoneXR.classList.remove("selectedPhone");
        HuaweiP9.classList.remove("selectedPhone");
        SamsungGalaxyNote9.classList.remove("selectedPhone");
        SamsungGalaxyS9.classList.remove("selectedPhone");
        SamsungGalaxyA7.classList.remove("selectedPhone");
        SamsungGalaxyJ4Plus.classList.remove("selectedPhone");
    };

    SamsungGalaxyA7.onclick = function()
    {
        SamsungGalaxyA7.classList.toggle("selectedPhone");
        changeImage.setAttribute('src','Afbeeldingen/Telefoons/samsung-galaxy-a7.png');
        changeText.innerHTML = 'Samsung Galaxy A7';

        //Verwijderen van andere selecties
        IphoneXS.classList.remove("selectedPhone");
        IphoneXR.classList.remove("selectedPhone");
        HuaweiP9.classList.remove("selectedPhone");
        SamsungGalaxyNote9.classList.remove("selectedPhone");
        SamsungGalaxyS9.classList.remove("selectedPhone");
        LGV40ThinQ.classList.remove("selectedPhone");
        SamsungGalaxyJ4Plus.classList.remove("selectedPhone");
    };

    SamsungGalaxyJ4Plus.onclick = function()
    {
        SamsungGalaxyJ4Plus.classList.toggle("selectedPhone");
        changeImage.setAttribute('src','Afbeeldingen/Telefoons/samsung-galaxy-j4-plus.png');
        changeText.innerHTML = 'Samsung Galaxy J4 Plus';
        //Verwijderen van andere selecties
        IphoneXS.classList.remove("selectedPhone");
        IphoneXR.classList.remove("selectedPhone");
        HuaweiP9.classList.remove("selectedPhone");
        SamsungGalaxyNote9.classList.remove("selectedPhone");
        SamsungGalaxyS9.classList.remove("selectedPhone");
        LGV40ThinQ.classList.remove("selectedPhone");
        SamsungGalaxyA7.classList.remove("selectedPhone");
    };

};