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
let WayClicked = false;
let canHideWay = false;
let PersonClicked = false;
let canHidePerson = false;

accomodation.addEventListener("click",function(){
    accomodationDot.classList.toggle("active");
    accomodationDot.classList.toggle("disabled");
})

selectWay.addEventListener("click",function () {
    selectOption.classList.toggle("show");
    selectOption.classList.toggle("hidden");
    WayClicked = true;
    setTimeout(function () {
        canHideWay = true;
    }, 1);
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
    PersonClicked = true;
    setTimeout(function () {
        canHidePerson = true;
    }, 1);
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


