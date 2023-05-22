// ====================================================
// The detector of the 2 input who is calling a api
// ====================================================
$('#FromCity').on('keyup', (evt) => {
    let value = $('#FromCity').val();
    if (value.length >= 1){
        getTown(value, '#FirstCity');
    }
    if (value.length === 0){
        $('.town').remove();
    }
});

// the detector of click who is calling the api to show the top 5 of the most visited city from the town selected
$('#ToCity').on('click', (evt) =>{
    if ($('#FromCity').val().length >= 1){
        getPopularTown($('#FromCity').val() ,'#LastCity');
    }
})
$('#ToCity').on('keyup', (evt) =>{
    let value = $('#ToCity').val();
    if (value.length >= 1){
        getTown(value, '#LastCity');
    }
    if (value.length === 0){
        $('.town').remove();
    }
})



// ====================================================
// The api to get the town
// ====================================================
function getTown(town, id){
    $.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${town}`).then(res => {
        let { local_name } = res;
        $('.town').remove();
        for (let i = 0; i < res.length; i++){
            let ActualTown = res[i].local_name.split(',')
            $(id).append(`
                <p class="town" id="IdTown${i}"><i class="fa-solid fa-location-dot"></i>${ActualTown[0]}, ${ActualTown[2]}</p>
             `)
        }
    })
}
// =================================================================
// The api to get the tio 5 of best cities from the town selected
// =================================================================
function getPopularTown(town, id){
    $.get(`https://api.comparatrip.eu/cities/popular/from/${town}/5`).then(res => {
        let { local_name } = res;
        $('.town').remove();
        for (let i = 0; i < res.length; i++){
            let ActualTown = res[i].local_name.split(',')
            $(id).append(`<p class="town" id="IdTown${i}"><i class="fa-solid fa-location-dot"></i>${ActualTown[0]}, ${ActualTown[2]}</p>`)
        }
    })
}
// =============================================================
// The detector of the click of the cities proposed by the api
// =============================================================
$("body").on("click", ".town", function () {
    if (this.parentNode.id === "FirstCity"){
        FillCity(this, "FromCity");
    }
    if (this.parentNode.id === "LastCity"){
        FillCity(this, "ToCity");
    }
});
function FillCity(caller, where) {
    document.getElementById(where).value = caller.innerHTML.split("</i>")[1];
}

// ============================================================
// The 2 datepicker of jquery because i don't know react.js
// ============================================================
$( function() {
    $( "#datepickerFirst" ).datepicker();
} );

$( function() {
    $( "#datepickerLast" ).datepicker();
} );