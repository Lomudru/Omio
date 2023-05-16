let accomodation = document.getElementById("accomodation");
let accomodationDot = document.getElementById("accomodation-dot");
let selectWay = document.getElementById("select");
let selectOption = document.getElementById("select-option");
let person = document.getElementById("person");
let optionPerson = document.getElementById("option-person");

accomodation.addEventListener("click",function(){
    accomodationDot.classList.toggle("active");
    accomodationDot.classList.toggle("disabled");
})

selectWay.addEventListener("click",function () {
    selectOption.classList.toggle("show");
    selectOption.classList.toggle("hidden");
})

person.addEventListener("click", function () {
    optionPerson.classList.toggle("show");
    optionPerson.classList.toggle("hidden");
})




