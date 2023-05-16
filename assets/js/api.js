$('#FromCity').on('keyup', (evt) => {
    let value = $('#FromCity').val();
    if (value.length >= 1){
        getTown(value, '#FirstCity');
    }
    if (value.length === 0){
        $('.town').remove();
    }
});

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




function getTown(town, id){
    $.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${town}`).then(res => {
        let { local_name } = res;
        $('.town').remove();
        for (let i = 0; i < res.length; i++){
            let ActualTown = res[i].local_name.split(',')
            $(id).append(`
                <p class="town"  id="IdTown${i}">${ActualTown[0]}, ${ActualTown[2]}</p>
             `)
        }
    })
}

function getPopularTown(town, id){
    $.get(`https://api.comparatrip.eu/cities/popular/from/${town}/5`).then(res => {
        let { local_name } = res;
        $('.town').remove();
        for (let i = 0; i < res.length; i++){
            let ActualTown = res[i].local_name.split(',')
            $(id).append(`<p class="town" id="IdTown${i}">${ActualTown[0]}, ${ActualTown[2]}</p>`)
        }
    })
}

$("body").on("click", ".town", function () {
    if (this.parentNode.id === "FirstCity"){
        FillCity(this, "FromCity");
    }
    if (this.parentNode.id === "LastCity"){
        FillCity(this, "ToCity");
    }
});

function FillCity(caller, where) {
    document.getElementById(where).value= caller.innerHTML;
}


$( function() {
    $( "#datepickerFirst" ).datepicker();
} );

$( function() {
    $( "#datepickerLast" ).datepicker();
} );