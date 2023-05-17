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
let YouthAge = document.getElementById("YouthAge");
let NumberPerson = document.querySelector("#person p");
let Adult = document.getElementById("number-adult");
let Youth = document.getElementById("number-youth");
let Senior = document.getElementById("number-senior");
accomodation.addEventListener("click",function(){
    accomodationDot.classList.toggle("active");
    accomodationDot.classList.toggle("disabled");
})

selectWay.addEventListener("click",function () {
    selectOption.classList.toggle("show");
    selectOption.classList.toggle("hidden");
    for (let j = 0; j < options.length; j++){
        if (options[j].innerHTML === optionSelected.innerHTML){
            options[j].parentElement.classList.add("actual");
        }
        else {
            options[j].parentElement.classList.remove("actual");
        }
    }
})

person.addEventListener("click", function () {
    optionPerson.classList.toggle("show");
    optionPerson.classList.toggle("hidden");
})

for (let i = 0; i < options.length; i++){
    options[i].addEventListener("click", function () {
        optionSelected.innerHTML = options[i].innerHTML;
    })
}
document.addEventListener("click", function (){
    FirstCity.innerHTML = "";
    LastCity.innerHTML = "";
})


for (let k = 0; k < ChangingNumberPerson.length; k++){
    ChangingNumberPerson[k].addEventListener("click", function () {
        optionPerson.classList.toggle("show");
        optionPerson.classList.toggle("hidden");
        if (ChangingNumberPerson[k].id === "less-adult" || ChangingNumberPerson[k].id === "more-adult"){
                if (ChangingNumberPerson[k].id === "less-adult"){
                    if (parseInt(Adult.innerText) > 0){
                        Adult.innerText = parseInt(Adult.innerText) - 1;
                        if (parseInt(Adult.innerText) === 0){
                            ChangingNumberPerson[k].parentNode.classList.add("disabledAddPerson");
                        }
                    }
                }
                else if (ChangingNumberPerson[k].id === "more-adult"){
                    Adult.innerText = parseInt(Adult.innerText) + 1;
                    ChangingNumberPerson[k].parentNode.classList.remove("disabledAddPerson");
                }
        }
        else if (ChangingNumberPerson[k].id === "less-youth" || ChangingNumberPerson[k].id === "more-youth"){
                if (ChangingNumberPerson[k].id === "less-youth"){
                    if (parseInt(Youth.innerText) > 0){
                        Youth.innerText = parseInt(Youth.innerText) - 1;
                        if (parseInt(Youth.innerText) === 0){
                            ChangingNumberPerson[k].parentNode.classList.add("disabledAddPerson");
                            YouthAge.innerHTML = "";
                        }
                    }
                }
                else if (ChangingNumberPerson[k].id === "more-youth"){
                    Youth.innerText = parseInt(Youth.innerText) + 1;
                    ChangingNumberPerson[k].parentNode.classList.remove("disabledAddPerson");
                    YouthAge.innerHTML += "<p>Youth "+ Youth.innerText +"</p>" +
                        "<select id='YouthSelect"+ Youth.innerText +"'><option value='' disabled selected hidden>Age</option></select>";
                    for (let m = 0; m < 25; m++){
                        YouthAge.querySelector("YouthSelect" + YouthAge.innerHTML +"").innerHTML += "<option>"+ m +" years</option>"
                    }
                }
        }
        else if (ChangingNumberPerson[k].id === "less-senior" || ChangingNumberPerson[k].id === "more-senior"){
                if (ChangingNumberPerson[k].id === "less-senior"){
                    if (parseInt(Senior.innerText) > 0){
                        Senior.innerText = parseInt(Senior.innerText) - 1;
                        if (parseInt(Senior.innerText) === 0){
                            ChangingNumberPerson[k].parentNode.classList.add("disabledAddPerson");
                        }
                    }
                }
                else if (ChangingNumberPerson[k].id === "more-senior"){
                    Senior.innerText = parseInt(Senior.innerText) + 1;
                    ChangingNumberPerson[k].parentNode.classList.remove("disabledAddPerson");
                }
        }
        if (parseInt(Youth.innerText) > 0 || parseInt(Senior.innerText) > 0){
            NumberPerson.innerText = parseInt(Adult.innerText) + parseInt(Youth.innerText) + parseInt(Senior.innerText) + " Passengers, No discound card"
        }
        else {
            if (parseInt(Adult.innerText) + parseInt(Youth.innerText) + parseInt(Senior.innerText) > 1){
                NumberPerson.innerText = parseInt(Adult.innerText) + parseInt(Youth.innerText) + parseInt(Senior.innerText) + " Adults, No discound card"
            }
            else {
                NumberPerson.innerText = parseInt(Adult.innerText) + parseInt(Youth.innerText) + parseInt(Senior.innerText) + " Adult, No discound card"
            }
        }
    })
}
YouthAge.addEventListener("click", function () {
    optionPerson.classList.toggle("show");
    optionPerson.classList.toggle("hidden");
})
