// All the let i use in this file
let accomodation = document.getElementById("accomodation");
let accomodationDot = document.getElementById("accomodation-dot");
let selectWay = document.getElementById("select");
let selectOption = document.getElementById("select-option");
let person = document.getElementById("person");
let optionPerson = document.getElementById("option-person");
let options = document.querySelectorAll("#select-option p");
let optionSelected = document.getElementById("selected-option");
let FirstCity = document.getElementById("FirstCity");
let LastCity = document.getElementById("LastCity");
let ChangingNumberPerson = document.querySelectorAll(".changing-number");
let Age = document.querySelectorAll(".Age");
let NumberPerson = document.querySelector("#person p");
let Adult = document.getElementById("number-adult");
let Youth = document.getElementById("number-youth");
let Senior = document.getElementById("number-senior");
let ButtonMenuBurger = document.querySelectorAll(".ButtonMenuBurger");
let MenuBurger = document.querySelector("li:last-of-type");
let ButtonCurrency = document.querySelectorAll(".currencyButton");
let DivCurrency = document.getElementById("currency");
let AllCurrencyOption = document.querySelectorAll("#currency p");
let ButtonLanguage = document.querySelectorAll(".languageButton");
let DivLanguage = document.getElementById("language");
let AllLanguageOption = document.querySelectorAll("#language p");
let DesktopCurrencyButton = document.getElementById("currentDesktopButton");
let DesktopCurrency = document.getElementById("currencyDesktop");
let DesktopLanguageButton = document.getElementById("languageDesktopButton");
let DesktopLanguage = document.getElementById("languageDesktop");
let AllDesktopCurrencyOption = document.querySelectorAll("#currencyDesktop p");
let AllDesktopLanguageOption = document.querySelectorAll("#languageDesktop p");
let CanHideWay = false;
let WayClicked = false;
let CanHidePerson = false;
let PersonClicked = false;
let DesktopCurrencyHide = false;
let DesktopLanguageHide = false;

// ====================================================
// The JS to disable the accommodation button
// ====================================================
accomodation.addEventListener("click", function () {
    accomodationDot.classList.toggle("active");
    accomodationDot.classList.toggle("disabled");
})

// ====================================================
// The JS for the select way and the number of person
// ====================================================
selectWay.addEventListener("click", function () {
    selectOption.classList.toggle("show");
    selectOption.classList.toggle("hidden");
    WayClicked = true;
    for (let j = 0; j < options.length; j++) {
        if (options[j].innerHTML === optionSelected.innerHTML) {
            options[j].parentElement.classList.add("actual");
        } else {
            options[j].parentElement.classList.remove("actual");
        }
    }
    setTimeout(function () {
        CanHideWay = true;
        WayClicked = false;
    }, 1);

})
person.addEventListener("click", function () {
    optionPerson.classList.toggle("show");
    optionPerson.classList.toggle("hidden");
    PersonClicked = true;
    setTimeout(function () {
        CanHidePerson = true;
        PersonClicked = false;
    }, 1);
})

// The event who is going to detect when a way is selected and put it
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
        optionSelected.innerHTML = options[i].innerHTML;
    })
}

// The event who detect when the document is clicked to hide the select and the cities options of the api
document.addEventListener("click", function () {
    FirstCity.innerHTML = "";
    LastCity.innerHTML = "";
    if (CanHideWay && !WayClicked && selectOption.classList.value === "show") {
        selectOption.classList.toggle("show");
        selectOption.classList.toggle("hidden");
        CanHideWay = false;
    }
    if (CanHidePerson && !PersonClicked && optionPerson.classList.value === "show") {
        optionPerson.classList.toggle("show");
        optionPerson.classList.toggle("hidden");
    }
})

// The JS for the number of person selector to make it work correctly
for (let k = 0; k < ChangingNumberPerson.length; k++) {
    ChangingNumberPerson[k].addEventListener("click", function () {
        optionPerson.classList.toggle("show");
        optionPerson.classList.toggle("hidden");
        // A if that detect when a the button + or - of adult are clicked
        if (ChangingNumberPerson[k].id === "less-adult" || ChangingNumberPerson[k].id === "more-adult") {
            if (ChangingNumberPerson[k].id === "less-adult") {
                if (parseInt(Adult.innerText) > 0) {
                    Adult.innerText = parseInt(Adult.innerText) - 1;
                    if (parseInt(Adult.innerText) === 0) {
                        ChangingNumberPerson[k].parentNode.classList.add("disabledAddPerson");
                    }
                }
            } else if (ChangingNumberPerson[k].id === "more-adult") {
                Adult.innerText = parseInt(Adult.innerText) + 1;
                ChangingNumberPerson[k].parentNode.classList.remove("disabledAddPerson");
            }
        }
        // A else if that detect when a the button + or - of youth are clicked
        else if (ChangingNumberPerson[k].id === "less-youth" || ChangingNumberPerson[k].id === "more-youth") {
            if (ChangingNumberPerson[k].id === "less-youth") {
                if (parseInt(Youth.innerText) > 0) {
                    Youth.innerText = parseInt(Youth.innerText) - 1;
                    if (parseInt(Youth.innerText) === 0) {
                        ChangingNumberPerson[k].parentNode.classList.add("disabledAddPerson");
                        YouthAge.innerHTML = "";
                    } else {
                        let ActualYouthAge = YouthAge.innerHTML.split("<div>")
                        let FuturYouthAge;
                        for (let n = 0; n < ActualYouthAge.length - 1; n++) {
                            if (FuturYouthAge === undefined) {
                                FuturYouthAge = "<div>" + ActualYouthAge[n];
                            } else {
                                if (n > 1) {
                                    FuturYouthAge += "<div>" + ActualYouthAge[n];
                                } else {
                                    FuturYouthAge += ActualYouthAge[n];
                                }
                            }
                        }
                        YouthAge.innerHTML = FuturYouthAge;
                    }

                }
            } else if (ChangingNumberPerson[k].id === "more-youth") {
                let YouthNumber = parseInt(Youth.innerText) + 1;
                Youth.innerText = YouthNumber;
                ChangingNumberPerson[k].parentNode.classList.remove("disabledAddPerson");
                YouthAge.innerHTML += "<div><hr><p>Youth " + Youth.innerText + "</p>" +
                    "<select id='YouthSelect" + Youth.innerText + "'><option value='' disabled selected hidden>Age</option></select></div>";
                for (let m = 0; m <= 25; m++) {
                    YouthAge.querySelector("#YouthSelect" + YouthNumber + "").innerHTML += "<option>" + m + " years</option>"
                }
            }
        }
        // A else if that detect when a the button + or - of senior are clicked
        else if (ChangingNumberPerson[k].id === "less-senior" || ChangingNumberPerson[k].id === "more-senior") {
            if (ChangingNumberPerson[k].id === "less-senior") {
                if (parseInt(Senior.innerText) > 0) {
                    Senior.innerText = parseInt(Senior.innerText) - 1;
                    if (parseInt(Senior.innerText) === 0) {
                        ChangingNumberPerson[k].parentNode.classList.add("disabledAddPerson");
                        SeniorAge.innerHTML = "";
                    } else {
                        let ActualSeniorAge = SeniorAge.innerHTML.split("<div>")
                        let FuturSeniorAge;
                        for (let n = 0; n < ActualSeniorAge.length - 1; n++) {
                            if (FuturSeniorAge === undefined) {
                                FuturSeniorAge = "<div>" + ActualSeniorAge[n];
                            } else {
                                if (n > 1) {
                                    FuturSeniorAge += "<div>" + ActualSeniorAge[n];
                                } else {
                                    FuturSeniorAge += ActualSeniorAge[n];
                                }
                            }
                        }
                        SeniorAge.innerHTML = FuturSeniorAge;
                    }
                }
            } else if (ChangingNumberPerson[k].id === "more-senior") {
                let SeniorNumber = parseInt(Senior.innerText) + 1;
                Senior.innerText = SeniorNumber;
                ChangingNumberPerson[k].parentNode.classList.remove("disabledAddPerson");
                SeniorAge.innerHTML += "<div><hr><p>Senior " + Senior.innerText + "</p>" +
                    "<select id='SeniorSelect" + Senior.innerText + "'><option value='' disabled selected hidden>Age</option></select></div>";
                for (let m = 58; m <= 75; m++) {
                    SeniorAge.querySelector("#SeniorSelect" + SeniorNumber + "").innerHTML += "<option>" + m + " years</option>"
                }
            }
        }
        // a if that detect if there is one youth or one senior
        if (parseInt(Youth.innerText) > 0 || parseInt(Senior.innerText) > 0) {
            NumberPerson.innerText = parseInt(Adult.innerText) + parseInt(Youth.innerText) + parseInt(Senior.innerText) + " Passengers, No discound card"
        } else {
            if (parseInt(Adult.innerText) + parseInt(Youth.innerText) + parseInt(Senior.innerText) > 1) {
                NumberPerson.innerText = parseInt(Adult.innerText) + parseInt(Youth.innerText) + parseInt(Senior.innerText) + " Adults, No discound card"
            } else {
                NumberPerson.innerText = parseInt(Adult.innerText) + parseInt(Youth.innerText) + parseInt(Senior.innerText) + " Adult, No discound card"
            }
        }
    })
}

// The event who is gona detect when the select of age is clicked so it doesn't hide the number of person select
for (let o = 0; o < Age.length; o++) {
    Age[o].addEventListener("click", function () {
        optionPerson.classList.toggle("show");
        optionPerson.classList.toggle("hidden");
    })
}


// ====================================================
// The JS for the menu burger of the header
// ====================================================

// for the mobile version

for (let p = 0; p < ButtonMenuBurger.length; p++){
    ButtonMenuBurger[p].addEventListener("click", function () {
        MenuBurger.classList.toggle("hidden");
    })
}
for (let q = 0; q < ButtonCurrency.length; q++){
    ButtonCurrency[q].addEventListener("click", function () {
        DivCurrency.classList.toggle("hidden");
    })
}
for (let r = 0; r < ButtonLanguage.length; r++){
    ButtonLanguage[r].addEventListener("click", function () {
        DivLanguage.classList.toggle("hidden");
    })
}
for (let s = 1; s < AllCurrencyOption.length; s++){
    AllCurrencyOption[s].addEventListener("click", function () {
        DivCurrency.classList.toggle("hidden");
        ButtonCurrency[0].querySelector("span:last-of-type span").innerText = AllCurrencyOption[s].innerText.substring(0, 3);
        for (let u = 1; u < AllCurrencyOption.length; u++){
            AllCurrencyOption[u].querySelector("span:first-of-type").innerHTML =  AllCurrencyOption[u].innerText.substring(0, 3);
        }
        AllCurrencyOption[s].querySelector("span:first-of-type").innerHTML = "<i class=\"fa-solid fa-check\"></i>" + AllCurrencyOption[s].innerText.substring(0, 3);
    })
}
for (let t = 1; t < AllLanguageOption.length; t++){
    AllLanguageOption[t].addEventListener("click", function () {
        DivLanguage.classList.toggle("hidden");
        for (let v = 1; v < AllLanguageOption.length; v++){
            AllLanguageOption[v].querySelector("span:first-of-type").innerHTML = AllLanguageOption[v].querySelector("span:first-of-type").innerText
        }
        ButtonLanguage[0].querySelector("img").src = AllLanguageOption[t].querySelector("img").src;
        AllLanguageOption[t].querySelector("span:first-of-type").innerHTML = "<i class=\"fa-solid fa-check\"></i>" + AllLanguageOption[t].querySelector("span:first-of-type").innerText
    })
}

// For the desktop version

DesktopCurrencyButton.addEventListener("click", function () {
    DesktopCurrency.classList.toggle("hidden");
    setTimeout(function () {
        DesktopCurrencyHide = true;
    },1)
})

DesktopLanguageButton.addEventListener("click", function () {
    DesktopLanguage.classList.toggle("hidden");
    setTimeout(function () {
        DesktopLanguageHide = true;
    },1)
})

for (let w = 0; w < AllDesktopCurrencyOption.length; w++){
    AllDesktopCurrencyOption[w].addEventListener("click", function () {
        DesktopCurrencyHide = false;
        DesktopCurrency.classList.toggle("hidden");
        console.log(AllDesktopCurrencyOption[w].querySelector("span:last-of-type").innerHTML);
        DesktopCurrencyButton.innerHTML = AllDesktopCurrencyOption[w].querySelector("span:last-of-type").innerHTML + "<i class=\"fa-solid fa-chevron-down\"></i>";
        for (let y = 0; y < AllDesktopCurrencyOption.length; y++){
            AllDesktopCurrencyOption[y].querySelector("span:first-of-type").innerHTML =  AllDesktopCurrencyOption[y].innerText.substring(0, 3);
        }
        AllDesktopCurrencyOption[w].querySelector("span:first-of-type").innerHTML = "<i class=\"fa-solid fa-check\"></i>" + AllDesktopCurrencyOption[w].innerText.substring(0, 3);
    })
}
for (let z = 0; z < AllDesktopLanguageOption.length; z++){
    AllDesktopLanguageOption[z].addEventListener("click", function () {
        DesktopLanguageHide = false;
        DesktopLanguage.classList.toggle("hidden");
        for (let x = 0; x < AllDesktopLanguageOption.length; x++){
            AllDesktopLanguageOption[x].querySelector("span:first-of-type").innerHTML = AllDesktopLanguageOption[x].querySelector("span:first-of-type").innerText
        }
        DesktopLanguageButton.querySelector("img").src = AllDesktopLanguageOption[z].querySelector("img").src;
        AllDesktopLanguageOption[z].querySelector("span:first-of-type").innerHTML = "<i class=\"fa-solid fa-check\"></i>" + AllDesktopLanguageOption[z].querySelector("span:first-of-type").innerText
    })
}

document.addEventListener("click", function () {
    if (DesktopCurrencyHide && DesktopCurrency.classList.value !== "hidden"){
        DesktopCurrency.classList.toggle("hidden");
        DesktopCurrencyHide = false;
    }
    else if (DesktopLanguageHide && DesktopLanguage.classList.value !== "hidden"){
        DesktopLanguage.classList.toggle("hidden");
        DesktopLanguageHide = false;
    }
    else {
        DesktopCurrencyHide = false;
        DesktopLanguageHide = false;
    }
})

