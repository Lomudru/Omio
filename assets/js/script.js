let accomodation = document.getElementById("accomodation");
let accomodationDot = document.getElementById("accomodation-dot");

accomodation.addEventListener("click",function(){
    accomodationDot.classList.toggle("active");
    accomodationDot.classList.toggle("disabled");
})